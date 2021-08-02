import React, { useState } from 'react'
import { Button, Container, Row } from "react-bootstrap";
import "./LandingStyles.css";
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push("/login");
  }

  const handleSignUpClick = () => {
    history.push("/signup");
  }

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Product Site</h1>
            </div>
            <div className="buttonContainer">
              <Button size="lg" text="Login" onClick={handleLoginClick}
                className="landingbutton">
                Login
              </Button>
              <Button size="lg" text="Signup" className="landingbutton"
                onClick={handleSignUpClick}
              >
                Signup
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
