const {verify}  = require('jsonwebtoken')
const dotenv  = require('dotenv');
dotenv.config()

const validateToken = (req,res,next) => {

    const usersToken = req.headers['x-access-token'] || req.cookies.user;

    console.log(usersToken)

    if(!usersToken) { return res.status(202).send("You are not logged In") }

    try{
        const validToken = verify(usersToken, process.env.COOKIE)

        if(validToken) {
             next();
        }
    }catch(err){
        res.clearCookie("user")
        return res.status(400).send("Error validating")
    }

}

 


module.exports = {validateToken}