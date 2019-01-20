var express     	=   require('express');
var app         	=   express();
var bodyParser  	=   require('body-parser');
var bodyCleaner 	=   require('express-body-cleaner');
var mongoose    	=   require('mongoose');
var config      	=   require('./config');
var user        	=   require('./api/models/pothole-model');
var port        	=   process.env.PORT || 8080;

app.get('/',function(req,res) {
    res.status(401).send({
        message: 'Welcome to Plotholes!'
    });
});

app.listen(port);
console.log('Magic happens at http://localhost:' + port);