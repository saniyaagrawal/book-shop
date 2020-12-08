import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from "reactstrap";
import "./Navbarr.css";
import { Link } from "react-router-dom";

const Navbarr = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Book Shop</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto my_nav" navbar>
            <NavItem>
              <Link to="/" style={{textDecoration:'none'}}><h4 className='nav'>All Books</h4></Link>
            </NavItem>
            <NavItem>
              <Link to="/add" style={{textDecoration:'none'}}><h4 className='nav'>Add book</h4></Link>
            </NavItem>
            <NavItem>
              <Link to="/bill" style={{textDecoration:'none'}}><h4 className='nav'>Bill</h4></Link>
            </NavItem>
            <NavItem>
              <Link to="/login" style={{textDecoration:'none'}}><h4 className='nav'>Login</h4></Link>
            </NavItem>
          </Nav>
          {/* {!isOpen && <NavbarText style={{paddingRight:10}}>{user?.displayName}</NavbarText>}
          {!isOpen && <Avatar src={user?.photoURL} />} */}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navbarr;
