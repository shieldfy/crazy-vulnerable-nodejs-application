const express = require('express');
const config = require('../config')
const router = express.Router()


const MongoClient = require('mongodb').MongoClient;
const url = config.MONGODB_URI;

router.get('/', (req, res) => res.send('Hello World!'))
router.get('/register', (req, res) => res.send('Hello World!'))

router.post('/customers/register', (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(config.MONGODB_DB_NAME);
    var myobj = { name: req.body.name, address: req.body.address };
    var customers = dbo.collection("customers")
    customers.insertOne(myobj, function (err) {
      if (err) throw err;
      console.log("user registered");
      db.close();
    });
    res.json("document inserted")
  });
})


// Vulnerable search function
router.post('/customers/find', (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(config.MONGODB_DB_NAME);
    var myobj = { name: req.body.name };
    var customers = dbo.collection("customers")
    customers.findOne(myobj, function (err, result) {
      if (err) throw err;
      db.close();
      res.json(result)
    });
  });
})

// Vulnerable Authentication
// Authentication Bypass Example
// curl -X POST http://localhost:3000/customers/login/ --data "{\"email\": {\"\$gt\":\"\"} , \"password\": {\"\$gt\":\"\"}}" -H "Content-Type: application/json"

router.post('/customers/login', (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(config.MONGODB_DB_NAME);
    var customers = dbo.collection("customers")
    var myobj = { email: req.body.email, password: req.body.password };
    customers.findOne(myobj, function (err, result) {
      if (err) throw err;
      db.close();
      res.json(result)
    });
  });
})
