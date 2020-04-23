const express = require('express');
const router = express.Router()

const database = require('./db');
const connection = database.getConnection();



router.get('/example1/user/:id', (req,res) => {
    let userId = req.params.id;
    let query = {
        sql : "SELECT * FROM users WHERE id=" + userId
    }
    connection.query(query,(err, result) => {
        res.json(result);
    });
})

router.get('/example2/user/:id',  (req,res) => {
    let userId = req.params.id;
    connection.query("SELECT * FROM users WHERE id=" + userId,(err, result) => {
        res.json(result);
    });
})

router.get('/example3/user/:id',  (req,res) => {
    let userId = req.params.id;
    connection.query({
        sql : "SELECT * FROM users WHERE id=" +userId
    },(err, result) => {
        res.json(result);
    });
})


module.exports = router