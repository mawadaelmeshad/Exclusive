import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import login from '../images/login.png';
import './css-components/login.css';
import { Link } from 'react-router-dom';
// import axios from "axios";
import { useState } from 'react';
import swal from 'sweetalert';
function Login(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e) => {
        e.preventDefault();
        
        fetch('https://dummyjson.com/auth/login', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: name,
                password: password,
                // expiresInMins: 30, // optional, defaults to 60
            })
        })
        .then(response => response.json()) // Convert the response to JSON
        .then(data => {
            if (data.token) { // Check if the token exists in the response data
                console.log(data);
                window.location.href = '/';
                localStorage.setItem('token', "122")
                // localStorage.setItem('token', data.token)
            } else {
                swal("Sorry, email or password is incorrect!");
            }
        })
        .catch(() => swal("Sorry, email or password is incorrect!"));
    }
    
    return(
        <div className="login">
            <div className='contain-login'>
               <div className='contain-img'>
                      <img src={login} alt="login photo" />
               </div>
                <div className='contain-form'>
                    <h2>Log in to Exclusive</h2>
                    <p>Enter your details below</p>
                    <form className='form' onSubmit={submit}>
                        <input type='text' placeholder='Username' onChange={(e)=>setName(e.target.value)}/>
                        <input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
                        <MDBBtn className='orange-btn' type='submit'>Log In</MDBBtn>
                        <p style={{color:"#DB4444"}} className='forgot'>Forget Password?</p>

                    </form>
                </div>

            </div>
        </div>

    )
}
export default Login;