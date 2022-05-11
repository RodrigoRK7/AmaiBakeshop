const express = require('express');
const mongoose = require('mongoose');
const Router  = require('./routes/routes');

// User controller
const cont = require('./controllers/user');

// Env variables
const env = require('../../.env');

const app = express();

app.use(express.json());

mongoose.connect(
    `mongodb+srv://${env.username}:${env.password}@${env.cluster}.mongodb.net/${env.dbname}?retryWrites=true&w=majority`/*,
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
    console.log("Server is running at port 3000");
    cont.change_pass("test1@hotmail.com", "test_nuevo2", "test_nuevo23");

});