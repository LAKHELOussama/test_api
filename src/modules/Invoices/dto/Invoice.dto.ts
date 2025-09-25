import Joi from "joi";

export const invoiceDto = Joi.object({
    date: Joi.date().required(),
    total: Joi.number().required(),
    product: Joi.string().required(),
    tva: Joi.number().required(),
})