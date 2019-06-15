package controllers

import (
	"fmt"
	"net/http"
	"strings"
	"github.com/feiron8/msf_chat/models"
)

var freeURL = map[string]bool {
	"/api/signup": true,
	"/api/signin": true,
}

func CheckToken(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		token := r.Header.Get("Authorization")
		tokenArr := strings.Fields(token)

		fmt.Print(r.RequestURI)
		fmt.Print(tokenArr)

		if freeURL[r.RequestURI] {
			next.ServeHTTP(w, r)
			return
		}

		if len(tokenArr) < 2 {
			http.Error(w, "Token Not Found", http.StatusForbidden)
			return
		}

		if isExist, _ := models.CheckToken(tokenArr[1]); isExist {
			next.ServeHTTP(w, r)
		} else {
			http.Error(w, "Token Not Found", http.StatusForbidden)
		}
	})
}