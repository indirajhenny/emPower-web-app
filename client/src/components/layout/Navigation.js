import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import AuthContext from '../context/AuthContext';

//import './Navigation.css';

const Navigation = () => {

    // get logged in state value as boolean T/F
    const {loggedIn} = useContext(AuthContext);
    console.log(loggedIn);
    // with loggedIn we can now use conditional rendering

    return (

       <div className = "Navigation">


         <Navbar bg="dark" variant="dark" expand="lg">
         <Navbar.Brand href="/">emPower Through Play</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="mr-auto">
            <Nav.Link href="/Games">Games</Nav.Link>
            <Nav.Link href="/Resources">Resources</Nav.Link>
            <Nav.Link href="/Forum">Forum</Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
               {loggedIn === false && (
                 <>
                   <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
                   <NavDropdown.Item href="/Register">Register</NavDropdown.Item>
                 </>
               )}
               {loggedIn === true && (
                 <>
                   <NavDropdown.Item href="/Profile">Profile</NavDropdown.Item>
                 </>
               )}
            </NavDropdown>
         </Nav>
         <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info"> Search </Button>
         </Form>
         </Navbar.Collapse>
         </Navbar>

         </div>
    );
}

export default Navigation;
