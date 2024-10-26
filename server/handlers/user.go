package handlers

import (
	"encoding/json"
	"github.com/go-chi/chi/v5"
	"gorm.io/gorm"
	"net/http"
	"server/models"
)

type UserCreateRequestBody struct {
	Email     string `json:"email"`
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Password  string `json:"password"`
}

func HandleUser(r chi.Router, db *gorm.DB) {
	r.Post("/create", func(w http.ResponseWriter, r *http.Request) {
		handleUserCreate(w, r, db)
	})
}

func handleUserCreate(w http.ResponseWriter, r *http.Request, db *gorm.DB) {
	var body UserCreateRequestBody

	err := json.NewDecoder(r.Body).Decode(&body)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	var count int64

	db.Model(&models.User{}).Where("email = ?", body.Email).Count(&count)

	if count > 0 {
		http.Error(w, http.StatusText(http.StatusConflict), http.StatusConflict)
		return
	}

	hashedPassword, err := CreateHashForPassword(body.Password)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	user := models.User{
		Email:     body.Email,
		FirstName: body.FirstName,
		LastName:  body.LastName,
		Password:  string(hashedPassword),
	}

	result := db.Create(&user)

	if result.Error != nil {
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
}
