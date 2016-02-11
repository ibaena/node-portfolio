var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');
var path = require('path');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/public', express.static(__dirname + "/public"));

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


app.use('/public', express.static('public'));

var port = Number(process.env.PORT || 3000);
app.listen(port);
