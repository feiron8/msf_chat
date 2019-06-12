package controllers

import (
	"fmt"
	"net/http"
	"github.com/gorilla/mux"
)

func SignUp(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "AddChat")
}

func SignIn(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	fmt.Println(vars["chat"])
	fmt.Fprintf(w, "GetChat")
}