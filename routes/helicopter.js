var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('helicopter', { title: 'Search Results Helicopter' });
});

module.exports = router;