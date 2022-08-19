// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Task.getTasks()
    .then(result => {
        console.log(result)
        res.status(200).json(result)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Task.postTask(req.body)
    .then(result => {
        res.status(201).json(result)
    })
    .catch(next)
})


module.exports = router