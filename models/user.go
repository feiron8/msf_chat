package models

import (
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"golang.org/x/crypto/bcrypt"
)

type User struct {
	Id string
	Email string
	Pass string
	Name string
	Lastname string
}

var usersCollection = "users"

func CheckUser(user User) bool {
	var result User

	collection := Client.Database(Database).Collection(usersCollection)
	filter := bson.D{{"email", user.Email}}
	err := collection.FindOne(context.TODO(), filter).Decode(&result)
	fmt.Print(user)
	fmt.Print(result)

	err = bcrypt.CompareHashAndPassword([]byte(result.Pass), []byte(user.Pass))
	if err != nil {
		return false
	}

	if user.Email == result.Email {
		return true
	}
	return false
}

func AddUser(user User) {
	bytes, _ := bcrypt.GenerateFromPassword([]byte(user.Pass), 14)
	user.Pass = string(bytes);

	collection := Client.Database(Database).Collection(usersCollection)

	insertResult, err := collection.InsertOne(context.TODO(), user)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Inserted a single user: ", insertResult.InsertedID)
}

func GetUsers() []*User {
	collection := Client.Database("msfChat").Collection("users")
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
