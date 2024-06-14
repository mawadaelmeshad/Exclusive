import { MDBBtn, MDBCard, MDBIcon } from "mdb-react-ui-kit";
import './css-components/contact.css';


function Contact(){
    return(
        <div className="contact-container">
            <div className="top">
                <span className="p1"><span className="home-word">Home / </span> Contact</span>
                
            </div>
            <div className="contact">
            <div className="call">
                <MDBCard className="contact-card">
                    <div className="title-holder">
                        <MDBIcon fas icon="phone-alt" className="icon-orange" />
                        <span className="title-contact">call to us</span>
                    </div>
                    <p>We are available 24/7, 7 days a week.</p>
                    <p>Phone: +8801611112222</p>
                    <hr/>
                    <div className="title-holder">
                        <MDBIcon far icon="envelope" className="icon-orange" />
                        <span className="title-contact">write to us</span>
                    </div>
                    <p>Fill out our form and we will contact you within 24 hours.</p>
                    <p>Emails: customer@exclusive.com</p>
                    <p>Emails: support@exclusive.com</p>

                </MDBCard>

            </div>
            {/* <div className="form-contact"> */}
            <MDBCard className="form-contact">
            <form className='form'>
                        <input type='text' placeholder='Your Name'  required/>
                        <input type='email' placeholder='Your Email'  required/>
                        <input type='password' placeholder='Your Phone' required/>
                        <textarea cols={70} rows={7} placeholder="Your Message"></textarea>
                        <MDBBtn className='orange-btn'>Send message</MDBBtn>

                    </form>
                    </MDBCard>
            {/* </div> */}

        </div>
        </div>
     

    )

}
export default Contact;