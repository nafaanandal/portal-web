var express = require('express');
var router = express.Router();
var connection = require('../conn');

/* GET home page. */
router.get('/', function (req, res, next) {
  connection.query('SELECT * FROM person', function (error, rows, fields) {
    if (error) {
      console.log(error)
    } else {
      response.ok(rows, res)
    }
  });
  // res.render('index', { title: 'Express' });
});

module.exports = router;
