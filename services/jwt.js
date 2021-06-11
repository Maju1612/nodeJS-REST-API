const jwt = require('jsonwebtoken');
const { getUserId } = require('../repositories/user')

exports.createToken = async (email, password) => {
    const userId = await getUserId(email, password)
    
    if (!userId) return {succes:false}

    const token = jwt.sign({'id':userId}, process.env.TOKEN_SECRET, { expiresIn: '7d' });
    return {succes:true, TOKEN:token}
}
