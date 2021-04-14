const express = require('express')

const server6 = express()

server6.use(express.urlencoded({ extended: false }))
server6.use(express.static('server-6-static-files'))

server6.get('/formulario', (req, res) => {
    res.status(200).send(`
    <html>
    <head>
    <link rel="stylesheet" href="/estilos.css">
    </head>
    <body>
    <form class="form" method="POST" action="/formulario">
    <label for="name" class="label-name">Name</label>
    <input type="text" id="name" name="name" maxlength="40" class="field field-name" />
    
    <label for="email" class="label-email">Email Address</label>
    <input type="email" id="email" name="email" maxlength="40" class="field field-email" />
    
    <label for="message" class="label-message">Message</label>
    <textarea id="message" name="message" cols="30" rows="5" maxlength="400" class="field field-message"></textarea>
    
    <input type="submit" value="Send Message" class="button" />
    </form>
    </body>
    </html>
    `)
})

server6.post('/formulario', (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body)
})

server6.use((req, res) => {
    res.status(404).send('Recurso no encontrado...')
})

server6.listen(3000)
