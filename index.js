const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
    res.send(`Hello world from Port ${port}`)
});

app.get('/:myname', (req, res, next) => {
    res.send(`Hello world! My name is ${req.params.myname}}`)
});

app.listen(port, () => {
    console.info(`Server is running on port ${port}`);
});

