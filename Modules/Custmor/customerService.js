const custmorModel = require('../../models/custmorModel');
const customerModel = require('../../models/custmorModel');

const jwt = require('jsonwebtoken');
jwtKey = "jwt"
const bcrypt  = require('bcrypt');

let addCustomer = (req) => {

    let query = {
        cus_is_deleted: false,
        cus_email: req.body.emp_email
    }
return customerModel.findOne(query).then((result) => {

        if (result) {
            return 1;

        } else {

            let customerSave = new customerModel(req.body);

            return customerSave.save().then((result) => {
                return result;
            })
        }
    })

}

let listCustomer = (req) => {

    let query = {
        cus_is_deleted: false
    }

    return customerModel.find(query).then((result) => {
        return { customers: result }
    })

}

let updateCustomer = async (req) => {
    try{
        let id = req.params.id       
        let checkUser = await customerModel.find({_id:id})
        // console.log('checkUSer',checkUser)
        
        if(checkUser.length > 0){
            // 1.check in db 
            // 2. if yes,update user process
            // 3.if no .return 1
            let updatedUser = await customerModel.updateOne(
                {_id:id},
                {
                    cus_firstname:req.body.cus_firstname,
                    cus_lastname:req.body.cus_lastname,
                    cus_email:req.body.cus_email,
                    cus_password:req.body.cus_password,
                    cus_mobile:req.body.cus_mobile,
                    cus_country:req.body.cus_country,
                    cus_city:req.body.cus_city
                } 
                )
                // console.log(updatedUser)
                return updatedUser
        }else{
            return 1;
        }
    }catch(error){
        return 1
        console.log(error)
    }
}

let deleteCustomer = async (req) => {
    
    try{
        let id = req.params.id      
        console.log(id) 
        let checkUser = await customerModel.find({_id:id})
        if(checkUser.length > 0){
        let deleteUser = await customerModel.deleteOne({_id:id})

            return deleteUser
        }else {
            return 1;
        }

    }catch(error){
        return 1
        console.log(error)
    }

}


const loginCustomer = async (req,res) => {
    console.log("called loginUser")
    var email = req.body.cus_email;
    var password = req.body.cus_password;
    
    let getUser = await customerModel.findOne({cus_email:email})
        console.log("xyzzzz")
        if(!getUser) {
            return 1;
        }
        else{
            //console.log("else")
            const checkPassword = await bcrypt.compare(password,getUser.cus_password)
            //console.log("checkPassword",checkPassword)
                if(checkPassword) {
                    try {
                        const token = await jwt.sign({getUser},jwtKey);
                        if(getUser.usr_token.length <= 0)
                        await customerModel.updateOne({cus_email:email},{cus_token:token})
                        return {token};
                    } catch (error) {
                        console.log(error);
                    }
                } else {
                    return 1;
                }
        }
        
}

let adminCustomer = async (req) => {
    let adminCus = await customerModel.findOne({cus_role : "Admin"})
    if(!adminCus){
        const creatAdmin = {
                    cus_firstname: "Admin",
                    cus_lastname: "Customer",
                    cus_email: "admin@gmail.com",
                    cus_password: "admin@123",
                    cus_mobile:"9978789900",
                    cus_country:"India",
                    cus_city: "Ahmedabad",
                    cus_role: "Admin",
        }

        let cusSave = new customerModel(creatAdmin);

        return cusSave.save().then((result) =>{
            return result;
        })
    }
}

const getCustomer = async (req) => {
    try{
        if(req.params.id.length ==24 ){
            const getUser = await customerModel.findOne({_id:req.params.id})
            if(getUser && getUser.cus_email)
                { return getUser }
            else
               { return 1 }
        }else{
            return 2;
        }
        }catch(e){
        console.log(e)
    }    
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