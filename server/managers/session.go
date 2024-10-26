package managers

import (
	"gorm.io/gorm"
	"server/models"
	"time"
)

func InitSessionManager(db *gorm.DB) error {
	var sessions []models.UserSession

	err := db.Model(&models.UserSession{}).Where("active = ?", true).Find(&sessions).Error
	if err != nil {
		return err
	}

	for _, session := range sessions {
		AddToExpiry(session, db)
	}

	return nil
}

func AddToExpiry(session models.UserSession, db *gorm.DB) {
	go expire(session, db)
}

func expire(session models.UserSession, db *gorm.DB) {
	duration := session.ExpirationDate.Sub(time.Now())

	if duration > 0 {
		time.Sleep(duration)
	}

	db.Model(&session).Update("active", false)
}
