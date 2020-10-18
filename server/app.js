const http = require('http');
const express = require('express');

const sheltersRouter = require('./routes/shelter');

const app = express();
app.use(express.json());

app.use('/shelters', sheltersRouter);

app.use('/', (req, res) => res.send('node-api works)'));

const server = http.createServer(app);
const port = process.env.PORT || 3001;
server.listen(port);
