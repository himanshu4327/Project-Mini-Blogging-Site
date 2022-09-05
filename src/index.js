const express = require ('express')
const bodyPaser = require('body-parser');
const route = require('./routes/route.js');
const mongoose = require('mongoose');
const app = express();

app.use(bodyPaser.json());

mongoose.connect("mongodb+srv://abhishekprasad:abhiprasad@cluster0.ygncry8.mongodb.net/group18Database",{
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/',route);

app.listen(process.env.PORT || 3000 , function(){
    console.log('Express app running on port'+ (process.env.PORT || 3000))
})