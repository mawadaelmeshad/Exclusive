import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import './css-components/cart.css';
function Cart(){
    return(
        <div className="cart">
            <div className="table-container">
                <MDBTable hover  borderless cellPadding={5} className="table">
                <MDBTableHead>
                    <tr className="tr">
                    <th scope='col'>Product</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Quantity</th>
                    <th scope='col'>Subtotal</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr className="tr" >
                    <th scope='row'>1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope='row'>2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope='row'>3</th>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </MDBTableBody>
                </MDBTable>
                <div className="btn-container">
                <button className='transparent-btn'>Return To Shop</button>
                <button className='transparent-btn'>Update Cart</button>

                </div>

              <div className="contain-bottom">
              <div className="contain-btns">
                 <form>
                    <input type="text" placeholder="Coupon Code"/>
                    <button className='orange-btn'>Apply Coupon</button>
                 </form>
                

                </div>
                <div className="info">
                    <h5 className="cart-total">Cart Total</h5>
                <div className="subtotal">
                    <span className="spanOne">subtotal</span>
                    <span>179$</span>
                </div>
                <hr/>

                <div className="shipping">
                    <span className="spanOne">shipping</span>
                    <span>free</span>
                </div>
                <hr/>

                <div className="total">
                    <span className="spanOne">total</span>
                    <span>1978$</span>
                </div>
              
                <div className="contain-btns">
                 <form>
                
                    <button className='orange-btn'>Procees to checkout</button>
                 </form>
                

                </div>

   

            </div>
              </div>
            </div>
        </div>

    )
}
export default Cart;