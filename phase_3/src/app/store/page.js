import React,{useState} from 'react';
import './App.css';

import PremiumPrinting from './images/PremiumPrinting.png';
import BannerProduct from './images/BannerProduct.png';
import RetractableProduct from './images/RetractableProduct.png';
import GallaryProduct from './images/GallaryProduct.png';
import SandwichProduct from './images/SandwichProduct.png';

import Product from './components/Product/Product';



function App() {

  // eslint-disable-next-line no-unused-vars
  const[isopen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <div className="app__home">
      <div className='app__home_top'>
        <div className='app__home_top_text'>
          <h1>Store</h1>
          <div className='app__home_top_text_text'>
            <div className='app__home_top_text_text__'>
              <h2>High-Quality Prints</h2>
              <p>Perfect prints. Guaranteed</p>
            </div>

            <div>
              <h2>Next-Day Delivery</h2>
              <p>Deliver anywhere in the Vally</p>
            </div>

            <div>
              <h2>Satisfaction Garanteed</h2>
              <p>Not satisfied? Get a full refund</p>
            </div>

            <div>
              <h2>Fast and Easy</h2>
              <p>Process everything online</p>
            </div></div>
        </div>

        <img
          src={PremiumPrinting}
          alt='premium printing'
          width='866px'
        />

      </div>

      <div className='app__home_products'>
        <Product
          imageSrc={BannerProduct}
          name="Banners"
          price="$9-$259" />

          <Product
          imageSrc={RetractableProduct}
          name="Example Product"
          price="$120-$259" />

          <Product
          imageSrc={GallaryProduct}
          name="Example Product"
          price="$56-$235" />

          <Product
          imageSrc={SandwichProduct}
          name="Example Product"
          price="$175-$320" />
      </div>
      
    </div>
  );
}

export default App;
