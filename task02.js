const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const port = 8000;

const password = 'helloWorld';

app.get('/encode/:text', (req, res) => {
    res.send(Vigenere.Cipher(password).crypt(req.params.text));
});

app.get('/decode/:text', (req, res) => {
    res.send(Vigenere.Decipher(password).crypt(req.params.text));
});

app.listen(port, () => {
    console.log('We are live in ' + port);
});
