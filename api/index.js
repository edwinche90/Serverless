const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const meals = require('./routes/meals')
const orders = require('./routes/orders')
const auth = require('./routes/auth')

const app = express()
require('dotenv').config()
app.use(bodyParser.json())
app.use(cors())


//const MONGODB_URI = `mongodb+srv://almuerzimaster:41065029@almuerzi-db.wcjuj.mongodb.net/almuerzi?retryWrites=true&w=majority`

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true,useUnifiedTopology: true,
})
.then((db) => console.log("Mongodb esta conectado en:", db.connection.host))
.catch((err) =>console.error(err));


app.use('/api/meals', meals)
app.use('/api/orders', orders)

app.use('/api/auth', auth)

module.exports = app

// app.get('*', (req, res) =>  {
//     res.send('Hola Mundo')
// });