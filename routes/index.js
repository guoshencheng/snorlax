var express = require('express');
var router = express.Router();
var controller = require('../controllers/index');
var middwares = require('../middlewares/index');
var v1 = require('./v1');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.makeJson('welcome to century\'s world')
});

router.use('/v1', middwares.auth.checkAccess, v1);

module.exports = router;
