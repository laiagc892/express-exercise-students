const express = require('express')
const isPalindrome = require('franklinjosmell-palindrome')

const server5 = express()

server5.get('/check', (req, res) => {
    console.log(req.query);
    console.log(req.query.palabra);

    let answer
    if (new isPalindrome(req.query.palabra).palindrome()) {
        answer = "<h2>Es un palíndromo</h2>"
    } else answer = "<h2>NO es un palíndromo</h2>"

    res.status(200).send(answer)
})

server5.use((req, res)=> {
    res.status(404).send('No he encontrado lo que buscabas...')
})

server5.listen(3000)