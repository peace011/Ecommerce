import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Product from '../components/Product'
import Footer from '../components/Footer'

const ProductList = () => {
  return (
    <div className=''>
        <Announcement/>
        <Navbar/>
        <div className="title m-[20px]">Dresses</div>
        <div className="filtercontainer flex justify-between">
            <div className="filter flex">
                    <div className="filtertext text-[20px] font-medium mr-[20px]">
                         Filter Products:
                    </div>

                    <select defaultValue="" className="border p-2 mr-[20px]">
                        <option value="" disabled>Select Color</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="white">White</option>
                        <option value="pink">Pink</option>
                        <option value="green">Green</option>
                    </select>

                    <select defaultValue="" className="border p-2">
                        <option value="" disabled>Size</option>
                        <option value="red">sm</option>
                        <option value="blue">md</option>
                        <option value="white">lg</option>
                        <option value="pink">xl</option>
                        <option value="green">2xl</option>
                    </select>

                    </div>
            <div className="filter flex">
                 <div className="filtertext text-[20px] font-medium mr-[20px]">
                    Sort Products:
                    </div>

                    <select defaultValue="" className="border p-2">
                        <option value="" disabled>sort</option>
                        <option value="red">Newest</option>
                        <option value="blue">Price (high)</option>
                        <option value="white">Price (low)</option>
                    </select>

                    </div>
        </div>
        <Product/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default ProductList