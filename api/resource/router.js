// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Resource.getResources()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Resource.postResource(req.body)
    .then(result => {
        console.log(result)
        res.status(201).json(result)
    })
    .catch(next)
})


module.exports = router