const User = require('../models/user');


    async function register(req, res){
        
        try {
            let username = req.body.username;
            let password = req.body.password;
            let email = req.body.email;

            let newuser = new User();
            newuser.username = username;
            newuser.password = password;
            newuser.email = email;
            await newuser.save();
            res.redirect('users/login');
        }
        catch (err) {
            res.send(err.message);
        }
    }

    async function login(req, res){
        let username = req.body.username;
        let password = req.body.password;
        try { 
        let loginvalue = await User.findOne({username: username, password: password})
        if(loginValue){
            res.redirect("/");
        } else {
            res.redirect("/users/login")
        }
        
        }
        catch(err) {
            res.send(err.message);
        }
    }

    async function index(req, res){
        try {
            let users = await User.find({});
            console.log(users);
            res.render('users/index', {
                user
            });
        } catch (err){
            console.log(err.message);
        }
    }

module.exports = {
    register,
    login,
    index
}