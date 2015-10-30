var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');
var Ballots = mongoose.model('Ballots');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', function(req, res, next) {
  Ballots.find({}, null, function(err, data){
  if(err){ return next(err); }
  res.json(data);
  });
});

module.exports = router;

