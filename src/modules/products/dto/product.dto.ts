import Joi from "joi";

export const productDto = Joi.object({
    photo : Joi.array().items(Joi.string()).required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    inStock: Joi.boolean().required(),
    price: Joi.number().required(),
    quantity : Joi.number().required(),
    type : Joi.string().required(),
    category: Joi.string().required(),
})