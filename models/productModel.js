const { number } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const constants = require('../utils/constant');

const ProductSchema = new Schema({
    pro_name: {
        type: String
    },
    pro_type: {
        type: String
    },
    pro_price: {
        type: Number
    },
    pro_is_deleted: {
        type: Boolean,
        default: false
    }
},
    {
        
        versionKey: false
    
})
    
Product = module.exports = mongoose.model(constants.DB_MODEL_REF.PRODUCT, ProductSchema);