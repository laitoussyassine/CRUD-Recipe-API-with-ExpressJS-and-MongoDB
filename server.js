require('dotenv').config()
const express = require("express");
const Recipe = require('./models/recipe');
const mongoose = require('mongoose');
const app = express();
const routes = require("./routes.js");


mongoose.connect(process.env.CONNECTION_STRING).then(() => {
    console.log('connected');
}).catch((err) => {
    console.log(err);
});

app.use(express.json());


app.use('/recipes', routes);


const port = process.env.PORT || 3000;
app.listen(port, console.log(`listening on port ${port}`));