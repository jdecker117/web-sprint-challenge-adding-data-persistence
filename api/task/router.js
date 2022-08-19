// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {

})

router.post('/', (req, res, next) => {

})

router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong with task router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router