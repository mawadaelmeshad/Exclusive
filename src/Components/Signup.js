import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import login from '../images/login.png';
import './css-components/login.css';
import { Link } from 'react-router-dom';
function SignUp(){
    return(
        <div className="login">
            <div className='contain-login'>
               <div className='contain-img'>
                      <img src={login} alt="login photo" />
               </div>
                <div className='contain-form'>
                    <h2>Create an account</h2>
                    <p>Enter your details below</p>
                    <form className='form'>
                        <input type='text' placeholder='Name'/>
                        <input type='email' placeholder='Email'/>
                        <input type='password' placeholder='password'/>
                        <MDBBtn className='orange-btn'>create account</MDBBtn>
                        <MDBBtn className='white-btn'><MDBIcon fab icon="google"className='google-icon' />sign up with google</MDBBtn>
                        <p>Already have an account? <Link to='/login' style={{textDecoration:"underline;"}}>Login</Link></p>

                    </form>
                </div>

            </div>
        </div>

    )
}
export default SignUp;