const express = require('express');
const app = express();

const postRoutes = require('./routes/post')
const userRoutes = require('./routes/user')

app.use(express.json())
app.use('/posts/', postRoutes)
app.use('/users/', userRoutes)

const port = process.env.PORT
app.listen(port, () => console.log(`A NodeJS API is listening on port ${port}`))