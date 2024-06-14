import TopNav from './Components/TopNav';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Flash from './Components/Flash';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import About from './Components/About';
import Contact from './Components/Contact';
import Checkout from './Components/Checkout';
import Cart from './Components/Cart';
import Profile  from './Components/Pofile';
import Wishlist from './Components/Wishlist';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const handleAddToCart = () => {
    setWishlistCount(wishlistCount + 1);
    // localStorage.setItem("wishlistCount", wishlistCount);
   

  };

  const handleAddToWishlist = (productId) => {
    localStorage.setItem("id",productId);
    setCartCount(cartCount + 1);
    // localStorage.setItem("cartCount", cartCount);
  

  };
  return (
    <BrowserRouter> {/* Wrap your application with BrowserRouter */}
    <div className="App">
      <TopNav />
      <Nav cartCount={cartCount} wishlistCount={wishlistCount}/>
      <Routes>
      <Route path='/' element={
            <>
              <Home />
              <Flash handleAddToCart={handleAddToCart} handleAddToWishlist={handleAddToWishlist}/>
              <Wishlist handleAddToCart={handleAddToCart} />
            </>
          }>

          </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/wishlist' element={<Wishlist/>} />

        



        
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
