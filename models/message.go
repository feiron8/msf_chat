package models

import (
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"time"
)

type Message struct {
	Id primitive.ObjectID `bson:"_id"`
	Text string `bson:"text"`
	Time string `bson:"time"`
	AuthorId string `bson:"authorId"`
	ProjectId string `bson:"projectId"`
}

var MessagesCollection = "messages"

func AddMessage(message Message) {
	message.Id = primitive.NewObjectID()
	message.Time = time.Now().Format(time.RFC850)

	collection := Client.Database(Database).Collection(MessagesCollection)
	insertResult, err := collection.InsertOne(context.TODO(), message)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Inserted a single message: ", insertResult.InsertedID)
}

func GetMessages(projectId string) []*Message {
	collection := Client.Database(Database).Collection(MessagesCollection)
	var results []*Message

	filter := bson.D{{"projectId", projectId}}
	cur, err := collection.Find(context.TODO(), filter, options.Find())
	if err != nil {
		log.Fatal(err)
	}

	for cur.Next(context.TODO()) {
		var elem Message

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