import React from 'react'
import { Link, NavLink } from "react-router-dom";

import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

const Header = () => {
  let userData = '';
React.useEffect(() => {
  userData = localStorage.getItem("userData");
})
  
  return (

    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
      
  <Navbar.Brand href="/home" >Product</Navbar.Brand>
  
  {true && //userData.roll === 'admin'
  <Navbar.Brand href="/" >Customer</Navbar.Brand>
}
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav className='m-auto'>
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        />
      
    </Form>
    </Nav>
    <Nav>
      <Nav.Link href="#action1">Home</Nav.Link>
      
    <NavDropdown title="List" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Product List</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Customer List</NavDropdown.Item>
        <NavDropdown.Divider />
        
      </NavDropdown>
     
    </Nav>
    
  </Navbar.Collapse>

      </Container>
  
</Navbar>
  )
}

export default Header
