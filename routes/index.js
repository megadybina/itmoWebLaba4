const express = require('express');
var router = express.Router();
const controller = require('../controllers/indexController');

router.get('/', function(req,res){
    res.redirect('/blog');
});

router.get('/error', controller.pageNotFound);
router.get('/forbidden', controller.forbiddenAction);

module.exports = router;