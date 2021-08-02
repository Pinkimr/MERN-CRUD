import React, { useState } from 'react'
import "./SignUp.css";
import { Container, Row } from "react-bootstrap";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SignUp = () => {

  const [SignUpForm, setSignUpForm] = useState({ cusname: "", email: "", password: "" });
  const [isError, setError] = useState(false);
  const history = useHistory();

  const handleOnChange = (e) => {
    setError(false)
    setSignUpForm({
      ...SignUpForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSignUp = () => {
    if (SignUpForm.cusname && SignUpForm.email && SignUpForm.password) {
      axios.post('http://localhost:5000/api/customer/addCustomer', {
        "cus_firstname": SignUpForm.cusname,
        "cus_lastname": SignUpForm.cusname,
        "cus_email": SignUpForm.email,
        "cus_password": SignUpForm.password
      })
        .then((data) => {
          history.push('/home');
        });// set rresponse =>
    }
    else {
      setError(true)
    }
  }
  return (
    <div className="main">
      <Container>
        <Row>
          <div className = "form">
            <div className={isError ? "diverror" : "divhide"}>
              {"Please Enter Proper Credentials."}
            </div>
            <div className="container">

              <h1>Sign Up</h1>
            </div>

            <label htmlFor="email"><b>UserName</b></label>
            <input type="text" placeholder="Enter Yourname" name="cusname" onChange={e => handleOnChange(e)} />

            <label htmlFor="psw"><b>Email</b></label>
            <input type="email" placeholder="Enter Email" name="email" onChange={e => handleOnChange(e)} required />

            <label htmlFor="psw-repeat"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" onChange={e => handleOnChange(e)} required />

            <div className="clearfix">
              <button type="submit" className="signupbtn" onClick={e => handleSignUp()}> Sign Up </button>
            </div>

          </div>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp
