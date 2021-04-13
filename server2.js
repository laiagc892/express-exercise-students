const express = require('express')

const server2 = express()

server2.get('/mensaje', (req, res) => {
    console.log(req);
    res.status(200).send(`
        <h1>El servidor funciona correctamente</h1>
        <p>Aquí iría el contenido del mensaje</p>
        `)
})

server2.use((req, res)=> {
    res.status(404).send('No he encontrado lo que buscabas...')
})

server2.listen(3000)





// server2.get('/:endpoint', (req, res) => {
//     console.log(req.params);
//     if (req.params.endpoint == 'mensaje') {
//         return res.status(200).send(`
//         <h1>El servidor funciona correctamente</h1>
//         <p>Aquí iría el contenido del mensaje</p>
//         `)
//     }
// })