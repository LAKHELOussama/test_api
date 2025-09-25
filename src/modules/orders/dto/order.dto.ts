import Joi from "joi";

export const orderDto = Joi.object({
    deliveryAddress: Joi.string().required(),
    deliveryDate: Joi.string().required(),
    total: Joi.number().required(),
    deliveryPrice:Joi.number().required(),
    products:Joi.array(),
    status : Joi.string().required(),
    fullName : Joi.string().required(),
    telephone : Joi.string().required(),
    

})