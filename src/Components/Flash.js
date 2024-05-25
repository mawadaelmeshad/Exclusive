import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBIcon } from 'mdb-react-ui-kit';
import flash1 from '../images/flash1.png';
import Home2 from '../images/home2.png';
import flash2 from '../images/flash2.png';
import flash3 from '../images/flash3.png';
import './css-components/flash.css'
import Home from './Home';
function Flash(){
    return(
        <div className='flash-main'>
            <div className='flash'>
                <p className='small-title'>Today's</p>
            <h2 className='title'>Flash Sales</h2>
            <div className='cards'>
                <div className='card-container'>
                <MDBCard className='custom-card'>
                        <MDBCardImage src={flash1} alt='flash photo' className='card-img' />
                        <div className='icons'>
                        <span><MDBIcon far icon="heart" className='icon' /></span>
                        <span><MDBIcon far icon="eye" className='icon' /></span>
                        </div>
                        <span className='percentage'>-40%</span>
                    </MDBCard>
                    <h3 className='flash-title'>HAVIT HV-G92 Gamepad</h3>
                        <span className='price'>120$</span> <del>160$</del>
                        <div className='stars'>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>

                        </div>
                </div> 

                <div className='card-container'>
                <MDBCard className='custom-card'>
                        <MDBCardImage src={flash1} alt='flash photo' className='card-img' />
                        <div className='icons'>
                        <span><MDBIcon far icon="heart" className='icon' /></span>
                        <span><MDBIcon far icon="eye" className='icon' /></span>
                        </div>
                        <span className='percentage'>-40%</span>
                    </MDBCard>
                    <h3 className='flash-title'>HAVIT HV-G92 Gamepad</h3>
                        <span className='price'>120$</span> <del>160$</del>
                        <div className='stars'>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>

                        </div>
                </div> 

                <div className='card-container'>
                <MDBCard className='custom-card'>
                        <MDBCardImage src={flash1} alt='flash photo' className='card-img' />
                        <div className='icons'>
                        <span><MDBIcon far icon="heart" className='icon' /></span>
                        <span><MDBIcon far icon="eye" className='icon' /></span>
                        </div>
                        <span className='percentage'>-40%</span>
                    </MDBCard>
                    <h3 className='flash-title'>HAVIT HV-G92 Gamepad</h3>
                        <span className='price'>120$</span> <del>160$</del>
                        <div className='stars'>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>

                        </div>
                </div> 

                <div className='card-container'>
                <MDBCard className='custom-card'>
                        <MDBCardImage src={flash1} alt='flash photo' className='card-img' />
                        <div className='icons'>
                        <span><MDBIcon far icon="heart" className='icon' /></span>
                        <span><MDBIcon far icon="eye" className='icon' /></span>
                        </div>
                        <span className='percentage'>-40%</span>
                    </MDBCard>
                    <h3 className='flash-title'>HAVIT HV-G92 Gamepad</h3>
                        <span className='price'>120$</span> <del>160$</del>
                        <div className='stars'>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>

                        </div>
                </div> 
            </div>
            </div>
            <MDBBtn className='orange-btn'>view all Products</MDBBtn>
            <hr className='custom-hr'/>

            <div className='flash'>
                <p className='small-title'>Categories</p>
            <h2 className='title'>browse by category</h2>
            <div className='cards'>
                <div className='card-container'>
                    <div className='custom-card-icon'>
                    <MDBIcon fas icon="mobile-alt" className='icon-category' />
                    <p>phones</p>
                    </div>
                </div> 

                <div className='card-container'>
                    <div className='custom-card-icon'>
                    <MDBIcon fas icon="mobile-alt" className='icon-category' />
                    <p>phones</p>
                    </div>
                </div> 

                <div className='card-container'>
                    <div className='custom-card-icon'>
                    <MDBIcon fas icon="mobile-alt" className='icon-category' />
                    <p>phones</p>
                    </div>
                </div> 


                <div className='card-container'>
                    <div className='custom-card-icon'>
                    <MDBIcon fas icon="mobile-alt" className='icon-category' />
                    <p>phones</p>
                    </div>
                </div> 

                <div className='card-container'>
                    <div className='custom-card-icon'>
                    <MDBIcon fas icon="mobile-alt" className='icon-category' />
                    <p>phones</p>
                    </div>
                </div> 

            </div>
            </div>
            <hr className='custom-hr'/>
            <div className='flash'>
                <p className='small-title'>this month</p>
            <h2 className='title'>best selling Products</h2>
            <div className='cards'>
                <div className='card-container'>
                <MDBCard className='custom-card'>
                        <MDBCardImage src={flash1} alt='flash photo' className='card-img' />
                        <div className='icons'>
                        <span><MDBIcon far icon="heart" className='icon' /></span>
                        <span><MDBIcon far icon="eye" className='icon' /></span>
                        </div>
                        <span className='percentage'>-40%</span>
                    </MDBCard>
                    <h3 className='flash-title'>HAVIT HV-G92 Gamepad</h3>
                        <span className='price'>120$</span> <del>160$</del>
                        <div className='stars'>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>

                        </div>
                </div> 

                <div className='card-container'>
                <MDBCard className='custom-card'>
                        <MDBCardImage src={flash1} alt='flash photo' className='card-img' />
                        <div className='icons'>
                        <span><MDBIcon far icon="heart" className='icon' /></span>
                        <span><MDBIcon far icon="eye" className='icon' /></span>
                        </div>
                        <span className='percentage'>-40%</span>
                    </MDBCard>
                    <h3 className='flash-title'>HAVIT HV-G92 Gamepad</h3>
                        <span className='price'>120$</span> <del>160$</del>
                        <div className='stars'>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>

                        </div>
                </div> 

                <div className='card-container'>
                <MDBCard className='custom-card'>
                        <MDBCardImage src={flash1} alt='flash photo' className='card-img' />
                        <div className='icons'>
                        <span><MDBIcon far icon="heart" className='icon' /></span>
                        <span><MDBIcon far icon="eye" className='icon' /></span>
                        </div>
                        <span className='percentage'>-40%</span>
                    </MDBCard>
                    <h3 className='flash-title'>HAVIT HV-G92 Gamepad</h3>
                        <span className='price'>120$</span> <del>160$</del>
                        <div className='stars'>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>

                        </div>
                </div> 

                <div className='card-container'>
                <MDBCard className='custom-card'>
                        <MDBCardImage src={flash1} alt='flash photo' className='card-img' />
                        <div className='icons'>
                        <span><MDBIcon far icon="heart" className='icon' /></span>
                        <span><MDBIcon far icon="eye" className='icon' /></span>
                        </div>
                        <span className='percentage'>-40%</span>
                    </MDBCard>
                    <h3 className='flash-title'>HAVIT HV-G92 Gamepad</h3>
                        <span className='price'>120$</span> <del>160$</del>
                        <div className='stars'>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>

                        </div>
                </div> 
            </div>
            </div>

            <div className='img'>
                <img src={Home2} alt='categories photo' />
            </div>

            <div className='flash'>
                <p className='small-title'>this month</p>
            <h2 className='title'>best selling Products</h2>
            <div className='cards'>
                <div className='card-container'>
                <MDBCard className='custom-card'>
                        <MDBCardImage src={flash1} alt='flash photo' className='card-img' />
                        <div className='icons'>
                        <span><MDBIcon far icon="heart" className='icon' /></span>
                        <span><MDBIcon far icon="eye" className='icon' /></span>
                        </div>
                        <span className='percentage'>-40%</span>
                    </MDBCard>
                    <h3 className='flash-title'>HAVIT HV-G92 Gamepad</h3>
                        <span className='price'>120$</span> <del>160$</del>
                        <div className='stars'>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>

                        </div>
                </div> 

                <div className='card-container'>
                <MDBCard className='custom-card'>
                        <MDBCardImage src={flash1} alt='flash photo' className='card-img' />
                        <div className='icons'>
                        <span><MDBIcon far icon="heart" className='icon' /></span>
                        <span><MDBIcon far icon="eye" className='icon' /></span>
                        </div>
                        <span className='percentage'>-40%</span>
                    </MDBCard>
                    <h3 className='flash-title'>HAVIT HV-G92 Gamepad</h3>
                        <span className='price'>120$</span> <del>160$</del>
                        <div className='stars'>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>

                        </div>
                </div> 

                <div className='card-container'>
                <MDBCard className='custom-card'>
                        <MDBCardImage src={flash1} alt='flash photo' className='card-img' />
                        <div className='icons'>
                        <span><MDBIcon far icon="heart" className='icon' /></span>
                        <span><MDBIcon far icon="eye" className='icon' /></span>
                        </div>
                        <span className='percentage'>-40%</span>
                    </MDBCard>
                    <h3 className='flash-title'>HAVIT HV-G92 Gamepad</h3>
                        <span className='price'>120$</span> <del>160$</del>
                        <div className='stars'>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>

                        </div>
                </div> 

                <div className='card-container'>
                <MDBCard className='custom-card'>
                        <MDBCardImage src={flash1} alt='flash photo' className='card-img' />
                        <div className='icons'>
                        <span><MDBIcon far icon="heart" className='icon' /></span>
                        <span><MDBIcon far icon="eye" className='icon' /></span>
                        </div>
                        <span className='percentage'>-40%</span>
                    </MDBCard>
                    <h3 className='flash-title'>HAVIT HV-G92 Gamepad</h3>
                        <span className='price'>120$</span> <del>160$</del>
                        <div className='stars'>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>

                        </div>
                </div> 
            </div>
            </div>


    </div>
    )
}
export default Flash;