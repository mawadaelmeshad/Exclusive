import { MDBIcon } from 'mdb-react-ui-kit';
import AboutPhoto from '../images/about.png';
import './css-components/about.css';

function About(){
    return(
        <div className="about">
            <div className="contain-about">
                <div className="contain-words">
                    <h2 className="title">Our story</h2>
                    <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>

                </div>
                <div className="contain-img">
                    <img src={AboutPhoto} alt="about image" />
                </div>
            </div>
            <div className='features features2'>
                <div className='whole-card'>
                    <div className='icon-container'>
                        <MDBIcon fas icon="home" className='icon-inside'/>
                    </div>
                    <h2>10.5k</h2>
                    <p>Sallers active our site</p>
                </div>
                
                <div className='whole-card'>
                    <div className='icon-container'>
                        <MDBIcon fas icon="dollar-sign" className='icon-inside'/>
                    </div>
                    <h2>33k</h2>
                    <p>Mopnthly Produduct Sale</p>
                </div>

                <div className='whole-card'>
                    <div className='icon-container'>
                    <MDBIcon fas icon="shopping-bag"c className='icon-inside' />
                    </div>
                    <h2>45.5k</h2>
                    <p>Customer active in our site</p>
                </div>

                <div className='whole-card'>
                    <div className='icon-container'>
                    <MDBIcon fas icon="hand-holding-usd"c className='icon-inside' />
                    </div>
                    <h2>25k</h2>
                    <p>Anual gross sale in our site</p>
                </div>
                
                
            </div>

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
}
export default About;