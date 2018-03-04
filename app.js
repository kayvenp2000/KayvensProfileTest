const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bodyparser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get("", (req,res)=>{
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})
app.listen(port, ()=> {
    console.log('server is working at '+port);
})

