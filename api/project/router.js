// build your `/api/projects` router here
const express = require('express')


const router = express.Router()



router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong with project router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router