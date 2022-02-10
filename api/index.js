const mongoose = require('mongoose')
const express = require('express')
const app = express();
const MONGODB_URI = `mongodb+srv://almuerzimaster:41065029@almuerzi-db.wcjuj.mongodb.net/Almuerzi-db?retryWrites=true&w=majority`



mongoose.connect(MONGODB_URI, {useNewUrlParser: true,useUnifiedTopology: true,
})
.then((db) => console.log("Mongodb esta conectado en:", db.connection.host))
.catch((err) =>console.error(err));


const users = mongoose.model('User', new mongoose.schema({name:String}))
users.create({name:'chanchito triste'})
app.get('*', (req, res)=>{
    users.find()
    .then(x => res.send(x))
})
/*app.get('*', (req, res) => {
    console.log('Hola mundo! mi primera aplicacion serverless');
    res.send({mensaje: 'Chanchito Feliz'})
});*/

module.exports = app