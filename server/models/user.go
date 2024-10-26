package models

import (
	"gorm.io/gorm"
	"time"
)

type User struct {
	gorm.Model
	Email    string
	Username string
	Password string
	Sessions []UserSession
}

type UserSession struct {
	gorm.Model
	UserID         uint
	Token          string
	Device         string
	Location       UserLocation
	Active         bool
	ExpirationDate time.Time
}

type UserLocation struct {
	UserSessionID uint
	CityName      string
	RegionName    string
	CountryName   string
}
