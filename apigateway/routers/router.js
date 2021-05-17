var express = require('express');
var router = express.Router()
var feedService = require('./saludoService')
var hashtagService = require('./despedidaService.js')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(feedService)
router.use(hashtagService)

module.exports = router