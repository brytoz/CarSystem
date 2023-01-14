const Joi = require('joi')


const RegValidation = (data) => {


    const schema = Joi.object().keys({
        email: Joi.string().min(6).required().email(),
        fullname: Joi.string().required(''),
        phone: Joi.number().required('').min(10),
        password: Joi.string().required(''),
        nin: Joi.number().allow('').optional(), 
    })

    // VALIDATE  USERS INPUT DATA
    return schema.validate(data)
}


const PostValidation = (data) => {

    const schema = Joi.object().keys({
        image: Joi.string().allow('').optional(), 
    })

    // VALIDATE ADMIN USERS INPUT DATA
    return schema.validate(data)
}



 


const LoginValidation = (data) => {
    const schema = Joi.object().keys({
        email: Joi.string().min(5).required().email(),
        password: Joi.string().min(6).required()
    })

    // VALIDATE USER INPUT DATA
    return schema.validate(data)
}

const NinValidation = (data) => {


    const schema = Joi.object().keys({
        email: Joi.string().min(6).required().email(),
        nin: Joi.number().min(8).required(),
    })

    // VALIDATE dictionary INPUT DATA
    return schema.validate(data)
}


// rules for car input

const carValidation = (data) => {

    const schema = Joi.object().keys({
        carName: Joi.string().required(),
        ownedBy: Joi.string().required(),
        carModel: Joi.string().required(),
        status: Joi.string().optional(),
    })

    // VALIDATE dictionary INPUT DATA
    return schema.validate(data)
}




 
module.exports = { LoginValidation, RegValidation , PostValidation, NinValidation, carValidation }