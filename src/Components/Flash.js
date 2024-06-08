import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBIcon } from 'mdb-react-ui-kit';
import flash1 from '../images/flash1.png';
import React, { useEffect, useState } from 'react';
import './css-components/flash.css'
import Home2 from '../images/home2.png';
const Flash = () => {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);

    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);

    const [currentCount, setCurrentCount] = useState(0);
    const [countCart, setCountCart] = useState(0);


// let counter1 = parseInt(localStorage.getItem("CurrentCount"));
// let counter2 = parseInt(localStorage.getItem("CountCart"));

// const handleClick = () => {
//     setIsActive(!isActive);
  
//     counter1++;
//     localStorage.setItem('CurrentCount', counter1.toString());
//   };


//   const handleClickCart = () => {
//     setIsActive2(!isActive2);
//     counter2++;
//     localStorage.setItem('CountCart', counter2.toString());
//   };

useEffect(() => {
    const storedCurrentCount = localStorage.getItem("CurrentCount");
    const storedCountCart = localStorage.getItem("CountCart");

    // Ensure values are valid numbers, if not, initialize to 0
    setCurrentCount(storedCurrentCount ? parseInt(storedCurrentCount, 10) : 0);
    setCountCart(storedCountCart ? parseInt(storedCountCart, 10) : 0);
}, []);

// Sync state with local storage when counters change
useEffect(() => {
    localStorage.setItem("CurrentCount", currentCount.toString());
}, [currentCount]);

useEffect(() => {
    localStorage.setItem("CountCart", countCart.toString());
}, [countCart]);

const handleClick = () => {
    setIsActive(!isActive);
    setCurrentCount(prevCount => prevCount + 1);
    window.location.reload();
};

const handleClickCart = () => {
    setIsActive2(!isActive2);
    setCountCart(prevCount => prevCount + 1);
    // window.location.reload();
};


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                if (Array.isArray(data)) {
                    // Set the first 4 items to data
                    const firstFourProducts = data.slice(0, 4);
                    setData(firstFourProducts);

                    // Set items from index 12 to 16 to data3
                    const limitedProducts = data.slice(12, 16);
                    setData3(limitedProducts);

                    const ourProducts = data.slice(10, 18);
                    setData2(ourProducts);
                } else {
                    console.error('Unexpected data structure:', data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

 

    return(
        <div className='flash-main'>
            <div className='flash'>
                <p className='small-title'>Today's</p>
            <h2 className='title'>Flash Sales</h2>
            <div className='cards'>
            {data.map((item, index) => (
            <div key={index} className='card-container'>
              <MDBCard className='custom-card'>
                <MDBCardImage src={item.image} alt={item.title} className='card-img' />
                <button className= {`add-to-cart ${isActive ? 'active' : ''}`}  onClick={handleClickCart}>Add to Cart</button>
                <div className='icons'>
                  <span><MDBIcon far icon="heart" className={`icon-fav ${isActive ? 'active' : ''}`}  onClick={handleClick}/></span>
                  <span><MDBIcon far icon="eye" className='icon' /></span>
                </div>
                <span className='percentage'>-40%</span>
    
              </MDBCard>
              <h3 className='flash-title'>{item.title.substring(0,10)}</h3>
                        <span className='price'>{item.price}$</span> <del>160$</del>
                        <div className='stars'>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>

                        </div>
                        
              
            </div>
        ))}
    
            </div>
            </div>
            <button className='orange-btn'>view all Products</button>
            <hr className='custom-hr'/>

            <div className='flash'>
                <p className='small-title'>Categories</p>
            <h2 className='title'>browse by category</h2>
            <div className='cards'>
                <div className='card-container card2'>
                    <div className='custom-card-icon'>
                    <MDBIcon fas icon="mobile-alt" className='icon-category' />
                    <p>Phones</p>
                    </div>
                </div> 

                <div className='card-container card2'>
                    <div className='custom-card-icon'>
                    <MDBIcon fas icon="desktop"className='icon-category' />
                    <p>Computers</p>
                    </div>
                </div> 

                <div className='card-container card2'>
                    <div className='custom-card-icon'>
                    <MDBIcon far icon="clock"  className='icon-category' />
                    <p>SmartWatch</p>
                    </div>
                </div> 


                <div className='card-container card2'>
                    <div className='custom-card-icon'>
                    <MDBIcon fas icon="camera" className='icon-category' />
                    <p>Camera</p>
                    </div>
                </div> 

                <div className='card-container card2'>
                    <div className='custom-card-icon'>
                    <MDBIcon fas icon="headphones-alt" className='icon-category' />
                    <p>HeadPhones</p>
                    </div>
                </div> 

            </div>
            </div>
            <hr className='custom-hr'/>
            <div className='flash'>
                <p className='small-title'>this month</p>
            <h2 className='title best-title'>best selling Products  <button className='orange-btn view-btn'>view All</button></h2>
            <div className='cards'>
            {data3.map((item, index) => (
            <div key={index} className='card-container'>
              <MDBCard className='custom-card'>
                <MDBCardImage src={item.image} alt={item.title} className='card-img' />
                <button class="add-to-cart">Add to Cart</button>

                <div className='icons'>
                <span><MDBIcon far icon="heart" className={`icon-fav ${isActive ? 'active' : ''}`}  onClick={handleClick}/></span>
                  <span><MDBIcon far icon="eye" className='icon' /></span>
                </div>
              
    
              </MDBCard>
              <h3 className='flash-title'>{item.title.substring(0,10)}</h3>
                        <span className='price'>{item.price}$</span>
                        <div className='stars'>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>

                        </div>
              
            </div>
        ))}

            </div>
            </div>

            <div className='img'>
                <img src={Home2} alt='categories photo' />
            </div>

            <div className='flash'>
                <p className='small-title'>our Products</p>
            <h2 className='title'>explore our Products</h2>
            <div className='cards'>
            {data2.map((item, index) => (
            <div key={index} className='card-container'>
              <MDBCard className='custom-card'>
                <MDBCardImage src={item.image} alt={item.title} className='card-img' />
                <button class="add-to-cart">Add to Cart</button>

                <div className='icons'>
                <span><MDBIcon far icon="heart" className={`icon-fav ${isActive ? 'active' : ''}`}  onClick={handleClick}/></span>
                  <span><MDBIcon far icon="eye" className='icon' /></span>
                </div>
              
    
              </MDBCard>
              <h3 className='flash-title'>{item.title.substring(0,10)}</h3>
                        <span className='price'>{item.price}$</span>
                        <div className='stars'>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>
                        <MDBIcon fas icon="star" className='star'/>

                        </div>
              
            </div>
          ))}
            </div>
            </div>
            <button className='orange-btn'>view all Products</button>
            <div className='features'>
                <div className='whole-card'>
                    <div className='icon-container'>
                        <MDBIcon fas icon="truck" className='icon-inside'/>
                    </div>
                    <h2>free and fast delivery</h2>
                    <p>Free delivery for all orders over $140</p>
                </div>
                
                <div className='whole-card'>
                    <div className='icon-container'>
                        <MDBIcon fas icon="headphones" className='icon-inside'/>
                    </div>
                    <h2>24/7 CUSTOMER SERVICE</h2>
                    <p>Free delivery for all orders over $140</p>
                </div>

                <div className='whole-card'>
                    <div className='icon-container'>
                    <MDBIcon fas icon="shield-alt"c className='icon-inside' />
                    </div>
                    <h2>MONEY BACK GUARANTEE</h2>
                    <p>Free delivery for all orders over $140</p>
                </div>
                
                
            </div>



    </div>
    )

};
export default Flash;