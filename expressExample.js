let express = require('express');

let app = express();

let port = process.env.PORT || 3000;

app.listen(port,'127.0.0.1');

var count = 0;
app.use('/',function(req,res){
    console.log(count + " url requested: " + req.url);
    count = count + 1;
});
app.use('/file',express.static(__dirname + '/public'));
app.get('/home',function(req,res){
    res.send("<html><head><body><h1>Hello World by EXPRESS</h1></body></head></html>")
});