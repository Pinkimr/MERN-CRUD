const productModel = require('../../models/productModel');

let addProduct = (req) => {

    let query = {

        pro_name: req.body.pro_name,
        pro_type: req.body.pro_type,
        pro_price: req.body.pro_price
    }
    return productModel.findOne(query).then((result) => {

        if (result && result !=null) {

            // email already exist
            return 1;

        } else {

            let productSave = new productModel(req.body);

            return productSave.save().then((data) => {
                return data;
            })
        }
    })
}

let getProduct = async (req) => {

    try{
        if(req.params.id.length ==24 ){
            const getProduct = await productModel.findOne({_id:req.params.id})
            if(getProduct && getProduct.pro_name)
                { return getProduct }
            else
               {
            console.log("error 1")
            return 1 }
        }else{
            console.log("error 2")
            return 2;
        }
        }catch(e){
            console.log("cache error")
        console.log(e)
    }    
}

let updateProduct = async (req) => {
    try{
        let id = req.params.id
        
        let checkProduct = await productModel.find({_id:id})
        // console.log('checkUSer',checkUser)
        
        if(checkProduct.length > 0){
            // 1.check in db 
            // 2. if yes,update user process
            // 3.if no .return 1
            
            let updatedProduct = await productModel.updateOne(
                {_id:id},
                {
                    pro_name:req.body.pro_name,
                    pro_price:req.body.pro_price,
                    pro_type:req.body.pro_type
                }
                
                )
                // console.log(updatedUser)
                return updatedProduct
        }else{
            return 1;
        }
    }catch(error){
        return 1
        console.log(error)
    }
}

let listProduct = (req) => {

    let query = {
        pro_is_deleted: false
    }

    return productModel.find(query).then((result) => {
        console.log(query)
        return { products: result }
    })

}

let deleteProduct = async (req, res) => {
    
    try{
        let id = req.params.id      
        let checkProduct = await productModel.find({_id:id})
        if(checkProduct.length > 0){
            //console.log(checkProduct.pro_name)
        let del_Product = await productModel.deleteOne()
            //{_id:id})

            return del_Product
        }else {
            return 1;
        }

    }catch(error){
        return 1
        console.log(error)
    }

}


module.exports = {
    addProduct,
    listProduct,
    getProduct,
    updateProduct,
    deleteProduct
}