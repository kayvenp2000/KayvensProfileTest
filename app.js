const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bodyparser = require('body-parser');
const url = "mongodb://Goku:dragonball@ds255258.mlab.com:55258/sealskayven"
mongoose.connect(url)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get("", (req,res)=>{
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})
app.get("/homeText", (req, res) => {
    db.collection("homeText").find().toArray(function(err, result){
        if(err)throw err
        res.json(result)
    })
})

app.get("/contactText", (req, res) => {
    db.collection("contactText").find().toArray(function(err, result){
        if(err)throw err
        res.json(result)
    })
})

app.listen(port, ()=> {
    console.log('server is working at '+port);
})

