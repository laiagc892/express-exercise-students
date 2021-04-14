const express = require('express')
const path = require('path')

const server3 = express()

server3.get('/nacktschnecke', (req, res) => {
    const ruta = path.join(__dirname, 'server3-files', 'nacktschnecke.html')
    res.sendFile(ruta)
})

server3.get('/about', (req, res) => {
    const ruta = path.join(__dirname, 'server3-files', 'about.html')
    res.sendFile(ruta)
})

server3.use((req, res)=> {
    res.status(404).send('No he encontrado lo que buscabas...')
})

server3.listen(3000)