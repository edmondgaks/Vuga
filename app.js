const express = require('express');
const { route } = require('./router');
const mongoose = require('mongoose')

const app = express();

const router = require('./router');


app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/public',express.static('public'))

// app.use(express.static('public/img'))

app.set('views','views');
app.set('view engine','ejs');

app.use('/', router);

// app.listen(3000);

module.exports = app;

// const port = 5000;
// const mongoose = require('mongoose');
// const mongo = require('mongodb');
// const express = require('express')
// const cors = require('cors');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const io = require('socket.io');
// io(server, {
//     cors: {
//         origin: "http://localhost:3000",
//         methods: ["post", "get"]
//     }
// })
// const url = "mongodb+srv://edmond:matwigari98$@clusterchat.wym5i.mongodb.net/chatApp?retryWrites=true&w=majority";
// mongoose.connect(url);
// app.post('/', async(req, res, next)=>{
//     console.log(req.body);
// })
// server.listen(port, ()=>{console.log(`http://localhost:${port}`)})