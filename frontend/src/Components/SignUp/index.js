import React, { useState } from 'react'
import "./SignUp.css";
import { Container, Row } from "react-bootstrap";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {

  const [SignUpForm, setSignUpForm] = useState({ cusname: "", email: "", password: "", image: ""});
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
        "cus_password": SignUpForm.password,
        "image":SignUpForm.image
      })
        .then((data) => {
          history.push('/home');
        });// set rresponse =>
    }
    else {
      setError(true)
    }
  }

  const initialValues = {
    cusname : '',
    email : '',
    password : ''
  }


  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
   email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    })

    

  return (
    <Formik 
      onSubmit={(values, { setSubmitting }) => {
      console.log("inn");
      console.log(values);
        setSubmitting(false);
      }}>
    
        <Form>
       <div className="main">
        <Container>
         <Row>
          <div className = "form" enctype = "multipart/form-data">
            <div className={isError ? "diverror" : "divhide"}>
              {/* {"Please Enter Proper Credentials."} */}
            </div>
            <div className="container">

              <h1>Sign Up</h1>
            </div>

            <label htmlFor="email"><b>UserName</b></label>
            <input type="text" placeholder="Enter Yourname"  name="cusname" onChange={e => handleOnChange(e)} />
            <ErrorMessage name="cusname" />
            

            <label htmlFor="psw"><b>Email</b></label>
            <input type="email" placeholder="Enter Email"  name="email" onChange={e => handleOnChange(e)}  />
            <ErrorMessage name="email" />

            <label htmlFor="psw-repeat"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" onChange={e => handleOnChange(e)}  />
            <ErrorMessage name="password" />

            <label htmlFor="psw-repeat"><b>Image</b></label>
            <input type="file"  name="image" onChange={e => handleOnChange(e)}  />
            <ErrorMessage name="password" />

            <div className="clearfix">
              <button type="submit" className="signupbtn" onClick={e => handleSignUp() }> Sign Up </button>
            </div>

          </div>
        </Row>
      </Container>
    </div>
    </Form>
    </Formik>
  );
}

export default SignUp
