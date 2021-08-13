var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');


router.get('/', usersCtrl.index);
router.post("/:id/favourites", usersCtrl.addFavourite);
router.get("/favourites", usersCtrl.showFavourites);
router.post("/:id/favourites/delete", usersCtrl.delFavourite);



module.exports = router;