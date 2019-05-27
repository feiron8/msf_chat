package models

import (
	"context"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
)

type User struct {
	Id string
	Username string
	Password string
	Name string
	Surname string
	Status string
}

func GetUsers() []*User {
	collection := client.Database("msfChat").Collection("users")
	var results []*User

	cur, err := collection.Find(context.TODO(), nil, options.Find())
	if err != nil {
		log.Fatal(err)
	}

	for cur.Next(context.TODO()) {
		var elem User

		err := cur.Decode(&elem)
		if err != nil {
			log.Fatal(err)
		}

		results = append(results, &elem)
	}

	if err := cur.Err(); err != nil {
		log.Fatal(err)
	}

	cur.Close(context.TODO())

	return results
}
