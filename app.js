const express = require('express');

const app = express();

app.use('/public',express.static('public'))

// app.use(express.static('public/img'))

app.set('views','views');
app.set('view engine','ejs');

app.get('/',  (req,res) => {
    res.render('signup')
})

app.listen(3000, ()=>{console.log("Running")});