var express     	=   require('express');
var app         	=   express();
var bodyParser  	=   require('body-parser');
var bodyCleaner 	=   require('express-body-cleaner');
var mongoose    	=   require('mongoose');
var config      	=   require('./config');
var pothole        	=   require('./api/models/pothole-model');
var port        	=   process.env.PORT || 8080;

mongoose.connect(config.database, {useNewUrlParser:true});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyCleaner);

app.get('/',function(req,res) {
    res.status(401).send({
        message: 'Welcome to Plotholes!'
    });
});

app.get('/all/potholes',function(req,res) {
    pothole.find({},function(err,potholes){
        if (err) {
            throw err;
        }
        else {
            res.send(potholes);
        }
    });
});

app.post('/pothole/add', function(req,res){
    if (req.body.latitude == "" || req.body.latitude == null) {
        return res.status(400).send({
            message: 'No latitude provided'
        });
    }
    else if (req.body.longitude == "" || req.body.longitude == null) {
        return res.status(400).send({
            message: 'No longitude provided'
        });
    }
    else {
        var pot = new pothole({ 
            latitude: req.body.latitude, 
            longitude: req.body.longitude,
            first_recorded: new Date()
        });
        pot.save(function(err) {
            if (err) {
                throw err;
            }
            else {
                res.json({
                    success: true,
                    message: 'Pothole added successfully!'
                });
            }
        });
    }
});

app.listen(port);
console.log('Magic happens at http://localhost:' + port);