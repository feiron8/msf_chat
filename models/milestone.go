package models

type Milestone struct {
	Id int
	Description string
	Iteration int
	MilestoneTypeId int
	ProjectId int
}
