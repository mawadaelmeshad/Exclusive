import { MDBCard, MDBCardImage, MDBIcon } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import './css-components/wishlist.css';

function Wishlist({ handleAddToCart }) {
    const [products, setProducts] = useState([]);
    const [productIds, setProductIds] = useState([]);

    useEffect(() => {
        // Retrieve the array of product IDs from localStorage
        const ids = JSON.parse(localStorage.getItem("id")) || [];
        console.log("Parsed IDs from localStorage:", ids);
        setProductIds(ids);
    }, []);

    useEffect(() => {
        if (productIds.length > 0) {
            const fetchProducts = async () => {
                try {
                    const productPromises = productIds.map(async (id) => {
                        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
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
            localStorage.setItem("id", JSON.stringify(updatedIds));
            setProductIds(updatedIds);
        }
    };

    useEffect(() => {
        console.log("Current products state:", products);
    }, [products]);

    if (products.length === 0) {
        return <p>No items in wishlist</p>; // Display a message if the wishlist is empty
    }

    return (
        <div className="wishlist">
            <div className="top">
                <p>Wishlist({productIds.length})</p>
                <button className='transparent-btn view-btn'>Move All To Bag</button>
            </div>
            <div className='cards'>
                {products.map((product, index) => (
                    <div key={index} className='card-container'>
                        <MDBCard className='custom-card'>
                            <MDBCardImage src={product.image} alt={product.title} className='card-img' />
                            <button className="add-to-cart" onClick={() => handleAddToCart(product.id)}>
                                <MDBIcon fas icon="shopping-cart" className="cart-icon" /> Add to Cart
                            </button>
                            <div className='icons'>
                                <span><MDBIcon fas icon="trash-alt" className='icon' /></span>
                            </div>
                        </MDBCard>
                        <h3 className='flash-title'>{product.title.substring(0, 10)}</h3>
                        <span className='price'>{product.price}$</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Wishlist;
