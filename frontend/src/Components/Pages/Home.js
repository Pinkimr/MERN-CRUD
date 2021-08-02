import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../Product/Navbar";

const Home = () => {
  const [users, setUser] = useState([]);
  let history = useHistory();
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/api/product/listProduct");
    if(result.data.data.products) {
      setUser(result.data.data.products);
    }
  };

  const deleteUser = async e => {
    if(e.target.id) {
      await axios.delete(`http://localhost:5000/api/product/deleteProduct/${e.target.id}`);
      loadUsers();
    }
  };

  return (
    <>
    <div className="container">
      <div className="py-4">
        <h1>Product List</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Price</th>
              <th scope="col">Product Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            users.length > 0 && users.map((ListProduct, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{ListProduct.pro_name}</td>
                <td>{ListProduct.pro_price}</td>
                <td>{ListProduct.pro_type}</td>
                <td>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    onClick={() => {
                      history.push("/product/editproduct");
                      localStorage.setItem("productId", ListProduct._id)
                    }}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    id={ListProduct._id}
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

export default Home;