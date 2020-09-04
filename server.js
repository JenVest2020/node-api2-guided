const express = require('express');


const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

server.use(express.json());
server.use('/api/hubs', hubsRouter);
server.use('/told/ya', myownfunction);

server.get('/', (req, res) => {
    res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

function myownfunction(req, res) {
    res.send('told ya so');
};





module.exports = server;