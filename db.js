const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

// console.log(process.env.CONNECTIONSTRING)
// console.log("|",process.env.CONNECTIONSTRING.split(" ").join(""), "|")

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true}, (err,client) => {
    console.log(process.env.CONNECTIONSTRING)
    if(err) return console.log(err)
    console.log("Connected")
    module.exports = client
    const app = require('./app')
    const port = process.env.PORT || 5000;
    app.listen(port, ()=>{console.log(`http://localhost:${port}`)})
});


