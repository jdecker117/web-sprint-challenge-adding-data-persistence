// build your server here and require it from index.js
const express = require('express');

const ProjectRouter = require('./project/router');
const ResourceRouter = require('./resource/router');
const TaskRouter = require('./task/router');

const server = express();

server.use(express.json());

server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);
server.use('/api/tasks', TaskRouter);

server.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong',
        message: err.message,
        stack: err.stack,
    })
})

server.use('*', (req, res) => {
    res.json({api: 'up'})
})

module.exports = server;