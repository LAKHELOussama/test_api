import Joi from "joi";

export default {
    authDto: Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required(),
    })  
}