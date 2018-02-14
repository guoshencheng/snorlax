var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.makeJson('welcome to century\'s world')
});

module.exports = router;
