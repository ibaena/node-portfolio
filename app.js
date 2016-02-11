var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/public', express.static(__dirname + "/public"));

function myLoggingMiddleware(req, res, next){
  var url = req.url;
  var method = req.method;

  console.log('%s request at %s', method, url);
  next();
}

// This is the bodyParser middleware
 app.use(bodyParser.urlencoded({ extended: false }));

 app.use(myLoggingMiddleware);

app.get('/', function(req, res){
  res.render('index', {
       title : 'Ivan Baena',
       layout : 'main'
});
});


app.get('/click', function(req, res){
  res.render('rps', {
       title : 'Rock, Paper, Scissors',
       layout : 'rps'
});
});

app.get('/contact', function(req, res){
  res.render('contact', {
       title : 'Contact',
       layout : 'main'
});
});

app.get('/about', function(req, res){
  res.render('about', {
       title : 'About',
       layout : 'main'
});
});

app.get('/blog', function(req, res){
  res.render('blogger', {
       title : 'ThisThat',
       layout : 'blog'
});
});

app.post('/contact', function(req, res){
  var form = 'Name: '+req.body.username+'\nEmail: '+ req.body.email+'\nMessage: '+ req.body.summary+'\n\n';
  fs.appendFile('log.txt',form , function (err) {

});
});


app.use('/public', express.static('public'));

var port = Number(process.env.PORT || 8000);
app.listen(port);
