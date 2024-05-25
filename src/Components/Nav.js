import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import './css-components/nav.css';

function Nav() {
const [openNavColor, setOpenNavColor] = useState(false);

return (
  <>
    <MDBNavbar expand='lg' id='my-nav'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#' id='logo'>Exclusive</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarColor02'
          aria-controls='navbarColor02'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavColor(!openNavColor)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse open={openNavColor} navbar>
          <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
            <MDBNavbarItem className='active'>
              <MDBNavbarLink aria-current='page' href='#' id='home' className='item'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='item'>
              <MDBNavbarLink href='#' className='item'>Contact</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='item'>
              <MDBNavbarLink href='#'>About</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='item'>
              <MDBNavbarLink href='#'>Sign up</MDBNavbarLink>
            </MDBNavbarItem>
            <form className='d-flex input-group w-auto'>
              <input type='search' className='form-control' placeholder='What are you looking for?' aria-label='Search' id='search-input' />
              <MDBIcon fas icon="search" className='icon-search'/>
            </form>
            <MDBNavbarItem className='icons'>
                <MDBIcon far icon="heart" />
                <MDBIcon fas icon="shopping-cart" />
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

  </>
);
}
export default Nav;