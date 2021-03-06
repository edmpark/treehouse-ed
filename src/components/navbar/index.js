import React from 'react'
import { Link } from '@reach/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'

function NavBar(){
    return(
      <Navbar bg="primary" variant="dark"> 
        <Navbar.Brand>
          <Link to="/">Treehouse</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
        <Link to="/login">
          <button type="button" className="btn btn-success">Log in</button>
        </Link>
      </Navbar>
    );
}


export default NavBar