package controllers

import (
	"fmt"
	"net/http"
)

func AddProject(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "AddProject")
}

func GetProject(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "GetProject")
}

func UpdateProject(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "UpdateProject")
}

func DeleteProject(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "DeleteProject")
}

func GetProjectUsers(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "GetProjectUsers")
}

func AddUserToProject(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "AddUserToProject")
}

func RemoveUserFromProject(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "RemoveUserFromProject")
}

func GetMilestones(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "GetMilestones")
}

func AddMilestone(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "AddMilestone")
}

func UpdateMilestone(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "UpdateMilestone")
}

func RemoveMilestone(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "RemoveMilestone")
}

func GetMilestoneAttachments(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "GetMilestoneAttachments")
}

func AddMilestoneAttachment(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "AddMilestoneAttachment")
}

func GetMilestoneAttachment(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "GetMilestoneAttachment")
}

func RemoveMilestoneAttachment(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "RemoveMilestoneAttachment")
}
