package controllers

import (
	"fmt"
	"net/http"
	"encoding/json"
	"github.com/gorilla/mux"
	"github.com/feiron8/msf_chat/models"
)

func GetUserProjects(w http.ResponseWriter, r *http.Request) {
	projects := models.GetUserProjects(UserId)
	json.NewEncoder(w).Encode(projects)
}


func GetUsers(w http.ResponseWriter, r *http.Request) {
	var users []models.User
	users = append(users, models.User{
		Email: "feiron8",
		Pass: "123",
		Name: "Rodion",
		Lastname: "Fedotov",
	})

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(users)
}

func SearchUsers(w http.ResponseWriter, r *http.Request) {
	users := models.GetUsers()
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(users)
}

func AddUser(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "AddUser")
}

func GetUser(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	fmt.Println(vars["user"])
	fmt.Fprintf(w, "GetUser")
}

func UpdateUser(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	fmt.Println(vars["user"])
	fmt.Fprintf(w, "UpdateUser")
}

func RemoveUser(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	fmt.Println(vars["user"])
	fmt.Fprintf(w, "RemoveUser")
}

func GetUserChats(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	fmt.Println(vars["user"])
	fmt.Fprintf(w, "GetUserChats")
}

