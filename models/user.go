package models

import (
	"fmt"
)

type User struct {
	Id string
	Username string
	Password string
	Name string
	Surname string
	Status string
}

func GetUsers() []User {
	rows, err := db.Query("select * from users")
	if err != nil {
		panic(err)
	}
	defer rows.Close()

	users := []User{}
	for rows.Next() {
		user := User{}
		err := rows.Scan(&user.Id, &user.Username, &user.Password, &user.Name, &user.Surname, &user.Status)
		if err != nil {
			fmt.Println(err)
			continue
		}
		users = append(users, user)
	}

	return users
}
