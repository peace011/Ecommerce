
import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { AddOutlined, RemoveOutlined } from '@mui/icons-material'
import { useParams } from 'react-router-dom'
import { categories } from '../data'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addcart, decreaseCart, increaseCart, removecart } from '../store/slice/CartSlice'

const Product = () => {
  const {id,productid}=useParams();

  const category = categories.find((cat) => cat.id.toString()===id) || {};

  const product = category.product.find((product) => product.id.toString() === productid) || {};

 
  const dispatch=useDispatch();
  const addToCart=(product)=>{
    console.log(product);
    dispatch(addcart(product));
  }


  const removeToCart=(product)=>{
    dispatch(removecart(product));
  }

  const cartCount=useSelector((state)=>{
   return state.carts.count;
    console.log(state.carts.count);
  } 
  )
  
  const increaseToCart=(product)=>{
    console.log(product);
    dispatch(increaseCart(product));
  }

  const decreaseToCart=(product)=>{
    console.log(product);
    dispatch(decreaseCart(product));
  }

  const data=useSelector((state)=>{
    return state.carts.items;
  })
  // Find the product in the cart data and get its quantity
  const productInCart = data.find((item) => item.id === product.id);
  const productQuantityInCart = productInCart ? productInCart.quantity : 0;

 
  return (
   <div>
     <Announcement/>
       <Navbar/>
       <div className="wrapper p-[50px] flex">
            <div className="img flex-1 mr-[64px]">
                <img src={`/${product.img}`} className='w-[100%] h-[90vh] object-cover'/>
                </div>
                 <div className="infocontaie flex-1">
                    <div className="title font-medium text-4xl mb-[20px]">{product.name}</div>
                    <div className="desc mb-[20px]">{product.description}</div>
                    <div className="price mb-[20px] text-[38px]">{product.price}</div>

                <div className="select flex">
               <div className="filtercontainer p-2 mr-[120px] flex">Color:
                <div className="color w-[20px] h-[20px] rounded-full bg-black ml-[8px]"></div>
                <div className="color w-[20px] h-[20px] rounded-full bg-blue-700 ml-[8px]"></div>
                <div className="color w-[20px] h-[20px] rounded-full bg-pink-500 ml-[8px]"></div>
                <div className="color w-[20px] h-[20px] rounded-full bg-green-500 ml-[8px]"></div>



               </div>
                    <select defaultValue="" className="border p-2 mr-[20px]">
                        <option value="" disabled>Size</option>
                        <option value="sm">sm</option>
                        <option value="md">md</option>
                        <option value="lg">lg</option>
                        <option value="xl">xl</option>
                    </select>
                    </div>
                  

                   <div className="addcontainer flex items-center w-[50%] mt-[24px]">
                        <div className="amtcontainer flex">
                            <div className="remove mr-[12px]" ><RemoveOutlined onClick={() => decreaseToCart(product)}/></div>
                            <div className="amt border h-[30px] w-[30px] border-teal-700 rounded-md p-1 mr-[12px] flex justify-center items-center font-bold text-[18px]"> {productQuantityInCart}</div>
                            <div className="add mr-[12px]"><AddOutlined onClick={() => increaseToCart(product)}/></div>

                            <div className="button border border-gray-500 bg-gray-200 p-2 hover:bg-gray-600 hover:text-white" onClick={() => addToCart(product)}>Add to Cart</div>
                             </div>    
                   </div>
                </div>
            
       </div>
       <Newsletter/>
       <Footer/>  
    </div>
  )
}

export default Product