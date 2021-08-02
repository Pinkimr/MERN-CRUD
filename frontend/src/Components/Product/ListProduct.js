import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Navbar } from "react-bootstrap";

const ListProduct = () => {
  const [user, setUser] = useState({
    Proname: "", Proprice: "", Protype: ""
  
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:5000/api/product/getProduct/${id}`);
    setUser(res.data);
  };
  return (
    <>
    <Navbar />
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Product Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.Proname}</li>
        <li className="list-group-item">price: {user.Proprice}</li>
        <li className="list-group-item">type: {user.Protype}</li>
       
      </ul>
    </div>
    </>
  );
};

export default ListProduct;