import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";


const EditList = () => {
  const [users, setUser] = useState([]);
  let history = useHistory();
  useEffect(() => {
    loadcus();
  });

  const loadcus = async () => {
    const result = await axios.get("http://localhost:5000/api/customer/listCustomer");
    if(result.data.data.customers) {
      setUser(result.data.data.customers);
    }
  };

  const deleteUser = async e => {
    if(e.target.id) {
      await axios.delete(`http://localhost:5000/api/customer/deleteCustomer/${e.target.id}`);
      loadcus();
    }
  };

  return (
    <>
    <div className="container">
      <div className="py-4">
        <h1>Customer List</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Customer Email</th>
              <th scope="col">Customer Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            users.length > 0 && users.map((ListCustomer, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{ListCustomer.cus_firstname}</td>
                <td>{ListCustomer.cus_lastname}</td>
                <td>{ListCustomer.cus_email}</td>
                <td>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    onClick={() => {
                      history.push("/customer/editcustomer");
                      localStorage.setItem("customerId", ListCustomer._id)
                    }}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    id={ListCustomer._id}
                    onClick={e => deleteUser(e)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default EditList;