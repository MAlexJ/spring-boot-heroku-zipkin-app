var express = require('express'),
    path = require('path'),
    app = express();
    
var port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.redirect('index.html');
});

app.listen(port);
console.log('Server run on port:' + port );