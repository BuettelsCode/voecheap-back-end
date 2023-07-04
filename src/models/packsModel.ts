import joi from "joi";

export const customerPackgeSchema = joi.object({
    name: joi.string().required(),
    whatsapp: joi.string().required(),
    going: joi.string().required(),
    turning: joi.string().required()
});