const express = require('express')
const path = require('path')

const server2 = express()

server2.get('/nacktschnecke', (req, res) => {
    const ruta = path.join(__dirname, 'server3-files', 'nacktschnecke.html')
    res.sendFile(ruta)
})

server2.get('/about', (req, res) => {
    const ruta = path.join(__dirname, 'server3-files', 'about.html')
    res.sendFile(ruta)
})

server2.use((req, res)=> {
    res.status(404).send('No he encontrado lo que buscabas...')
})

server2.listen(3000)