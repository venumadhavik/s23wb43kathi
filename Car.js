var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Car', { title: 'Search Results Car' });
});

module.exports = router;