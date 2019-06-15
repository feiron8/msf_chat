package controllers

import (
	"fmt"
	"net/http"
	"github.com/gorilla/mux"
)

func AddChat(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "AddChat")
}

func GetChat(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	fmt.Println(vars["chat"])
	fmt.Fprintf(w, "GetChat")
}

func GetChatUsers(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	fmt.Println(vars["chat"])
	fmt.Fprintf(w, "GetChatUsers")
}

func AddUserToChat(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	fmt.Println(vars["chat"])
	fmt.Fprintf(w, "AddUserToChat")
}

func RemoveUserFromChat(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	fmt.Println(vars["chat"], vars["user"])
	fmt.Fprintf(w, "RemoveUserFromChat")
}

//func AddMessage(w http.ResponseWriter, r *http.Request) {
//	vars := mux.Vars(r)
//	fmt.Println(vars["chat"])
//	fmt.Fprintf(w, "AddMessage")
//}

func UpdateMessage(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	fmt.Println(vars["chat"], vars["message"])
	fmt.Fprintf(w, "UpdateMessage")
}

func RemoveMessage(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	fmt.Println(vars["chat"], vars["message"])
	fmt.Fprintf(w, "RemoveMessage")
}
