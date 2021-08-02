import React, { useState } from 'react'
import { Button, Container, Row } from "react-bootstrap";
import "./Login.css";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [loginForm, setLoginForm] = useState({ userName: "", password: "" });
  const [isError, setError] = useState(false);
  const history = useHistory();

  const handleOnChange = (e) => {
    setError(false)
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = () => {
    if (loginForm.userName && loginForm.password) {
      axios.post('http://localhost:5000/api/customer/loginCustomer', {
        "cus_email": loginForm.userName,
        "cus_password": loginForm.password
      })
        .then((response) => {
          const isAdmin = loginForm.userName === "admin@gmail.com" ? true : false;
          localStorage.setItem("isAdmin", isAdmin);
          history.push('/product');
        })
    }
    else {
      setError(true)
    }
  }
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div className={isError ? "diverror" : "divhide"}>
              {"Please Enter Proper Credentials."}
            </div>
            <div className="container">

              <h1>Login</h1>
            </div>

            <div className="logindiv">
              <div className="usernamediv">
                <div className="credlabel"> UserName: </div>
                <div className="usernameinput">
                  <input type="text" value={loginForm.userName} name="userName" onChange={e => handleOnChange(e)} />
                </div>
              </div>
              <div className="pwddiv">
                <div className="credlabel"> Password:</div>
                <div className="usernameinput">
                  <input value={loginForm.password} type="password" name="password" onChange={e => handleOnChange(e)} /></div>
              </div>
              <div className="submitdiv">
                <Button type="submit" onClick={e => handleLogin()} >Login</Button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Login
