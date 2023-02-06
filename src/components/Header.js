import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Header(props) {
  
  
  return (
    <div>
       <Navbar bg={props.mode} expand="lg" variant={props.mode} sticky = 'top' fixed = "top" >
       <Container fluid>
        <Navbar.Brand href="#" >{props.title}</Navbar.Brand>
        <Navbar.Toggle  aria-controls="navbarScroll"  />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll  
          >
            <Link to="/" >Home</Link>
      
            <Link to="/Login" >Login</Link>
            <Link to="/Register" >Register</Link>
            
          </Nav>
          <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-1"
              aria-label="Search"
            />
            <Button variant="outline-success" >Search</Button> */}
            <Form.Check  type="switch"  onClick={props.toggleMode} id="custom-switch"/>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </div>
  )
}

