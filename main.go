package main

import (
	"github.com/feiron8/msf_chat/controllers"
	"github.com/feiron8/msf_chat/models"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

func main() {
	models.InitDB("mongodb://127.0.0.1:27017")
	r := mux.NewRouter()

	//r.Handle("/", http.FileServer(http.Dir("./client/build")))
	r.HandleFunc("/api/signup", controllers.SignUp).Methods("POST")
	r.HandleFunc("/api/signin", controllers.SignIn).Methods("POST")

	r.HandleFunc("/api/users", controllers.SearchUsers).Methods("GET")
	r.HandleFunc("/api/users", controllers.AddUser).Methods("POST")
	r.HandleFunc("/api/users/{user}", controllers.GetUser).Methods("GET")
	r.HandleFunc("/api/users/{user}", controllers.UpdateUser).Methods("PUT")
	r.HandleFunc("/api/users/{user}", controllers.RemoveUser).Methods("DELETE")
	r.HandleFunc("/api/users/{user}/chats", controllers.GetUserChats).Methods("GET")
	r.HandleFunc("/api/users/{user}/projects", controllers.GetUserProjects).Methods("GET")

	r.HandleFunc("/api/chats", controllers.AddChat).Methods("POST")
	r.HandleFunc("/api/chats/{chat}", controllers.GetChat).Methods("GET")
	r.HandleFunc("/api/chats/{chat}/users", controllers.GetChatUsers).Methods("GET")
	r.HandleFunc("/api/chats/{chat}/users", controllers.AddUserToChat).Methods("POST")
	r.HandleFunc("/api/chats/{chat}/users/{user}", controllers.RemoveUserFromChat).Methods("DELETE")
	r.HandleFunc("/api/chats/{chat}/messages", controllers.GetMessages).Methods("GET")
	r.HandleFunc("/api/chats/{chat}/messages", controllers.AddMessage).Methods("POST")
	r.HandleFunc("/api/chats/{chat}/messages/{message}", controllers.UpdateMessage).Methods("PUT")
	r.HandleFunc("/api/chats/{chat}/messages/{message}", controllers.RemoveMessage).Methods("DELETE")

	r.HandleFunc("/api/projects", controllers.AddProject).Methods("POST")
	r.HandleFunc("/api/projects/{project}", controllers.GetProject).Methods("GET")
	r.HandleFunc("/api/projects/{project}", controllers.UpdateProject).Methods("PUT")
	r.HandleFunc("/api/projects/{project}", controllers.DeleteProject).Methods("DELETE")
	r.HandleFunc("/api/projects/{project}/users", controllers.GetProjectUsers).Methods("GET")
	r.HandleFunc("/api/projects/{project}/users", controllers.AddUserToProject).Methods("POST")
	r.HandleFunc("/api/projects/{project}/users/{user}", controllers.RemoveUserFromProject).Methods("DELETE")
	r.HandleFunc("/api/projects/{project}/milestones", controllers.GetMilestones).Methods("GET")
	r.HandleFunc("/api/projects/{project}/milestones", controllers.AddMilestone).Methods("POST")
	r.HandleFunc("/api/projects/{project}/milestones/{milestone}", controllers.UpdateMilestone).Methods("PUT")
	r.HandleFunc("/api/projects/{project}/milestones/{milestone}", controllers.RemoveMilestone).Methods("DELETE")
	r.HandleFunc("/api/projects/{project}/milestones/{milestone}/attachments", controllers.GetMilestoneAttachments).Methods("GET")
	r.HandleFunc("/api/projects/{project}/milestones/{milestone}/attachments", controllers.AddMilestoneAttachment).Methods("POST")
	r.HandleFunc("/api/projects/{project}/milestones/{milestone}/attachments/{attachment}", controllers.GetMilestoneAttachment).Methods("GET")
	r.HandleFunc("/api/projects/{project}/milestones/{milestone}/attachments/{attachment}", controllers.RemoveMilestoneAttachment).Methods("DELETE")

	err := http.ListenAndServe(":8080", r)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
