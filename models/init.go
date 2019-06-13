package models

import (
	"context"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
)

var Client *mongo.Client
var Database = "local"

func InitDB(dataSourceName string) {
	var err error

	Client, err = mongo.NewClient(options.Client().ApplyURI(dataSourceName))
	if err != nil {
		log.Fatal(err)
	}

	err = Client.Connect(context.TODO())
	if err != nil {
		log.Fatal(err)
	}

	err = Client.Ping(context.TODO(), nil)
	if err != nil {
		log.Fatal(err)
	}
}
