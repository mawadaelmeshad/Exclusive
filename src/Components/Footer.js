import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Qr from '../images/Qrcode 1.png';
import GooglePlay from '../images/google-play.png';

function Footer() {
  return (
    <MDBFooter bgColor='black' className='text-center text-lg-start text-light mt-5'>
      <section className='d-flex justify-content-center justify-content-lg-between'>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>

                Exclusive
              </h6>
              <p>
                subscribe
              </p>
              <p>
              Get 10% off your first order
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                exclusive@gmail.com
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                +88015-88888-9999
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase  mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase mb-4'>Download App</h6>
              <img src={Qr} alt='Qr'className='mb-4' />
              {/* <span className='download'>
                <img src={GooglePlay} alt='google play'/>
              </span> */}
              <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
        </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 text-muted' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © Copyright:
        <a className='text-reset' href='https://mdbootstrap.com/'>
           Mawadah 2024 All rights reserved
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;