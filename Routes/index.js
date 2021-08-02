const customerRoute = require('../modules/Custmor/customerRouter')
const productRoute = require('../Modules/Product/productRouter')
module.exports = (app) => {

    // employee route
    app.use('/api/customer', [customerRoute]);
    app.use('/api/product', [productRoute]);
}