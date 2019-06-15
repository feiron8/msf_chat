package models

import (
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"log"
	guuid "github.com/google/uuid"
)

type Token struct {
	Id primitive.ObjectID `bson:"_id"`
	Token string `bson:"token"`
	UserId string `bson:"userId"`
}

var TokensCollection = "tokens"

func CheckToken(token string) (bool, string) {
	var result Token

	collection := Client.Database(Database).Collection(TokensCollection)
	filter := bson.D{{"token", token}}
	err := collection.FindOne(context.TODO(), filter).Decode(&result)

	if err != nil {
		return false, ""
	}
	return true, result.UserId;
}

func RemoveToken(token string) {
	collection := Client.Database(Database).Collection(TokensCollection)
	filter := bson.D{{"token", token}}
	_, err := collection.DeleteOne(context.TODO(), filter)

	if err != nil {
		log.Fatal(err)
	}
}

func SetToken(userId string) string {
	token := guuid.New().String()
	tokenStr := Token{}
	tokenStr.Token = token
	tokenStr.Id = primitive.NewObjectID()
	tokenStr.UserId = userId

	collection := Client.Database(Database).Collection(TokensCollection)
	insertResult, err := collection.InsertOne(context.TODO(), tokenStr)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Inserted a single document: ", insertResult.InsertedID)
	return token
}