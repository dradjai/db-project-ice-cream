import { MongoClient } from "mongodb";
import {MONGOURI} from "./credentials.js"
// create instance of Mongo
export const client = new MongoClient(MONGOURI); // use the URI path

// connect to db - or create if there is none
export const database = client.db("ice-cream-db");

// connect to collection - or create if none
export const productsCollection = database.collection("products");
