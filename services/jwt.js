const jwt = require('jsonwebtoken');
const { knex } = require('../db/conn')
const jwtRes = require('../repositories/jwt')

exports.createToken = async (email, password) => {
    const userId =  await jwtRes.createToken(email, password)

    const token = jwt.sign({'id':userId}, process.env.TOKEN_SECRET, { expiresIn: '7d' });
    return(token)
}

exports.authToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if (token === null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_SECRET, (err, userId) => {
        if (err) return res.sendStatus(403)
        req.body.userId = userId.id
        next()
    })
}
