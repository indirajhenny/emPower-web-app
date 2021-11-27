import React, { useContext } from 'react';
import { useHistory} from 'react-router-dom';

import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import AuthContext from '../context/AuthContext';
import axios from 'axios';

//import './Navigation.css';

const Navigation = () => {

    // get logged in state value as boolean T/F
    const {loggedIn} = useContext(AuthContext);
    console.log(loggedIn);
    // with loggedIn we can now use conditional rendering

    // send cookie back to server to detect new updated state
    const {getLoggedIn} = useContext(AuthContext);

    // gives array with all the paths we have visited in the past
    const history = useHistory();

    async function logOut() {
      // run request to delete the cookie
      await axios.get("http://localhost:8080/auth/logout");
      await getLoggedIn();
      history.push("/");
    }

    return (

       <div className = "Navigation">


         <Navbar fixed="bottom" bg="dark" variant="dark" expand="lg">
         <Navbar.Brand href="/"><b>Play Analilia</b></Navbar.Brand>
         <Navbar.Toggle/>
         <Navbar.Collapse style={{float: "right"}} className="justify-content-end">
         <Nav className="mr-auto">
            <Nav.Link href="/Games">More Games</Nav.Link>
            <Nav.Link href="/About">About Us</Nav.Link>
            {/*<Nav.Link href="/Resources">Resources</Nav.Link>*/}
            {/*<Nav.Link href="/Forum">Forum</Nav.Link>*/}
            <NavDropdown drop='up' title="Account" id="basic-nav-dropdown">
               {loggedIn === false && (
                 <>
                   <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
                   <NavDropdown.Item href="/Register">Register</NavDropdown.Item>
                 </>
               )}
               {loggedIn === true && (
                 <>
                   <NavDropdown.Item onClick={logOut}> Logout</NavDropdown.Item>
                 </>
               )}
            </NavDropdown>
         </Nav>
         {/*<Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info"> Search </Button>
         </Form>*/}
         </Navbar.Collapse>
         </Navbar>

         </div>
    );
}

export default Navigation;
