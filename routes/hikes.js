var express = require('express');
var router = express.Router();
const hikesCtrl = require('../controllers/hikes');


router.get('/', hikesCtrl.index);
router.get('/new', hikesCtrl.new);
router.post('/', hikesCtrl.create);
router.get('/edit/:id', hikesCtrl.showEdit);
router.get('/:id', hikesCtrl.show);
router.put('/:id', hikesCtrl.edit);

module.exports = router;
