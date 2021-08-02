const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const constants = require('../utils/constant');

const bcrypt  = require('bcrypt');

const CustomerSchema = new Schema({
    cus_firstname: {
        type: String
    },
    cus_lastname: {
        type: String
    },
    cus_email: {
        type: String
    },
    cus_password: {
        type: String
    },
    cus_mobile: {
        type: String
    },
    cus_country: {
        type: String
    },
    cus_city: {
        type: String
    },
    cus_role:{
        "type":String, 
        "enum": ["Admin","Customer"]
    }, 
    cus_token:{
        "type":String 
    },
    cus_is_deleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: { createdAt: 'cus_created_at', updatedAt: "cus_updated_at" },
    versionKey: false
})

CustomerSchema.pre('save', async function (next){
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.cus_password, salt)
        this.cus_password = hashedPassword
        next()
    } catch (error) {
        next(error)
    }
})

Customer = module.exports = mongoose.model(constants.DB_MODEL_REF.CUSTOMER, CustomerSchema);