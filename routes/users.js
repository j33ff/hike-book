var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');


router.get('/', usersCtrl.index);
router.post('/login', usersCtrl.login);
router.post('/register', usersCtrl.register);

module.exports = router;