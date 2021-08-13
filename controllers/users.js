// const { deleteOne } = require('../models/user');
const User = require('../models/user');
const Hike = require('../models/hike');

module.exports = {
  index,
  addFavourite,
  delFavourite,
  showFavourites
};

function index(req, res, next) {
  res.render("users/index", {
    user: req.user,
  });
}

async function showFavourites(req, res, next){
  
  try {
    let hikes = await Hike.find({_id: {$in: req.user.favourites}});
    res.render("users/index", {
      user: req.user,
      userFavourites: hikes
    });
  } catch(err) {
      console.log(err.message);
      res.redirect("/");
}  
}


async function addFavourite(req, res, next) {
    try {
        let user = await User.updateOne({googleId:req.user.googleId},
          {$push: {favourites: req.params.id}},
        );
        res.redirect("/");
    } catch(err) {
        console.log(err.message);
        res.redirect("/");
    }  
  }

async function delFavourite(req, res, next) {
  try {
    let user = await User.updateOne({googleId:req.user.googleId},
      {$pull: {favourites: req.params.id}},
      );
    res.redirect("/");
} catch(err) {
    console.log(err.message);
    res.redirect("/");
}  
}




      