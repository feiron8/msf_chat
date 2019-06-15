package models

import (
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo/options"
	"golang.org/x/crypto/bcrypt"
	"log"
)

type User struct {
	Id primitive.ObjectID `bson:"_id"`
	Email string `bson:"email"`
	Pass string `bson:"pass"`
	Name string `bson:"name"`
	Lastname string `bson:"lastname"`
}

var UsersCollection = "users"

func CheckUser(user User) (bool, string) {
	var result User

	collection := Client.Database(Database).Collection(UsersCollection)
	filter := bson.D{{"email", user.Email}}
	err := collection.FindOne(context.TODO(), filter).Decode(&result)

	err = bcrypt.CompareHashAndPassword([]byte(result.Pass), []byte(user.Pass))
	if err != nil {
		return false, ""
	}
	return true, result.Id.Hex();
}

func AddUser(user User) {
	bytes, _ := bcrypt.GenerateFromPassword([]byte(user.Pass), 14)
	user.Pass = string(bytes);
	user.Id = primitive.NewObjectID()

	collection := Client.Database(Database).Collection(UsersCollection)

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

func GetUserProjects(userId string) []*Project {
	collection := Client.Database(Database).Collection(ProjectCollection)
	var results []*Project

	filter := bson.D{{"users",bson.D{{"$all", bson.A{userId}}}}}
	cur, err := collection.Find(context.TODO(), filter, options.Find())
	if err != nil {
		log.Fatal(err)
	}


	for cur.Next(context.TODO()) {
		var elem Project

		err := cur.Decode(&elem)
		if err != nil {
			log.Fatal(err)
		}

		fmt.Print(elem)

		results = append(results, &elem)
	}

	cur.Close(context.TODO())

	return results
}