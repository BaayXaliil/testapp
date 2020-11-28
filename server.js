const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/testapp'))

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/testapp/index.html'));
});

app.listen(4200, ()=> {
    console.log("App running in port 4200");
});