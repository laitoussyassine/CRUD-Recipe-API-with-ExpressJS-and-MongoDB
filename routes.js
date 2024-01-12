const express = require("express");
const Recipe = require('./models/recipe');
const multer = require('multer');
const path = require("path")
const fs = require('fs');

const storage  = multer.diskStorage({
    destination: './uploads/recipe/',
    filename: (req,file,cb)=> {
        cb(null, file.fieldname + ' - ' + Date.now() + path.extname(file.originalname))
    }
})


const upload = multer({storage : storage}).single("image");
  
const app = express()

app.post('/add',  (req,res) => {
    upload(req, res, (err)=> {
        if(err) {
            console.log(err);
        } else {
            const newRecipe = new Recipe({
                title : req.body.title,
                categorie : req.body.categorie,
                rate : req.body.rate,
                ingredients : req.body.ingredients,
                image: {
                    data: fs.readFileSync(path.join(__dirname + '/uploads/recipe/' + req.file.filename)),
                    contentType: 'image/png'
                }
            })
            newRecipe.save().then((err)=> {
                res.status(201).json({message: 'Recipe created successfully'})
            }) .catch((error)=>{
                res.status(500).json({error: 'Failed to create Recipe'})
                console.log(error)
               })
        }
    })
});

app.get("/", (req, res) => {
    Recipe.find().then((recipes) => {
        return res.send(recipes)
    }).catch(error => {
        console.log(error);
    })
})
app.get('/:id',  (req, res) => {
    const {id} = req.params;
    Recipe.findById(id).then((recipe)  => {
        return res.type(recipe.image.contentType).send(recipe)
    }).catch((err) => {
        console.log(err);
    })
  });

  app.put('/update_recipe/:id', async(req, res) => {
    try {
        const {title, categorie, rate ,image, ingredients} = req.body;
        const {id} = req.params;
        const recipe = await Recipe.findByIdAndUpdate(id, {title, categorie, rate, image, ingredients})
        if(!recipe) {
            return res.status(404).json({messgae: `cannot find any recipe with ID ${id}`})
        }
        const updateRecipe = await Recipe.findById(id);
        res.status(200).json(updateRecipe)
    } catch {
        res.status(500).json({message: error.message})
    }

  })

  app.delete('/delete_recipe/:id', async(req, res) => {
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