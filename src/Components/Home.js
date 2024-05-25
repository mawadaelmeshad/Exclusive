import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBIcon } from 'mdb-react-ui-kit';
import home from '../images/home.png';
import flash1 from '../images/flash1.png';
import flash2 from '../images/flash2.png';
import flash3 from '../images/flash3.png';


import './css-components/home.css'
function Home () {
    return(
        <div className="home">
             <ul>
                <li>Woman’s Fashion <MDBIcon fas icon="angle-right" className='arrow' /> </li>
                <li>Men’s Fashion <MDBIcon fas icon="angle-right" className='arrow arrow2'/></li>
                <li>Electronics</li>
                <li>Home & Lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby’s & Toys</li>
                <li>Groceries & Pets</li>
                <li>Health & Beauty</li>
            </ul>
            <img src={home} alt="home photo" />

          
        </div>

    )
}
export default Home;