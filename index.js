var express = require('express');
var app = express();

app.get('/', function(req, resp){
  resp.send("Hello word fron server")
});

app.listen(3000);
console.log("server running")