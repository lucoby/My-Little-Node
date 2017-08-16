var express = require('express');
var router = express.Router();

/* GET Userlist page. */
router.get('/stocks', function(req, res) {
    var db = req.db;
    var collection = db.get('stocks');
    collection.find({},{},function(e,docs){
        res.render('stocks', {
            "stocks" : docs
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
