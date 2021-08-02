const router = require('express').Router();
const facade = require('./customerFacade');
const validator = require('./customerValidators');
const resHndlr = require('../../handlers/responseHandler');

router.route('/addCustomer').post([validator.addCustomer],(req, res) => {
   facade.addCustomer(req, res).then((result) => {
        resHndlr.successHandler(res, result)
    }).catch((err) => {
        resHndlr.errorHandler(res, err)
    })
})

router.route('/getCustomer/:id').get((req, res) => {
    facade.getCustomer(req, res).then((result) => {
        resHndlr.successHandler(res, result)
    }).catch((err) => {
        resHndlr.errorHandler(res, err)
    })
})

router.route('/updateCustomer/:id').put((req, res) => {
    facade.updateCustomer(req, res).then((result) => {
        resHndlr.successHandler(res, result)
    }).catch((err) => {
        resHndlr.errorHandler(res, err)
    })
})

router.route('/deleteCustomer/:id').delete((req, res) => {
    facade.deleteCustomer(req, res).then((result) => {
        resHndlr.successHandler(res, result)
    }).catch((err) => {
        resHndlr.errorHandler(res, err)
    })
})


router.route('/loginCustomer').post((req, res) => {
    facade.loginCustomer(req, res).then((result) => {
        resHndlr.successHandler(res, result)
    }).catch((err) => {
        resHndlr.errorHandler(res, err)
    })
})

router.route('/adminCustomer').post((req, res) => {
    facade.adminCustomer(req, res).then((result) => {
        resHndlr.successHandler(res, result)
    }).catch((err) => {
        resHndlr.errorHandler(res, err)
    })
})

router.route('/listCustomer').get((req, res) => {
    facade.listCustomer(req, res).then((result) => {
         resHndlr.successHandler(res, result)
     }).catch((err) => {
         resHndlr.errorHandler(res, err)
     })
 })



module.exports = router;