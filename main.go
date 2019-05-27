package main

import (
	"net/http"
	"log"
	"github.com/feiron8/msf_chat/controllers"
	"github.com/feiron8/msf_chat/models"
	"github.com/gorilla/mux"
)

func main() {
	models.InitDB("mongodb://127.0.0.1:27017")
	r := mux.NewRouter()

	r.HandleFunc("/users", controllers.SearchUsers).Methods("GET")
	r.HandleFunc("/users", controllers.AddUser).Methods("POST")
	r.HandleFunc("/users/{user}", controllers.GetUser).Methods("GET")
	r.HandleFunc("/users/{user}", controllers.UpdateUser).Methods("PUT")
	r.HandleFunc("/users/{user}", controllers.RemoveUser).Methods("DELETE")
	r.HandleFunc("/users/{user}/chats", controllers.GetUserChats).Methods("GET")
	r.HandleFunc("/users/{user}/projects", controllers.GetUserProjects).Methods("GET")

	r.HandleFunc("/chats", controllers.AddChat).Methods("POST")
	r.HandleFunc("/chats/{chat}", controllers.GetChat).Methods("GET")
	r.HandleFunc("/chats/{chat}/users", controllers.GetChatUsers).Methods("GET")
	r.HandleFunc("/chats/{chat}/users", controllers.AddUserToChat).Methods("POST")
	r.HandleFunc("/chats/{chat}/users/{user}", controllers.RemoveUserFromChat).Methods("DELETE")
	r.HandleFunc("/chats/{chat}/messages", controllers.GetMessages).Methods("GET")
	r.HandleFunc("/chats/{chat}/messages", controllers.AddMessage).Methods("POST")
	r.HandleFunc("/chats/{chat}/messages/{message}", controllers.UpdateMessage).Methods("PUT")
	r.HandleFunc("/chats/{chat}/messages/{message}", controllers.RemoveMessage).Methods("DELETE")

	r.HandleFunc("/projects", controllers.AddProject).Methods("POST")
	r.HandleFunc("/projects/{project}", controllers.GetProject).Methods("GET")
	r.HandleFunc("/projects/{project}", controllers.UpdateProject).Methods("PUT")
	r.HandleFunc("/projects/{project}", controllers.DeleteProject).Methods("DELETE")
	r.HandleFunc("/projects/{project}/users", controllers.GetProjectUsers).Methods("GET")
	r.HandleFunc("/projects/{project}/users", controllers.AddUserToProject).Methods("POST")
	r.HandleFunc("/projects/{project}/users/{user}", controllers.RemoveUserFromProject).Methods("DELETE")
	r.HandleFunc("/projects/{project}/milestones", controllers.GetMilestones).Methods("GET")
	r.HandleFunc("/projects/{project}/milestones", controllers.AddMilestone).Methods("POST")
	r.HandleFunc("/projects/{project}/milestones/{milestone}", controllers.UpdateMilestone).Methods("PUT")
	r.HandleFunc("/projects/{project}/milestones/{milestone}", controllers.RemoveMilestone).Methods("DELETE")
	r.HandleFunc("/projects/{project}/milestones/{milestone}/attachments", controllers.GetMilestoneAttachments).Methods("GET")
	r.HandleFunc("/projects/{project}/milestones/{milestone}/attachments", controllers.AddMilestoneAttachment).Methods("POST")
	r.HandleFunc("/projects/{project}/milestones/{milestone}/attachments/{attachment}", controllers.GetMilestoneAttachment).Methods("GET")
	r.HandleFunc("/projects/{project}/milestones/{milestone}/attachments/{attachment}", controllers.RemoveMilestoneAttachment).Methods("DELETE")

	err := http.ListenAndServe(":8080", r)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
