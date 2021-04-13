const express = require('express')

const server1 = express()

server1.get('', (req, res) => {
    res.status(200).send(`
    <h1>El servidor funciona correctamente</h1>
    <p>Aquí iría el contenido del mensaje</p>
    `)
})

server1.listen(3000)