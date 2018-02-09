var host = "127.0.0.1";
var port = 3000;
var express = require("express");
var router = express.Router();

var app = express();
app.use('/', express.static(__dirname + '/'));
app.listen(port, host);
router.get('/', function (req, res, next) {
	res.render('index.html')
}); 

console.log('Running server at http://localhost:' + port + '/');