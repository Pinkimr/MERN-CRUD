'use strict';

const Joi = require('joi');
const regEx = require('../../utils/regularExpression')
const resHndlr = require('../../handlers/responseHandler');
const customerConstant = require('./customerConstant')

let addCustomer = async (req, res, next) => {
    try {

        let schema = Joi.object({
            cus_firstname: Joi.string().required(),
            cus_lastname: Joi.string().required(),
            cus_email: Joi.string().required().pattern(regEx.emailRegEx)
                .messages({ 'string.pattern.base': customerConstant.VALIDATION.invalidEmail }),
        })

        await schema.validateAsync(req.body, { allowUnknown: true });
        next();

    } catch (error) {
        resHndlr.validationErrorHandler(res, error);
    }
}

module.exports = {
    addCustomer
}