import React from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../data';
import Newsletter from '../components/Newsletter';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { SearchOutlined } from '@mui/icons-material';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Category = () => {
    const { id } = useParams();

    const category = categories.find((cat) => cat.id.toString() === id) || {};
    const products = category.product || [];

    return (

        <div className=''>
            <Announcement />
            <Navbar />
            <h2 className='font-normal text-2xl mb-16'>Category: {category.title} </h2>
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


            <div>
                <div className='flex flex-wrap'>
                    {products.map((product) => (
                        <div key={product.id}>
                            <div className='flex-1 min-w-[280px] h-[350px] relative m-5 p-[20px] justify-center items-center'>

                            <img src={`/${product.img}`} className='w-[100%] h-[100%]' alt={`Product ${product.id}`} />
                                <div className="info w-[100%] h-[100%] bg-gray-1000 absolute top-0 left-0 z-3 flex items-center justify-center bg-black opacity-5 hover:opacity-50 transform transition-transform ease-in-out duration-500">
                                    <div className='w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center m-[10px] hover:bg-white transform hover:scale-110 transition-transform ease-in-out duration-500'><ShoppingCartOutlined /></div>
                                    <div className='w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center m-[10px] hover:bg-white transform hover:scale-110 transition-transform ease-in-out duration-500'>  <Link to={`/category/${category.id}/product/${product.id}`}><SearchOutlined /></Link></div>
                                    <div className='w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center m-[10px] hover:bg-white transform hover:scale-110 transition-transform ease-in-out duration-500'><FavoriteBorderOutlined /></div>
                                </div>
                                <div className="name font-normal text-xl relative flex justify-center">{product.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Category;
