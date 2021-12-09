const express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({
    extended: false,
  });
const controller = require('../controllers/blogController');
const errorController = require('../controllers/indexController');

router.get('/post/:id([0-9]+)', urlencodedParser, controller.viewPostbyId_get);

router.get('/post/newpost', urlencodedParser, controller.blog_newPost_get);
router.post('/post/newpost', urlencodedParser, controller.blog_newPost_post);

router.get('/post/:id([0-9]+)/edit', urlencodedParser, controller.editPostbyId_get);
router.post('/post/:id([0-9]+)/edit', urlencodedParser, controller.editPostbyId_post);

router.post('/post/:id([0-9]+)/delete', urlencodedParser, controller.deletePostbyID_post);

router.get('/:page', urlencodedParser, errorController.pageNotFound);
router.get('/', urlencodedParser, controller.blogViewIndex_get);

module.exports = router;
