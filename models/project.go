package models

import (
	"fmt"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"log"
	"context"
)

type Project struct {
	Id primitive.ObjectID `bson:"_id"`
	Title string `bson:"title"`
	Description string `bson:"description"`
	Milestone string `bson:"milestone"`
	Iteration int `bson:"iteration"`
	Users []string `bson:"users"`
}

var ProjectCollection = "projects"

func AddProject(project Project, userId string) {
	project.Id = primitive.NewObjectID()
	project.Users = make([]string, 1)
	project.Users[0] = userId
	project.Milestone = "Envisioning"
	project.Iteration = 0

	collection := Client.Database(Database).Collection(ProjectCollection)
	insertResult, err := collection.InsertOne(context.TODO(), project)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Inserted a single project: ", insertResult.InsertedID)
}