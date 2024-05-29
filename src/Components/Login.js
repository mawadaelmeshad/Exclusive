import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import login from '../images/login.png';
import './css-components/login.css';
import { Link } from 'react-router-dom';
function Login(){
    return(
        <div className="login">
            <div className='contain-login'>
               <div className='contain-img'>
                      <img src={login} alt="login photo" />
               </div>
                <div className='contain-form'>
                    <h2>Log in to Exclusive</h2>
                    <p>Enter your details below</p>
                    <form className='form'>
                        <input type='email' placeholder='Email'/>
                        <input type='password' placeholder='password'/>
                        <MDBBtn className='orange-btn'>Log In</MDBBtn>
                        <p style={{color:"#DB4444"}} className='forgot'>Forget Password?</p>

                    </form>
                </div>

            </div>
        </div>

    )
}
export default Login;