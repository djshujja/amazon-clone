const jwt = require('jsonwebtoken')

const secret = "ABCDEFGHIJKLMNOPQRST"

const myToken = async (user) => {
    console.log("Token Generated!")
   return jwt.sign(
        {
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        }, 
        secret,
        {
            expiresIn:'48h'
        }
    )
}


module.exports = myToken