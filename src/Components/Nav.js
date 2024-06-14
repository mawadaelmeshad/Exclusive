import React, { useEffect, useRef, useState } from 'react';
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
import { Link } from 'react-router-dom';


const Nav = ({ cartCount, wishlistCount }) => {
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


  
  
    const handleLogout = () => {
  
        localStorage.removeItem('token');
        // localStorage.setItem("cartCount", '0');
        // localStorage.setItemItem("wishlistCount", "0");
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
    const [activeItem, setActiveItem] = useState('');
    const handleItemClick = (itemName) => {
      setActiveItem(itemName);
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
            <MDBNavbarItem  className='mx-4'>
              <Link aria-current='page' to='/'  className={`item ${activeItem === 'home' ? 'active' : ''}`}
                onClick={() => handleItemClick('home')} >
                Home
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem className='mx-4'>
              <Link to='/contact' className={`item ${activeItem === 'contact' ? 'active' : ''}`}
                onClick={() => handleItemClick('contact')} >Contact</Link>
            </MDBNavbarItem>
            <MDBNavbarItem className='mx-4' >
              <Link to='/about'  className={`item ${activeItem === 'about' ? 'active' : ''}`}
                onClick={() => handleItemClick('about')}>About</Link>
            </MDBNavbarItem>

            <MDBNavbarItem className='mx-4'>
              <Link to='/signup'  className={`item ${activeItem === 'signup' ? 'active' : ''}`}
                onClick={() => handleItemClick('signup')} >Sign up</Link>
            </MDBNavbarItem >
            {/* {isLoggedIn ? (
        <>
      
        </>
      ) : (
        <>
        
       
        </>
      )} */}
            
            <form className='d-flex input-group w-auto form-search'>
              <input type='search' className='form-control' placeholder='What are you looking for?' aria-label='Search' id='search-input' />
              <MDBIcon fas icon="search" className='icon-search'/>
            </form>
            <MDBNavbarItem className='icons'>
                 <Link to='/wishlist' className='icon-link'><MDBIcon far icon="heart" className="heart-icon" current-count={wishlistCount}  /></Link>
                 <Link to='/cart' className='icon-link'> <MDBIcon fas icon="shopping-cart" className='heart-icon'  current-count={cartCount} /></Link>
                
                
                {isLoggedIn ? (
                  <div className='user-icon'>
        <MDBIcon far icon="user"
        className={`user-icon ${isActive ? 'active' : ''}`} 
        onClick={handleClick}/>
        <div className={`menu-user ${isActive ? 'active' : ''}`}>
          <div className='line'>
            <MDBIcon far icon="user" className='icon-line' />
            <Link to='/profile' className='link-list'><span >Manage Account</span></Link> 
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

  </>
);

}
export default Nav;