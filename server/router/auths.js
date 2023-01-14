const router = require('express').Router();
const User = require('../models/Users.js')
const Cars = require('../models/Cars.js')
const { PostValidation, RegValidation, LoginValidation,  NinValidation , carValidation} = require('../rules/validation')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv  = require('dotenv');
const {validateToken} = require("../router/VerifyToken")
const {verify}  = require('jsonwebtoken')
dotenv.config()



// USERS
router.post('/register',  async (req, res) => {

    // error message check
    const { value, error } = RegValidation(req.body)

    if (error) {
        return res.status(202).send(error.details[0].message)
    }

    const {email,fullname, phone,nin}  = req.body


    //username duplicate check 
    const emailCheck = await User.findOne({
        where: { email}
    })
    if(emailCheck) return res.status(202).send("email already exist")

    //fullname duplicate check 
    const fullnameCheck = await User.findOne({
        where: { fullname}
    })
    if(fullnameCheck) return res.status(202).send("fullname already exist")

    //phone duplicate check 
    const phoneCheck = await User.findOne({
        where: { phone}
    })
    if(phoneCheck) return res.status(202).send("phone already exist")

    
    // encrypt the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)


    
    // send and save info - database
    const postMe = await User.create({
        email,
        fullname,
        phone,
        nin,
        password:hashedPassword,
    }).then((userInfo) => {
        res.status(200).send("Upload Successful")
    }).catch((err) => {
        res.status(400).send('I think something might be wrong with your internet connection')
    })

})

// all users
router.get("/users" ,(req, res) => 
 
User.findAll().then((data) => res.status(200).send(data)).catch((err) => res.status(202).send("Unable to fetch your requested data"))

);


// login authentication
router.post('/login', async (req, res, next) => {
    
    // error message check
    const { value, error } = LoginValidation(req.body)

    if (error) {
        return res.status(202).send(error.details[0].message)
    }


    const { email, password}  = req.body


    //Email duplucate check 
    const userCheck = await User.findOne({
        where: { email}
    })
    if(!userCheck) return res.status(202).send("email doesnt Exists")

    //  check Password 
    const passwordCheck = await bcrypt.compare(password, userCheck.password).then((result) => {
        if(!result) return res.status(202).send("Invalid Password")

        const giveToken = jwt.sign({
            id: userCheck.id,
            email: userCheck.email,
            fullname: userCheck.fullname,
            phone: userCheck.phone,
            nin: userCheck.nin,
        }, process.env.COOKIE, {expiresIn: '1d' });


        const newCookie =  res.cookie("user", giveToken , {
                maxAge: 24 * 60 * 60 * 1000 ,
                path: '/',
                // httpOnly: true,
                // secure:true,
                // signed: true
            }
        )
 

        if(newCookie) {
            res.status(200).json({auth: true,loggedIn: true,cookie:req.cookies})
        } else {
            res.clearCookie('user')
            res.status(202).json({auth: false,loggedIn: false, cookie:'No cookies'})
        }
    })
 
 next()
});

router.get('/login', async (req, res, next) => {
    if(req.cookies.user) {
        console.log(req.cookies)
        res.status(202).json({auth: true,loggedIn: true,cookie:req.cookies.user})
        next()
    } else {
        res.clearCookie('user')
        res.status(202).json({auth: false,loggedIn: false, cookie:'No cookies'})
        res.end()
     }
     next()
})

// nin authentication
router.post('/nin',  async (req, res) => {

    // error message check
    const { value, error } = NinValidation(req.body)

    if (error) {
        return res.status(202).send(error.details[0].message)
    }

    const {nin, email}  = req.body

    // update Code status
    const codeStatus = await User.update(
        {nin},
        {where: { email}}
    ).then((userInfo) => {
        res.status(200).send(userInfo)
    }).catch((err) => {
        res.status(400).send('I think something might be wrong with your internet connection')
    })

})




// post cars
router.post('/cars',  async (req, res) => {

    // error message check
    const { value, error } = carValidation(req.body)

    if (error) {
        return res.status(202).send(error.details[0].message)
    }

    const {carName, ownedBy, status,carModel}  = req.body


     
    
    // send and save info - database
    const postMe = await Cars.create({
        carName,
        ownedBy,
        status:false,
        carModel
    }).then((userInfo) => {
        res.status(200).send("Upload Successful")
    }).catch((err) => {
        res.status(400).send('I think something might be wrong with your internet connection')
    })

})


module.exports = router
