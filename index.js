const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());
const port = 300


app.get('/', (req, res) => res.send('Hello World!'))

app.use('/xss', require('./vulnerabilities/xss'));
app.use('/sqli', require('./vulnerabilities/sqli'));
app.use('/nosqli', require('./vulnerabilities/nosqli'));
app.use('/exec', require('./vulnerabilities/exec'));


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))