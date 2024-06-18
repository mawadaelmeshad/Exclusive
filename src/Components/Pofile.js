import { MDBBtn, MDBCard, MDBIcon } from "mdb-react-ui-kit";
import './css-components/profile.css';
import { Link } from "react-router-dom";


function Profile(){
    return(
        <div className="profile-container">
            <div className="top">
                <span className="p1"><span className="home-word">Home / </span> My Account</span>
                <span className="p2">Welcome! <span className="username">{`${localStorage.getItem("username")}`}</span></span>
                
            </div>
            <div className="profile">
            <div className="side-list">
                <div className="list">
                    <h3 className="title-list">Manage My Account</h3>
                    <p>My Profile</p>
                    <p>Address Book</p>
                    <p>My Payment Options</p>

                    <h3 className="title-list">My Orders</h3>
                    <p>My Returns</p>
                    <p>My Cancellations</p>

                    <Link to='/wishlist'><h3 className="title-list">My WishList</h3></Link>
        
                </div>

            </div>
            <MDBCard className="form-profile">
                
                <h3 className="title-form">Edit Your Profile</h3>

            <form> 
                        <div className="form-group">
                            <label for="first" className="label">First Name</label>
                            <input type='text' id="first"  required/>
                        </div>
                        <div className="form-group">
                            <label for="last" className="label">Last Name</label>
                            <input type='text' id="last"  required/>
                        </div>

                        <div className="form-group">
                            <label for="email" className="label">Email</label>
                            <input type='email' id="email"  required/>
                        </div>

                        
                        <div className="form-group">
                            <label for="ad" className="label">Address</label>
                            <input type='text' id="ad"  required/>
                        </div>
                      
                      
                    
                
                      
                        <div className="pass-group">
                              
                        <label for="pass" className="label">Password Changes</label>
                        <input type='password' id="pass"  required className="pass-field"  placeholder="Current Passwod"/>
                        <input type='password' id="pass"  required className="pass-field" placeholder="New Passwod"/>
                        <input type='password' id="pass"  required className="pass-field" placeholder="Confirm New Passwod"/>
                
                        </div>
                        <div className="contain-btns">
                      <Link to='' className="cancel">Cancel</Link>
                      <MDBBtn className='orange-btn'>Save changes</MDBBtn>
                      </div>
                     

                    </form>
                        {/* <h2 className="title-form">Edit Your Profile</h2>
                        <label for="name" >First Name</label><br/>
                        <input type='text'id="name"  required/>
                        <label for="lastname" >First Name</label>
                        <input type='text' id="lastname" required/> */}

                        {/* <label>Email</label>
                        <input type='email' placeholder='Your Email'  required/>
                        <label>Last Name</label>
                        <input type='text'  required/>
                        <input type='password' placeholder='Your Phone' required/>
                     */}
                    

                
                    </MDBCard>
            {/* </div> */}

        </div>
        </div>

       

    )

}
export default Profile;