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
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter> {/* Wrap your application with BrowserRouter */}
    <div className="App">
      <TopNav />
      <Nav />
      <Routes>
      <Route path='/' element={
            <>
              <Home />
              <Flash/>
            </>
          }>

          </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cart' element={<Cart />} />



        
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
