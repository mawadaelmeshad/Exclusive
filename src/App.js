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
import Protectedroutes from './Components/Protectedroutes';
function App() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const handleAddToCart = (idCart) => {
    let storedIdss = JSON.parse(localStorage.getItem("idCart"));
        
    // If storedIds is not an array, initialize it as an empty array
    if (!Array.isArray(storedIdss)) {
        storedIdss = [];
    }

    // Add the new product ID to the array if it's not already there
    if (!storedIdss.includes(idCart)) {
        storedIdss.push(idCart);
        localStorage.setItem("idCart", JSON.stringify(storedIdss));
    }
    setCartCount(cartCount + 1);
    // localStorage.setItem("wishlistCount", wishlistCount);
   

  };

  const handleAddToWishlist = (id) => {
    let storedIds = JSON.parse(localStorage.getItem("id"));
        
    // If storedIds is not an array, initialize it as an empty array
    if (!Array.isArray(storedIds)) {
        storedIds = [];
    }

    // Add the new product ID to the array if it's not already there
    if (!storedIds.includes(id)) {
        storedIds.push(id);
        localStorage.setItem("id", JSON.stringify(storedIds));
    }
    // localStorage.setItem("id",productId);
    setWishlistCount(wishlistCount + 1);
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
            </>
          }>
        

          </Route>
        <Route element={<Protectedroutes />}>
          <Route path='/profile' element={<Profile/>} />
          <Route path='/checkout' element={<Checkout />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist handleAddToCart={handleAddToCart} />} />

        



        
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
