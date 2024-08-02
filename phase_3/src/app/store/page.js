"use client"
import React,{useState} from 'react';
import '../styles/App.css';
import Image from 'next/image';

// import PremiumPrinting from '/PremiumPrinting.png';
// import BannerProduct from '/BannerProduct.png';
// import RetractableProduct from '/RetractableProduct.png';
// import GallaryProduct from '/GallaryProduct.png';
// import SandwichProduct from '/SandwichProduct.png';

import Product from '../components/product';
import NavigationBar from '../components/navigationBar';
import PageFooter from '../components/footer';
import Banner from '../components/banner';
import Carousel from '../components/carousel';



export default function Store() {

  // eslint-disable-next-line no-unused-vars
  const[isopen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <main>
        <NavigationBar/>
        <div className='relative h-screen'>
          <Banner/>
          <div>
            <h1 className='pl-10 pr-10 pt-8 text-4xl text-gray-500 font-semibold'><span className='text-black '>Premium Printing.</span> Delivered right to your doorstep.</h1>
          </div>

            <Carousel/>

            
        {/* <div className="app__home">
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

        

      </div>

      <div className='app__home_products'>
        <Product
          imageSrc='/BannerProduct.png'
          name="Banners"
          price="$9-$259" />

          <Product
          imageSrc='/RetractableProduct.png'
          name="Example Product"
          price="$120-$259" />

          <Product
          imageSrc='/GallaryProduct.png'
          name="Example Product"
          price="$56-$235" />

          <Product
          imageSrc='/SandwichProduct.png'
          name="Example Product"
          price="$175-$320" />
      </div>
      
    </div> */}

    </div>
    <PageFooter/>
        
    </main>
    
  );
}

