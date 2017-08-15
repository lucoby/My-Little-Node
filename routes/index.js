var express = require('express');
var router = express.Router();

/* GET Userlist page. */
router.get('/data', function(req, res) {
    var db = req.db;
    var collection = db.get('my_data');
    collection.find({},{},function(e,docs){
        res.render('my_data', {
            "my_data" : docs
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
