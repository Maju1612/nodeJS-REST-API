const jwt = require('jsonwebtoken');
const jwtRes = require('../repositories/jwt')

exports.createToken = async (email, password) => {
    const userId =  await jwtRes.createToken(email, password)

    const token = jwt.sign({'id':userId}, process.env.TOKEN_SECRET, { expiresIn: '7d' });
    return(token)
}


