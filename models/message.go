package models

type Message struct {
	Id string
	Text string
	Time int
	AuthorId int
	ChatId string
	Attachments []string
}
