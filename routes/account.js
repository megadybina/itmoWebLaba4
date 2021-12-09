const express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({
    extended: false,
  });

const controller = require('../controllers/accountController');

router.get('/signin', urlencodedParser, controller.signin_get);
router.post('/signin', urlencodedParser, controller.signin_post);

router.get('/login', urlencodedParser, controller.login_get);
router.post('/login', urlencodedParser, controller.login_post);

router.post('/logout', urlencodedParser, controller.logout_post);

router.get('/edit', urlencodedParser, controller.edit_get);
router.post('/edit', urlencodedParser, controller.edit_post);

router.get('/:id([0-9]+)', controller.viewUserbyId_get);
router.get('/', controller.viewUserList_get);

module.exports = router;


