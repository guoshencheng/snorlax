var express = require('express');
var router = express.Router();
var controller = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.makeJson('welcome to century\'s world')
});

module.exports = router;
