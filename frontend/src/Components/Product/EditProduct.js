import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";


const EditProduct = () => {
  let history = useHistory();
  const [productForm, setproductForm] = useState({});
  const [isError, setError] = useState(false);
  const handleOnChange = (e) => {
    setError(false)
    setproductForm({
      ...productForm,
      [e.target.name]: e.target.value
    })
  }

 useEffect(() => {
     loadUser();
    }, []);

  const handleLogin = () => {
     if (productForm.pro_name && productForm.pro_price && productForm.pro_type) {
      const data = {
        "pro_name": productForm.pro_name,
        "pro_price": productForm.pro_price,
        "pro_type": productForm.pro_type
      }
      const id = localStorage.getItem("productId")
      const url =  "http://localhost:5000/api/product/updateProduct/" + id;
      axios.put(url, data)
      .then(response => {
        history.push("/product")
      }).catch(error => {
        console.error('Something went wrong!', error);
      });
     }
     else {
        setError(true)
      }
  }

  const loadUser = async () => {
    const id = localStorage.getItem("productId")
    const result = await axios.get(`http://localhost:5000/api/product/getProduct/${id}`);
    setproductForm(result.data.data);
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Product</h2>
        <div className={isError ? "diverror" : "divhide"}>
        {"Please Enter Proper Credentials."}
      </div>
          <div className="form-group">
            
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter ProductName"
              name="pro_name"
              value={productForm.pro_name}
              onChange={e => handleOnChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter ProductPrice"
              name="pro_price"
              value={productForm.pro_price}
              onChange={e => handleOnChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter ProductType"
              name="pro_type"
              value={productForm.pro_type}
              onChange={e => handleOnChange(e)}
            />
          </div>

          <button className="btn btn-warning btn-block" onClick={e => handleLogin()} >Update Product</button>
      </div>
    </div>
  );
};

export default EditProduct;