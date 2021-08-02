const service = require('./productService');
const resHndlr = require('../../handlers/responseHandler');
const constant = require('../../utils/constant');
const productConstant = require('./productConstant');

let addProduct = (req) => {
    return service.addProduct(req).then((data) => {
        if(data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.emailExist, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, productConstant.MESSAGE.addSuccess, data)
        }
    }, (error) => {
        console.log('addProduct Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.addError, error);
    })
}

let getProduct = (req) => {
    return service.getProduct(req).then((data) => {
        if(data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.emailExist, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, productConstant.MESSAGE.addSuccess, data)
        }
    }, (error) => {
        console.log('getProduct Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.addError, error);
    })
}

let updateProduct = (req) => {
    return service.updateProduct(req).then((data) => {
    //console.log("facade")

    //console.log(req.body, "facade")
        if(data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.productNotFound, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, productConstant.MESSAGE.updateSuccess, data)
        }
    }, (error) => {
        console.log('addUser Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.updateError, error);
    })
}

let deleteProduct = (req) => {
    return service.deleteProduct(req).then((data) => {
        if(data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.emailExist, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, productConstant.MESSAGE.addSuccess, data)
        }
    }, (error) => {
        console.log('deleteProduct Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.addError, error);
    })
}

let listProduct = (req) => {
    return service.listProduct(req).then((data) => {
        if(data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.emailExist, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, productConstant.MESSAGE.addSuccess, data)
        }
    }, (error) => {
        console.log('listProduct Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, productConstant.MESSAGE.addError, error);
    })
}

module.exports = {
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct,
    listProduct
}