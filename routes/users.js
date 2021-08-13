var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');


router.get('/', usersCtrl.index);
router.post("/:id/favourites", usersCtrl.addFavourite);
router.get("/favourites", usersCtrl.showFavourites);
router.post("/:id/favourites/delete", usersCtrl.delFavourite);

// function isLoggedIn(req, res, next) {
//     if ( req.isAuthenticated() ) return next();
//     res.redirect('/auth/google');
//   }

module.exports = router;