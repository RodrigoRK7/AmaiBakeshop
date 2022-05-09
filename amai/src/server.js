const express = require('express');
const mongoose = require('mongoose');
const Router  = require('./routes/routes');

const app = express();

app.use(express.json());

const username = "Amai";
const password = "CkIjnxgUhKB9WL7q";
const cluster = "cluster0.n61wz";
const dbname = "myFirstDatabase";

mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`/*,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }*/
)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => {
    console.log("Server is running a port 3000");
});

