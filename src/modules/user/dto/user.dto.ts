import Joi from "joi";

export const userDto = Joi.object({
    fullname : Joi.string().required(),
    phone : Joi.string().required(),
    email : Joi.string().required(),
    password : Joi.string(),
    addresse : Joi.string().required(),
    role: Joi.string().required(),
})