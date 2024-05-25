import TopNav from './Components/TopNav';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Flash from './Components/Flash';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  return (
    <div className="App">
      <TopNav />
      <Nav />
      <Home />
      <Flash />
      <Footer />
    </div>
  );
}

export default App;
