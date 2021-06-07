const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const postRoutes = require('./routes/post')

app.use(bodyParser.json())
app.use('/', postRoutes)

const port = 3000
app.listen(port, () => console.log(`A NodeJS API is listening on port ${port}`))