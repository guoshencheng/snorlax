var express = require('express');
var router = express.Router();
var controller = require('../controllers/index');
var middwares = require('../middlewares/index');
var v1 = require('./v1');

router.get('/api/adminUser/:id', middwares.auth.checkAdminAccesss, controller.adminUser.getAdminUserById);
router.get('/api/adminUser/username/:username', middwares.auth.checkAdminAccesss, controller.adminUser.getAdminUserByUserName);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.makeJson('welcome to century\'s world')
});

router.use('/v1', middwares.auth.checkAccess, v1);


module.exports = router;
