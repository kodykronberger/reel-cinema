import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import './Navbar.scss';
import Logo from 'assets/img/Logo.png';

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="reel-nav">
      <Navbar color="light" light expand="md" className="p-0">
        <NavbarBrand href="/">
          <img src={Logo} />
        </NavbarBrand>
        <NavbarText>Reel Cinema</NavbarText>
      </Navbar>
    </div>
  );
};

export default Example;
