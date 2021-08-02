'use strict';

const Joi = require('joi');
const regEx = require('../../utils/regularExpression')
const resHndlr = require('../../handlers/responseHandler');
const productConstant = require('./productConstant')

let addProduct = async (req, res, next) => {
    try {

        let schema = Joi.object({
            pro_name: Joi.string().required(),
            pro_price: Joi.string().required(),
            pro_type: Joi.string().required()
                .messages({ 'string.pattern.base': productConstant.VALIDATION.invalidEmail }),
        })

        await schema.validateAsync(req.body, { allowUnknown: true });
        next();

    } catch (error) {
        resHndlr.validationErrorHandler(res, error);
    }
}

module.exports = {
    addProduct
}