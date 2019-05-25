package models

<<<<<<< HEAD
type User struct {
	Id string
	Username string
=======
import (
	"fmt"
)

type User struct {
	Id int
	Username string
	Password string
>>>>>>> 4ab08c838b27e9322fd2dbc863ff564294d08f6b
	Name string
	Surname string
	Status string
}
<<<<<<< HEAD
=======

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
>>>>>>> 4ab08c838b27e9322fd2dbc863ff564294d08f6b
