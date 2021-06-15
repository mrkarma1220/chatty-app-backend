var express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors')
const mongoose = require('mongoose')
const conversationRoute = require('./routes/conversation')
const messageRoute = require('./routes/message')
const newUserRoute = require('./routes/user')

var app = express();
var port = 2000;

// To get post body request
app.use(bodyParser.json())

// allowing all cors
app.use(cors());

// routes
app.use('/conversation', conversationRoute);
app.use('/message', messageRoute);
app.use('/newUser', newUserRoute);

const url = 'mongodb+srv://user:userpassword@cluster0.nkab2.mongodb.net/test'

// connecting mongodb using mongoose
mongoose.connect(url, {useNewUrlParser: true})

mongoose.connection
    .on('open', () => console.log('connected'))
    .on('error', (err) => console.log('error',err))

app.listen(2000, () => {
    console.log('listening')
})