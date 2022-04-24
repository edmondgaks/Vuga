exports.login = () => {

}
exports.logout = () => {

}
exports.register = (req,res) => {
    console.log(req.body);
    res.send("Thanks for signing in")
}
exports.home = (req,res) => {
    res.render('signup')
}

exports.index = (req, res)=>{
    res.render('index')
}