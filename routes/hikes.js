var express = require('express');
var router = express.Router();
const hikesCtrl = require('../controllers/hikes');

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}
router.get('/', isLoggedIn, hikesCtrl.index);
router.get('/new', isLoggedIn, hikesCtrl.new);
router.post('/new', isLoggedIn, hikesCtrl.create);
router.get('/edit/:id', isLoggedIn, hikesCtrl.showEdit);
router.get('/:id', isLoggedIn, hikesCtrl.show);
router.put('/:id',isLoggedIn, hikesCtrl.edit);
router.post('/delete/:id',isLoggedIn, hikesCtrl.delete);

module.exports = router;
