import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const EditCustomer = () => {
  let history = useHistory();
  const [customerForm, setcustomerForm] = useState({});
  const [isError, setError] = useState(false);
  const handleOnChange = (e) => {
    setError(false)
    setcustomerForm({
      ...customerForm,
      [e.target.name]: e.target.value
    })
  }

 useEffect(() => {
     loadUser();
    }, []);

  const handleLogin = () => {
     if (customerForm.cus_firstname && customerForm.cus_lastname && customerForm.cus_email && customerForm.cus_password) {
      const data = {
        "cus_firstname": customerForm.cus_firstname,
        "cus_lastname": customerForm.cus_lastname,
        "cus_email": customerForm.cus_email,
        "cus_password": customerForm.cus_password
      }
      const id = localStorage.getItem("customerId")
      const url =  "http://localhost:5000/api/customer/updateCustomer/" + id;
      axios.put(url, data)
      .then(response => {
        history.push("/customer")
      }).catch(error => {
        console.error('Something went wrong!', error);
      });
     }
     else {
        setError(true)
      }
  }

  const loadUser = async () => {
    const id = localStorage.getItem("customerId")
    const result = await axios.get(`http://localhost:5000/api/customer/getCustomer/${id}`);
  debugger;
    setcustomerForm(result.data.data);
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Customer</h2>
        <div className={isError ? "diverror" : "divhide"}>
        {"Please Enter Proper Credentials."}
      </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter CustomerName"
              name="cus_firstname"
              value={customerForm.cus_firstname}
              onChange={e => handleOnChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter CustomerName"
              name="cus_lastname"
              value={customerForm.cus_lastname}
              onChange={e => handleOnChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter CustomerEmail"
              name="cus_email"
              value={customerForm.cus_email}
              onChange={e => handleOnChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter CustomerPassword"
              name="cus_password"
              value={customerForm.pro_type}
              onChange={e => handleOnChange(e)}
            />
          </div>

          <button className="btn btn-warning btn-block" onClick={e => handleLogin()} >Update Product</button>
      </div>
    </div>
  );
};

export default EditCustomer;