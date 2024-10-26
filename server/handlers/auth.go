package handlers

import (
	"encoding/json"
	"github.com/go-chi/chi/v5"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
	"net"
	"net/http"
	"server/managers"
	"server/models"
	"server/util"
	"strings"
	"time"
)

type UserLoginRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type UserLogoutRequest struct {
	JWT string `json:"jwt"`
}

func HandleAuth(r chi.Router, db *gorm.DB, sessionSecret string, locationToken string) {
	r.Post("/login", func(w http.ResponseWriter, r *http.Request) {
		handleLogin(w, r, db, sessionSecret, locationToken)
	})

	r.Post("/logout", func(w http.ResponseWriter, r *http.Request) {
		handleLogout(w, r, db)
	})

	r.Post("/status", func(w http.ResponseWriter, r *http.Request) {
		handleStatus(w, r, db)
	})
}

func CreateSessionKeyForUser(user string, secret string) (string, time.Time, error) {
	expiration := time.Now().Add(time.Hour * 24)

	token := jwt.NewWithClaims(jwt.SigningMethodHS256,
		jwt.MapClaims{
			"username": user,
			"exp":      expiration.Unix(),
		})

	tokenString, err := token.SignedString([]byte(secret))
	if err != nil {
		return "", time.UnixMilli(0), err
	}

	return tokenString, expiration, nil
}

func CreateHashForPassword(password string) ([]byte, error) {
	hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return nil, err
	}

	return hash, nil
}

func AuthMiddleware(next http.Handler, db *gorm.DB) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		sessionToken, err := r.Cookie("session_token")
		if err != nil {
			http.Error(w, http.StatusText(http.StatusUnauthorized), http.StatusUnauthorized)
			return
		}

		var session models.UserSession

		db.First(&session, "token = ?", sessionToken)

		if !session.Active {
			http.Error(w, http.StatusText(http.StatusUnauthorized), http.StatusUnauthorized)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func handleLogin(w http.ResponseWriter, r *http.Request, db *gorm.DB, sessionSecret string, locationToken string) {
	var body UserLoginRequest

	err := json.NewDecoder(r.Body).Decode(&body)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	var user models.User
	res := db.First(&user, "email = ?", body.Email)
	if res.Error != nil {
		http.Error(w, res.Error.Error(), http.StatusNotFound)
		return
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(body.Password))
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}

	ip, _, err := net.SplitHostPort(r.RemoteAddr)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	forwarded := r.Header.Get("X-Forwarded-For")
	if forwarded != "" {
		ip = strings.Split(forwarded, ",")[0]
	}

	location, err := util.GetLocationForIP(ip, locationToken)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	key, expiration, err := CreateSessionKeyForUser(user.Email, sessionSecret)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	session := models.UserSession{
		Token:  key,
		Device: r.UserAgent(),
		Location: models.UserLocation{
			CityName:    location.City,
			RegionName:  location.Region,
			CountryName: location.CountryName,
		},
		ExpirationDate: expiration,
		Active:         true,
	}

	err = db.Model(&user).Association("Sessions").Append(&session)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	managers.AddToExpiry(session, db)

	// todo: need a better way of handling cors for these cookies to prevent xss

	cookie := &http.Cookie{
		Name:     "session_token",
		Value:    key,
		Expires:  expiration,
		HttpOnly: true,
		Path:     "/",
	}

	http.SetCookie(w, cookie)

	w.WriteHeader(http.StatusOK)
}

func handleLogout(w http.ResponseWriter, r *http.Request, db *gorm.DB) {
	var body UserLogoutRequest

	err := json.NewDecoder(r.Body).Decode(&body)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	db.Model(&models.UserSession{}).Where("token = ?", body.JWT).Update("active", false)

	cookie := &http.Cookie{
		Name:     "session_token",
		Value:    "",
		Expires:  time.Unix(0, 0),
		MaxAge:   -1,
		HttpOnly: true,
		Secure:   true,
	}

	http.SetCookie(w, cookie)

	w.WriteHeader(http.StatusOK)
}

func handleStatus(w http.ResponseWriter, r *http.Request, db *gorm.DB) {
	token, err := r.Cookie("session_token")
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}

	var session models.UserSession

	db.First(&session, "token = ?", token.Value)

	if !session.Active {
		http.Error(w, http.StatusText(http.StatusUnauthorized), http.StatusUnauthorized)
		return
	}

	w.WriteHeader(http.StatusOK)
}
