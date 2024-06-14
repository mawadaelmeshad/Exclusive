import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import './css-components/cart.css';
import { useEffect, useState } from "react";
function Cart({ handleAddToCart }){

        const [products, setProducts] = useState([]);
        const [productIds, setProductIds] = useState([]);
    
        useEffect(() => {
            // Retrieve the array of product IDs from localStorage
            const ids = JSON.parse(localStorage.getItem("idCart")) || [];
            console.log("Parsed IDs from localStorage:", ids);
            setProductIds(ids);
        }, []);
    
        useEffect(() => {
            if (productIds.length > 0) {
                const fetchProducts = async () => {
                    try {
                        const productPromises = productIds.map(async (idCart) => {
                            const response = await fetch(`https://fakestoreapi.com/products/${idCart}`);
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.json();
                        });
    
                        const fetchedProducts = await Promise.all(productPromises);
                        console.log("Fetched products:", fetchedProducts);
                        setProducts(fetchedProducts);
                    } catch (error) {
                        console.error('Failed to fetch products:', error);
                    }
                };
    
                fetchProducts();
            }
        }, [productIds]);
    
        const addProductId = (newId) => {
            if (!productIds.includes(newId)) {
                const updatedIds = [...productIds, newId];
                localStorage.setItem("idCart", JSON.stringify(updatedIds));
                setProductIds(updatedIds);
            }
        };
    
        useEffect(() => {
            console.log("Current products state:", products);
        }, [products]);

        let total = 0;

        // Iterate through products to accumulate the total price
        products.forEach((product) => {
            total += product.price;
        });

        if (products.length === 0) {
            return <p>No items in cart</p>; // Display a message if the wishlist is empty
        }
    return(
        <div className="cart">
            
                        <div className="table-container">
                        <MDBTable hover borderless cellPadding={5} className="table">
    <MDBTableHead>
        <tr className="tr">
            <th scope='col'>Product</th>
            <th scope='col'>Price</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Subtotal</th>
        </tr>
    </MDBTableHead>
    <MDBTableBody>
        {products.map((product, index) => (
            <tr key={index} className="tr">
                <td><img src={product.image} alt="image" className="product-img"/>{product.title.substring(0, 10)}</td>
                <td>${product.price}</td>
                <td>1</td>
                <td>${product.price}</td>
            </tr>
        ))}
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
                            <span>${total}</span>
                        </div>
                        <hr/>
        
                        <div className="shipping">
                            <span className="spanOne">shipping</span>
                            <span>free</span>
                        </div>
                        <hr/>
        
                        <div className="total">
                            <span className="spanOne total">total</span>
                            <span>${total}</span>
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