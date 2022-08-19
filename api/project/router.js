// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Project.getProjects()
    .then(result => {
        res.status(200).json(result)
    })
})

router.post('/', (req, res, next) => {
    Project.postProject(req.body)
    .then(result => {
        console.log(result)
        res.status(201).json(result)
    })
    .catch(next)
})


module.exports = router