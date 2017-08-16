var express = require('express');
var router = express.Router();

/* GET stocks_list page. */
router.get('/stocks_list', function(req, res) {
    var db = req.db;
    var collection = db.get('stocks');
    collection.find({},{},function(e,docs){
        res.render('stocks_list', {
            "stocks_list" : docs
        });
    });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

module.exports = router;
