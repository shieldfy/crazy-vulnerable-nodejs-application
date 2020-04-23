const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());
const port = 300


app.get('/', (req, res) => res.send('Hello World!'))

app.use('/xss', require('./vulnerabilities/xss'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))