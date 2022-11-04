const express = require('express');
const app = express();
const port = 5500;
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/about.html'));
});

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname + '/contact-me.html'));
});

app.get('/404', (req, res) => {
    res.sendFile(path.join(__dirname + '/404.html'));
});

app.listen(port, () => {
    console.log(`app listens at port: ${port}`);
});