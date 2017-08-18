var express = require('express');
var router = express.Router();

/*
 * GET stocklist.
 */
router.get('/stockdata', function(req, res) {
    var db = req.db;
    var collection = db.get('stocks');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

module.exports = router;
