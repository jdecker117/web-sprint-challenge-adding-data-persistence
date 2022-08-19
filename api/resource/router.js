// build your `/api/resources` router here
const express = require('express')


const router = express.Router()



router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong with resource router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router