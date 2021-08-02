import React, { useState } from "react";
import axios from 'axios'
import { useHistory, Link} from "react-router-dom";


const AddProduct = () => {
    let history = useHistory();
    const [productForm, setproductForm] = useState({ Proname: "", Proprice: "", Protype: "" });
    const [isError, setError] = useState(false);
    const handleOnChange = (e) => {
      setError(false)
      setproductForm({
        ...productForm,
        [e.target.name]: e.target.value
      })
    }
  
    const handleLogin = () => {
      if (productForm.Proname && productForm.Proprice && productForm.Protype)  {
        //api login
        axios.post('http://localhost:5000/api/product/addProduct',{
  
          "pro_name": productForm.Proname,
          "pro_price": productForm.Proprice,
          "pro_type": productForm.Protype
   
        })
          .then((response) => { 
            history.push("/product");
          });// set rresponse =>
      }
      else {
        setError(true)
      }
    }
  return (
    <div className="container">
       <div className={isError ? "diverror" : "divhide"}>
        {"Please Enter Proper Credentials."}
      </div>
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Product</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter ProductName"
              name="Proname"
              value={productForm.pro_name}
              onChange={e => handleOnChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter ProductPrice"
              name="Proprice"
              value={productForm.Proprice}
              onChange={e => handleOnChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter ProductType"
              name="Protype"
              value={productForm.Protype}
              onChange={e => handleOnChange(e)}
            />
          </div>
          
         <button className="btn btn-primary btn-block" onClick={e => handleLogin()} >Add Product</button>
      </div>
    </div>
  );
};

export default AddProduct;