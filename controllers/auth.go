package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/feiron8/msf_chat/models"
	"log"
	"net/http"
)

func SignUp(w http.ResponseWriter, r *http.Request) {
	user := models.User{}

	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		log.Fatal(err)
	}

	models.AddUser(user)
}

func SignIn(w http.ResponseWriter, r *http.Request) {
	user := models.User{}

	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		log.Fatal(err)
	}

	isExist := models.CheckUser(user)

	w.Header().Set("Content-Type", "application/json")
	if isExist {
		fmt.Fprintf(w, "{\"isExist\": true}")
	} else {
		fmt.Fprintf(w, "{\"isExist\": false}")
	}
}