var express = require('express');
var Router = express.Router;
var router = new Router();
var controllers = require('../controllers/index');

router.get('/posts/categories', controllers.v1.postCategory.all);
router.post('/posts/categories', controllers.v1.postCategory.create);
router.get('/posts/categories/:id', controllers.v1.postCategory.findById);
router.put('/posts/categories/:id', controllers.v1.postCategory.update);

router.get('/posts/categories/:id', controllers.v1.post.findByCategory);
router.post('/posts/:id/categories/:categoryId', controllers.v1.post.linkPostAndCategory);
router.put('/posts/:id', controllers.v1.post.update);
router.put('/posts/:id/status/:status', controllers.v1.post.changeStatus);
router.get('/posts', controllers.v1.post.all);
router.get('/posts/online', controllers.v1.post.allOnline);
router.get('/posts/:id', controllers.v1.post.findById);
router.post('/posts/empty', controllers.v1.post.createEmpty);

router.get('/tips', controllers.v1.tip.findAll);
router.get('/tips/search', controllers.v1.tip.search);
router.post('/tips', controllers.v1.tip.create);
router.get('/tips/:id', controllers.v1.tip.findById);
router.delete('/tips/:id', controllers.v1.tip.deleteById);
router.put('/tips/:id', controllers.v1.tip.update);

module.exports = router;
