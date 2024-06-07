import React, { useEffect, useState } from 'react';
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
import Flash from './Flash';
import Home from './Home';


const Nav = () => {
    const [openNavColor, setOpenNavColor] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const checkLoginStatus = () => {
      // Check if user is logged in based on the presence of token in local storage
      if (window.localStorage.getItem('token')) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    const [currentCount, setCurrentCount] = useState(0);
    const [CountCart, setCountCart] = useState(0);



    const handleLogout = () => {
  
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        window.location.href = '/login';
      };
      
    

    useEffect(() => {
      checkLoginStatus();
    }, [isLoggedIn]);

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(!isActive);
    };

return (
  <>
    <MDBNavbar expand='xl' id='my-nav'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#' id='logo'>Exclusive</MDBNavbarBrand>
        <MDBNavbarToggler
        className="navbar-toggler"
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
              <MDBNavbarLink aria-current='page' href='./' className='item'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='active'>
              <MDBNavbarLink href='./contact' className='item'>Contact</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='item'>
              <MDBNavbarLink href='./about'>About</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='item'>
              <MDBNavbarLink href='./signup'>Sign up</MDBNavbarLink>
            </MDBNavbarItem>
            <form className='d-flex input-group w-auto form-search'>
              <input type='search' className='form-control' placeholder='What are you looking for?' aria-label='Search' id='search-input' />
              <MDBIcon fas icon="search" className='icon-search'/>
            </form>
            <MDBNavbarItem className='icons'>
                <MDBIcon far icon="heart" className='heart-icon'  current-count={currentCount} setCurrentCount={setCurrentCount} currentCount={currentCount} />
                <MDBIcon fas icon="shopping-cart" className='heart-icon'  current-count={CountCart} setCountCart={setCountCart} CountCart={CountCart}  />
                
                {isLoggedIn ? (
                  <div className='user-icon'>
        <MDBIcon far icon="user"
        className={`user-icon ${isActive ? 'active' : ''}`} 
        onClick={handleClick}/>
        <div className={`menu-user ${isActive ? 'active' : ''}`}>
          <div className='line'>
            <MDBIcon far icon="user" className='icon-line' />
            <span>Manage Account</span>
          </div>

          <div className='line'>
          <MDBIcon fas icon="shopping-bag" className='icon-line' />
            <span>My Order</span>
          </div>

          <div className='line'>
          <MDBIcon far icon="times-circle" className='icon-line'/>
            <span>My Cancellations</span>
          </div>

          <div className='line'>
          <MDBIcon far icon="star"  className='icon-line' />
            <span>My Reviews</span>
          </div>

          <div className='line'>
          <MDBIcon fas icon="sign-out-alt" className='icon-line' />
            <span onClick={handleLogout}>Logout</span>
          </div>

        </div>
        </div>
      ) : null }
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    <Home />
    <Flash setCurrentCount={setCurrentCount} currentCount={currentCount} setCountCart={setCountCart} CountCart={CountCart} />

  </>
);
}
export default Nav;