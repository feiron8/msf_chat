package controllers

import (
	"fmt"
	"github.com/feiron8/msf_chat/models"
	"github.com/gorilla/mux"
	"log"
	"net/http"
	"encoding/json"
)

func AddProject(w http.ResponseWriter, r *http.Request) {
	project := models.Project{}

	fmt.Print(r.Body)

	err := json.NewDecoder(r.Body).Decode(&project)
	if err != nil {
		log.Fatal(err)
	}

	models.AddProject(project, UserId)
	projects := models.GetUserProjects(UserId)
	json.NewEncoder(w).Encode(projects)
}

func AddMessage(w http.ResponseWriter, r *http.Request) {
	message := models.Message{}
	fmt.Print(r.Body)

	err := json.NewDecoder(r.Body).Decode(&message)
	if err != nil {
		log.Fatal(err)
	}

	models.AddMessage(message)
}

func GetMessages(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	projectId := vars["project"]

	messages := models.GetMessages(projectId)
	json.NewEncoder(w).Encode(messages)
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
