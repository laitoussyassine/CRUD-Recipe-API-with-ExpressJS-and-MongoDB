const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        categorie: {
            type: String,
            required: false
        },
        rate: {
            type: Number,
            min: 1,
            max: 5
        },
        image: {
            type: String,
            required: false,
        },
        ingredients: [{
            type: String,
            required: false
        }]
    },
    {
        timestamps: true
    }

);

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;