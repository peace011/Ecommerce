import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import '../style.css';
import Categories from '../components/Categories';
import Product from '../components/Product';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Product/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home