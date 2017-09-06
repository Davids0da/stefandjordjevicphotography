var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));  
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); 
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); 
app.use('/fonts/', express.static(path.join(__dirname, '/node_modules/bootstrap/fonts')));



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

//views
app.get('/views/kolos.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/kolos.html'));
});
app.get('/views/bor.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/bor.html'));
});
app.get('/views/juveline.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/juveline.html'));
});
app.get('/views/paris.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/paris.html'));
});
app.get('/views/music.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/music.html'));
});
app.get('/views/commercial.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/commercial.html'));
});
app.get('/views/film.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/film.html'));
});

var port = process.env.PORT || 9000
app.listen(port, function () {
  console.log('Listening on port ' + port + '!')
});
