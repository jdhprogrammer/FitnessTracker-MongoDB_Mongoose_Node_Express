const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const MongoClient = require("mongodb").MongoClient;
const uri =
    "mongodb+srv://jdhprogrammer:07ju15ju21@cluster0.hlj2v.mongodb.net/fitness-tracker_db?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((err) => {
    const collection = client.db("test").collection("devices");
    // performs actions on the collection object
    client.close();
});

const PORT = process.env.PORT || 9000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const apiRoute = require("./routes/api-routes");
const htmlRoute = require("./routes/html-routes");

app.use("/api/workouts", apiRoute);
app.use("/", htmlRoute);

mongoose.connect(
        process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker_db", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }).then(() => {
        //Setup Server after connecting to db
        app.listen(PORT, () => {
            console.log(`listening on PORT ${PORT}, http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error.message);
    });