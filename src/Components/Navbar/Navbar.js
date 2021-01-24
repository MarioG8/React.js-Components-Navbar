import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Portico</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/stoicism' activeStyle>
            Stoicism
          </NavLink>
          <NavLink to='/figures' activeStyle>
            Figures
          </NavLink>
          <NavLink to='/more' activeStyle>
            More
          </NavLink>
          <NavLink to='/join-us' activeStyle>
            Join-Us
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
