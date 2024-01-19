const express = require("express");
const Recipe = require('../models/recipe');
const app = express();
const upload = require('../malter/malter.js');
const requireAuth = require("../midllewares/authMidlleware");

// Express middleware for handling image uploads
app.post('/add', requireAuth,upload.single('image'), async (req, res) => {
  try {
    const { title, categorie, ingredients, rate } = req.body;

    // Create a new Recipe instance with the image path
    const recipe = new Recipe({
      title,
      categorie,
      image: req.file.path, // Set the path to the uploaded file
      ingredients,
      rate,
    });

    // Save the recipe to MongoDB
    await recipe.save();

    res.send('Recipe added successfully!');
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
});

app.get("/",requireAuth,  async (req, res) => {
  try {
      const recipes = await Recipe.find({});
      console.log(recipes);
       res.json(recipes);
  } catch (error) {
      console.log(error);
  }
});
app.get('/:id', async (req, res) => {
  try {
      const {id} = req.params;
      const recipe = await Recipe.findById(id).exec();
      res.send(recipe);
  } catch (error){
      console.log(error);
  }
});

app.patch('/update_recipe/:id',requireAuth,upload.single('image') ,async(req, res) => {
    try {
        const { title, categorie, ingredients, rate } = req.body;
        const {id} = req.params;
        // console.log("id",id);
        // console.log("body",req.body)
        const recipe =  await Recipe.findByIdAndUpdate(id,{
            title,
            categorie,
            rate,
            ingredients,
        }, {new: true}).exec();
        // Check if a new image is provided
        if (req.file) {
          recipe.image = `./uploads/recipe/${req.file.originalname}`;
        }
        // console.log("recipe",recipe);
        if(!recipe) {
            return res.status(404).json({messgae: `cannot find any recipe with ID ${id}`})
        }
        res.status(200).json(recipe)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  })

app.delete('/delete_recipe/:id', requireAuth,async(req, res) => {
  try {
      const {id} = req.params;
      const recipe = await Recipe.findByIdAndDelete(id);
      if (!recipe) {
          return res.status(404).json({message: `cannot find any recipe with ID ${id}`})
      }
      const allRecipe = await Recipe.find();
      res.status(200).json(allRecipe);
  } catch {
      res.status(500).json({message: error.message})
  }
})

module.exports = app;