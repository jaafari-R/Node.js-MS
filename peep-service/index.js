const express = require('express');
const {randomBytes } = require('crypto');


const PORT = 5001;
const peepBySquawkId = {};


const app = express();
app.use(express.json());

app.post('/birdsquawk/:id/peeps', (req, res) => {
    const peepId = randomBytes(8).toString('hex');
    const { peep } = req.body;
    const peeps = peepBySquawkId[req.params.id] || [];
    peeps.push({ id: peepId, peep});
    peepBySquawkId[req.params.id] = peeps;
    res.status(201).send(peeps);
});

app.get('/birdsquawk/:id/peeps', (req, res) => {
    res.send(peepBySquawkId[req.params.id] || []);
});

app.listen(PORT, () => {
    console.log('Peep-Service is listening on port', PORT)
});