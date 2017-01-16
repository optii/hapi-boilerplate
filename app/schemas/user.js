/**
 * Created by dan on 16/01/2017.
 */
const Joi = require('joi');

let schema = Joi.object().keys({
    login: Joi.string().alphanum().required(),
    password: Joi.string().alphanum().min(8).required(),
    email: Joi.string().email().required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    nir: Joi.string().length(15),
});

module.exports = schema;