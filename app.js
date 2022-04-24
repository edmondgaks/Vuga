const express = require('express');
const { route } = require('./router');

const app = express();

const router = require('./router');

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/public',express.static('public'))

// app.use(express.static('public/img'))

app.set('views','views');
app.set('view engine','ejs');

app.use('/', router);

app.listen(3000);

