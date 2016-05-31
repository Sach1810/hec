var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/computer', function(req, res, next){
  res.render('computer');
});

module.exports = router;
