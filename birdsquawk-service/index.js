const express = require('express');
const { randomBytes } = require('crypto');


const PORT = 5000;
const squawkData = {};


const app = express();

app.use(express.json());

app.post('/birdsquawk', (req, res) => {
    const id = randomBytes(8).toString('hex');
    const { title } = req.body;

    squawkData[id] = { id, title };

    res.status(201).send(squawkData[id]);
});

app.get('/', (req, res) => {
    res.send("Hello")
});

app.listen(PORT, () => {
    console.log('BirdSquawk is listening on port', PORT);
});