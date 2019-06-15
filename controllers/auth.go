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

	isExist, userId := models.CheckUser(user)

	w.Header().Set("Content-Type", "application/json")
	if isExist {
		token := models.SetToken(userId)
		fmt.Fprintf(w, "{\"isExist\": true, \"token\":\"" + token +  "\", \"userId\": \"" + userId +"\"}")
	} else {
		fmt.Fprintf(w, "{\"isExist\": false}")
	}
}

func Test(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "hello")
}