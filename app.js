const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send('hello')
})

const port = 3000
app.listen(port, () => console.log(`A NodeJS API is listening on port ${port}`))