const express = require('express')
const isPalindrome = require('./utils/palindrome/index.js')

const server4 = express()

server4.get('/check/:word', (req, res) => {
    console.log(req.params);

    let answer
    if (isPalindrome.palindrome(req.params.word)) {
        answer = "<h2>Es un palíndromo</h2>"
    } else answer = "<h2>NO es un palíndromo</h2>"

    res.status(200).send(answer)
})

server4.use((req, res)=> {
    res.status(404).send('No he encontrado lo que buscabas...')
})

server4.listen(3000)