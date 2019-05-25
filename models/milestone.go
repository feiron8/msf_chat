package models

type Milestone struct {
	Id string
	Description string
	Iteration int
	MilestoneType string
	ProjectId string
	Attachments []string
}
