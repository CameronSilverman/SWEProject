package main

import (
	"fmt"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"github.com/pelletier/go-toml/v2"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
	"net/http"
	"net/url"
	"os"
	"server/handlers"
	"server/managers"
	"server/models"
	"strconv"
)

var Config RootConfig

func main() {
	rawToml, err := os.ReadFile("config/config.toml")
	if err != nil {
		log.Fatalln("Error reading TOML file", err)
	}

	err = toml.Unmarshal(rawToml, &Config)
	if err != nil {
		log.Fatalln("Error decoding TOML file", err)
	}

	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%d sslmode=%s TimeZone=%s",
		Config.Database.Server,
		Config.Database.User,
		url.QueryEscape(Config.Database.Password),
		Config.Database.Database,
		Config.Database.Port,
		Config.Database.Encryption,
		Config.Database.Timezone,
	)
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalln("Error connecting to database", err)
	}

	err = db.AutoMigrate(
		&models.User{},
		&models.UserSession{},
		&models.UserLocation{})

	if err != nil {
		log.Fatalln("Error auto migrating data", err)
	}

	err = managers.InitSessionManager(db)
	if err != nil {
		log.Fatalln("Error initializing session manager", err)
	}

	r := chi.NewRouter()

	r.Use(middleware.Logger)
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   Config.CorsConfig.Origins,
		AllowedMethods:   Config.CorsConfig.Methods,
		AllowCredentials: true,
	}))

	r.Route("/auth", func(r chi.Router) {
		handlers.HandleAuth(r, db, Config.Session.Token, Config.Session.LocationToken)
	})

	r.Route("/user", func(r chi.Router) {
		handlers.HandleUser(r, db)
	})

	serverConnectionString := fmt.Sprintf(":%d", Config.Server.Port)

	err = http.ListenAndServe(serverConnectionString, r)
	if err != nil {
		log.Fatalln("Error listening on port "+strconv.Itoa(Config.Server.Port), err)
	}
}
