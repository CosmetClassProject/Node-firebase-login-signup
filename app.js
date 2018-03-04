var path = require('path');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    return res.sendFile(path.join(__dirname, 'login.html'));
});
app.use(express.static(__dirname+'/public'));
app.listen(1377);