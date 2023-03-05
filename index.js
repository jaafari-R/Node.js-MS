const express = require('express');
const { randomBytes } = require('crypto');


const PORT = 5000;

const app = express();

const squawkData = {};

app.use(express.json);

app.post('/birdsquawk', (req, res) => {
    const id = randomBytes(8).toString('hex');
    const { title } = req.body;

    squawkData[id] = { id, title };

    res.sendStatus(201).send(squawkData[id]);
});

app.listen(PORT, () => {
    console.log('BirdSquawk is listening on port', PORT);
});