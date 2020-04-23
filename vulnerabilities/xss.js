const express = require('express')
const router = express.Router()

router.get('/greeting', (req, res) => {res.send('<h1> Hello :'+ req.query.name +"</h1>")})

module.exports = router