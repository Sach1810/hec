var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/computer', function(req, res, next){
  res.render('computer');
});

router.get('/phone', function(req, res, next){
  res.render('phone');
});

router.get('/test', function(req, res, next){
  res.render('test');
});

router.get('/games', function(req, res, next){
  res.render('games');
});

module.exports = router;
