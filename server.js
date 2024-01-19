require('dotenv').config()
const express = require("express");
const Recipe = require('./models/recipe');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require("./routes/recipeRoutes.js");
const authRoutes = require("./routes/userRoute.js");
const cookieParser = require('cookie-parser');
const requireAuth = require('./controllers/authController.js')
const yaml = require('yamljs');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = yaml.load('./swagger.yaml');


mongoose.connect(process.env.CONNECTION_STRING).then(() => {
    console.log('connected');
}).catch((err) => {
    console.log(err);
});

// middleware
app.use(express.json());
app.use(cookieParser());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// routes
app.use('/recipes', userRoutes);
app.use(authRoutes);


// cookies
app.get('/set-cookies', (req,res) => {
    res.cookie('newUser', false);
    res.cookie('isEmployee', true, {maxAge: 1000 * 60 * 60 * 24, httpOnly : true});

    res.send('you get the cookie!');

})

app.get('/read-cookies', (req, res) => {
    const cookies = req.cookies;
    console.log(cookies.newUser);
    res.json(cookies)
})
const port = process.env.PORT || 3000;
app.listen(port, console.log(`listening on port ${port}`));