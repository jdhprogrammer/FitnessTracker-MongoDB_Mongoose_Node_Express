const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://jdhprogrammer:07ju15ju21@cluster0.hlj2v.mongodb.net/fitness-tracker_db?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true
});
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // performs actions on the collection object
    client.close();
});

const PORT = process.env.PORT || 3000;
const db = require("./models");
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/fitness-tracker_db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});