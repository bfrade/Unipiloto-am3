var express = require('express');

var router = express.Router();


router.get('/', function(req, res){
	res.render('index', {'title' : 'Lab6'});
});

router.post('/contact', function(req, res){
	res.render('contact', {});
});








module.exports = router;