const Joi = require('joi');

export const userJoi = (userData) => {
    const userSchema = Joi.object({
        firstName: Joi.string().required().min(2),
        lastName: Joi.string().required().min(2),
        email: Joi.email().required(),
        password: Joi.string().required().min(8),
    })
    return userSchema.validate(userData)
}