import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Dhisa</h1>
          <i className='fab fa-typo3'/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/dashboard' activeStyle>
            Dashboard
          </NavLink>
          <NavLink to='/barang' activeStyle>
            Barang
          </NavLink>
          <NavLink to='/pelelang' activeStyle>
            Pelelang
          </NavLink>
          <NavLink to='/data-lelang' activeStyle>
            Data Lelang
          </NavLink>
          <NavLink to='/lapor' activeStyle>
            Lapor
          </NavLink>
          <NavLink to='/cetak' activeStyle>
            Cetak
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/logout'>LogOut</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
