const express = require('express');
const app = express();

const connection = mysql.createConnection({
        host:'sql11.freemysqlhosting.net',
        user:'sql11416779',
        password:'QE9pMXfqfX',
        database:'sql11416779'
    })

const postRoutes = require('./routes/post')

app.use('/', postRoutes)

const port = 3000
app.listen(port, () => console.log(`A NodeJS API is listening on port ${port}`))