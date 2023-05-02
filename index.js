const express = require('express');
const app = express();
const port =process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('The server is running')
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