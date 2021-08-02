const service = require('./customerService');
const resHndlr = require('../../handlers/responseHandler');
const constant = require('../../utils/constant');
const customerConstant = require('./customerConstant');

let addCustomer = (req) => {
    return service.addCustomer(req).then((data) => {
        if(data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.emailExist, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, customerConstant.MESSAGE.addSuccess, data)
        }
    }, (error) => {
        console.log('addCustomer Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.addError, error);
    })
}

let getCustomer = (req) => {
    return service.getCustomer(req).then((data) => {
        return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, customerConstant.MESSAGE.getSuccess, data)
    }, (error) => {
        console.log('getCustomer Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.getError, error);
    })
}

let updateCustomer = (req) => {
    return service.updateCustomer(req).then((data) => {
        if(data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.userNotFound, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, customerConstant.MESSAGE.updateSuccess, data)
        }
    }, (error) => {
        console.log('updateCustomer Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.updateError, error);
    })
}

let listCustomer = (req) => {
    return service.listCustomer(req).then((data) => {
        if(data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.emailExist, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, customerConstant.MESSAGE.addSuccess, data)
        }
    }, (error) => {
        console.log('listCustomer Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.addError, error);
    })

}
let deleteCustomer = (req) => {
    return service.deleteCustomer(req).then((data) => {
        if(data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.emailExist, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, customerConstant.MESSAGE.addSuccess, {})
        }
    }, (error) => {
        console.log('deleteCustomer Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.addError, error);
    })

}


let loginCustomer = (req) => {
    return service.loginCustomer(req).then((data) => {
        if(data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.emailExist, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, customerConstant.MESSAGE.addSuccess, data)
        }
    }, (error) => {
        console.log('loginCustomer Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.addError, error);
    })

}

let adminCustomer = (req) => {
    return service.adminCustomer(req).then((data) => {
        if(data && data === 1) {
            return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.userNotFound, data)
        } else {
            return resHndlr.requestResponse(true, constant.HTTP_CODE.ok, customerConstant.MESSAGE.updateSuccess, data)
        }
    }, (error) => {
        console.log('adminCustomer Error => ', error)
        return resHndlr.requestResponse(false, constant.HTTP_CODE.badRequest, customerConstant.MESSAGE.updateError, error);
    })
}
module.exports = {
    addCustomer,
    getCustomer,
    updateCustomer,
    deleteCustomer,
    adminCustomer,
    loginCustomer,
    listCustomer
    
    
    
    
}
