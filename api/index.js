const express = require('express')
const app = express();

app.get('*', (req, res) => {
    console.log('Hola mundo! mi primera aplicacion serverless');
    res.send({mensaje: 'Chanchito Feliz'})
})

export default function handler(request, response) {
    const { name } = request.query;
    response.status(200).send(`Hello ${name}!`);
  }

module.exports = app