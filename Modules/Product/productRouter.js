const router = require('express').Router();
const facade = require('./productFacade');
const validator = require('./productValidators');
const resHndlr = require('../../handlers/responseHandler');

router.route('/addProduct').post([validator.addProduct],(req, res) => {
   facade.addProduct(req, res).then((result) => {
        resHndlr.successHandler(res, result)
    }).catch((err) => {
        resHndlr.errorHandler(res, err)
    })
})

router.route('/getProduct/:id').get((req, res) => {
    facade.getProduct(req, res).then((result) => {
         resHndlr.successHandler(res, result)
     }).catch((err) => {
         resHndlr.errorHandler(res, err)
     })
 })

 
router.route('/updateProduct/:id').put((req, res) => {
    console.log("route")
    facade.updateProduct(req, res).then((result) => {
    resHndlr.successHandler(res, result)
    
    }).catch((err) => {
       resHndlr.errorHandler(res, err) 
    })
})

 
 router.route('/deleteProduct/:id').delete((req, res) => {
    facade.deleteProduct(req, res).then((result) => {
         resHndlr.successHandler(res, result)
     }).catch((err) => {
         resHndlr.errorHandler(res, err)
     })
 })
 
 router.route('/listProduct').get((req, res) => {
    facade.listProduct(req, res).then((result) => {
         resHndlr.successHandler(res, result)
     }).catch((err) => {
         resHndlr.errorHandler(res, err)
     })
 })
 

module.exports = router