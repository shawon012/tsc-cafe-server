const express = require('express');
const app = express();
const cors = require('cors');
const port =process.env.PORT || 5000;

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipe.json');

app.use(cors())

app.get('/', (req, res)=>{
    res.send('The server is running')
});
app.get('/chefs', (req, res)=>{
    res.send(chefs);
});
app.get('/recipes', (req, res)=>{
    res.send(recipes);
});
app.get('/recipes/:id', (req, res)=>{
    const id = req.params.id;
    const selectedRecipes = recipes.find(r => r.id == id);
    res.send(selectedRecipes);
});
app.get('/chefRecipe/:id', (req, res)=>{
    const id = req.params.id;
    const chefRecipe = recipes.filter(r => r.chefrecipe == id);
    res.send(chefRecipe);
});



app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`)
})







































// echo "# b7a10-chef-recipe-hunter-server-side-shawon012" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-shawon012.git
// git push -u origin main