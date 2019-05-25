package models

type Project struct {
	Id string
	Title string
	Description string
	CurrentMilestoneId string
	Users map[string]string
}
