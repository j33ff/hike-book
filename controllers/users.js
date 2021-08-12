const User = require('../models/user');

module.exports = {
  index,
  addFavourite,
  delFavourite
};

function index(req, res, next) {
  res.render("users/index", {user: req.user});
}



async function addFavourite(req, res, next) {
    try {
        let user = User.find({googleId:req.user.googleId});
        user.favourites.push(req.params.id);
        await user.save();
        res.redirect("/");
    } catch(err) {
        console.log(err.message);
        res.redirect("/");
    }
    

  }

function delFavourite(req, res, next) {
  User.findOne({'favourites._id': req.params.id}, function(err, user) {
    user.favourites.id(req.params.id).remove();
    user.save(function(err) {
      res.redirect('/users');
    });
  });
}




      