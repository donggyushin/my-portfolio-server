const express = require('express')
const app = express()

app.use('/', express.static(__dirname + '/../../react-client/build'))

export default app;
