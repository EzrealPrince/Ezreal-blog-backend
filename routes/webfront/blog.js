var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express1' });
});

router.get('/detail', function(req, res, next) {
    res.render('index', { title: 'Express2' });
});

router.get('/categoryList', function(req, res, next) {
    res.render('index', { title: 'Express3' });
});

module.exports = router;
