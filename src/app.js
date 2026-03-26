const express = require('express');
const turtles = require('./turtles');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Teenage Mutant Ninja Turtles API');
});

app.get('/turtles', (req, res) => {
    res.json(turtles);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});