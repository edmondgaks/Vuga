const User = require('../models/User');
const { post } = require('../router');
const res = require('express/lib/response');
const { redirect } = require('express/lib/response');


exports.login = (req, res) => {
    res.render('login');
}
exports.logout = () => {

}
exports.checkUser = async (req,res) => {
    console.log("Checking the user");

    let email = req.body.email;
    let password = req.body.password

    try {
        console.log(req.body);
        let admittedUser = await User.findOne({email: email, password: password});
        console.log("Doing the _doc thing");
        console.log(admittedUser);
        res.json(admittedUser)
        
    } catch(err) {
        console.log(err);
        res.json({message: err})
    }
}
exports.saveUser = async (req,res) => {
    console.log("Trying to save the user")
    console.log(req.body)
    let user = User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const savedUser = await user.save();
        console.log(savedUser)
        res.json(savedUser);
        // res.redirect('/home')
    } catch(err) {
        console.log(err)
        res.json({ message: err});
    }
    // if(user.errors.length) {
    //     res.send(user.errors)
    // }
    // else {
    //     res.send("Congrats, there are no errors.")
    // }
}

exports.register = (req, res)=>{
    res.render('signup')
}


exports.home = (req,res) => {
    res.render('signup')
}

exports.index = (req, res)=>{
    res.render('index')
}
