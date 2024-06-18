import { MDBBtn, MDBCheckbox } from "mdb-react-ui-kit";
import './css-components/checkout.css';
import pay from '../images/payment.png';
function Checkout(){
    return(
        <div className="checkout-contain">
              <h2>billing details</h2>
               <div className="checkout">
          
            <div className="form-container">
                <form className='form'>
                    <label for=''>first name <span>*</span></label>
                    <input type='text'  required/>

                    <label for=''>company name</label>
                    <input type='text' />

                    <label for=''>street adress<span>*</span></label>
                    <input type='text' required />

                    <label for=''>Apartment, floor, etc. (optional)</label>
                    <input type='text' />

                    <label for=''>town/city <span>*</span></label>
                    <input type='text'required />

                    <label for=''>phone number <span>*</span></label>
                    <input type='phone' required />

                    <label for=''>email address <span>*</span></label>
                    <input type='email'  required/>
                    {/* <div className="contain-check">
                    <input type="checkbox"/> <span>Save this information for faster check-out next time</span>
                    </div> */}
                 
        {/* <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='save this info' className="check"/> */}
    


               
                
                    {/* <MDBBtn className='orange-btn'>Send message</MDBBtn> */}

                </form>

            </div>

            <div className="info">
                <div className="subtotal">
                    <span className="spanOne">subtotal</span>
                    <span>${`${localStorage.getItem("total")}`}</span>
                </div>
                <hr/>

                <div className="shipping">
                    <span className="spanOne">shipping</span>
                    <span>free</span>
                </div>
                <hr/>

                <div>
                    <span className="spanOne total ">total</span>
                    <span>${`${localStorage.getItem("total")}`}</span>
                </div>
              
                <div className="contain-btns">
                 <form>
                   
                    {/* <input type="radio" id="bank" name="bank" value="Bank" className="radio"/> */}

                    {/* <label for="html">Bank <img src={pay} alt="payment" className="payment"/> </label> */}
                    {/* <input type="radio" id="bank" name="bank" value="Bank"  className="radio" /> */}
                    {/* <label for="html">Cache on delivery </label> */}
                    <input type="text" placeholder="Coupon Code"/>
                    <button className='orange-btn'>Apply Coupon</button>
                 </form>
                

                </div>

            <button className='orange-btn'>Place order</button>
                

            </div>
          

        </div>

        </div>
     

    )

}
export default Checkout;