import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { AddOutlined, RemoveOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { removecart, addcart , decreaseCart} from '../store/slice/CartSlice'
import { useState } from 'react'

const Cart = () => {

    const data = useSelector((state) => {
        return state.carts.items;
    })

    const cartCount = useSelector((state) => {
        return state.carts.count;
    })

    const dispatch = useDispatch();
    const removeToCart = (item) => {
        console.log(item);
        dispatch(removecart(item));
    }
    const addToCart = (item) => {
        console.log(item);
        dispatch(addcart(item));
    }

    const decreaseToCart=(item)=>{
        console.log(item);
        dispatch(decreaseCart(item));
    }



    return (
        <div className=''>
            <Announcement />
            <Navbar />
            <div className="wrapper p-[20px]">
                <div className="title font-normal text-[30px] text-center">Your Bag</div>
                <div className="top flex items-center justify-between">
                    <button className='p-[10px] font-semibold'>Continue Shopping</button>
                    <div className="toptexts flex">
                        <div className="toptext cursor-pointer mr-4">Shopping Bag ({cartCount})</div>
                        <div className="toptext cursor-pointer underline">Your wishlist(0)</div>

                    </div>

                    <button className='p-[10px] font-semibold bg-black text-white'>Checkout Now</button>

                </div>
                <div className="bottom flex justify-between">
                    <div className="info " style={{ flex: 3 }}>
                        <div className="product flex justify-between flex-col">
                            {data.map((item, index) => (
                                <div key={index} className="productdetail flex" style={{ flex: 2 }}>
                                    <img src={item.img} className='w-[300px] h-[300px]' />
                                    <div className="detail p-[20px] flex flex-col justify-around">
                                        <div className="name">
                                            <b>Product:</b> {item.name}
                                        </div>
                                        <div className="id">
                                            <b>ID:</b> {item.id}
                                        </div>
                                        <div className="color">
                                            <b>Color:</b>
                                            <p className='h-[20px] w-[20px] bg-pink-400 rounded-full'></p>
                                        </div>
                                        <div className="size">
                                            <b>Size:</b> 37.5
                                        </div>
                                        <div className="size">
                                            <b>Quantity:</b> {item.quantity}
                                        </div>
                                    </div>
                                    <div className="pricedetail flex-1 justify-center flex flex-col items-center space-y-4 ">
                                        <div className="price flex text-3xl justify-center items-center space-x-3">
                                            <RemoveOutlined onClick={()=>decreaseToCart(item)}/>
                                            <p>{item.quantity}</p>
                                            <AddOutlined onClick={()=>addToCart(item)}/>

                                        </div>

                                        <div className="price text-3xl font-thin">
                                            Rs. {item.price * item.quantity}

                                        </div>
                                        <div className="button border border-gray-500 bg-gray-200 p-2 hover:bg-gray-600 hover:text-white" onClick={() => removeToCart(item.id)}>Remove Cart</div>

                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                    {/* {data.map((item, index) => ( */}
                    <div className="summary flex-1 border border-gray-400 rounded-sm  p-[20px] h-[50vh]">
                        <div className="title font-thin">ORDER SUMMARY</div>
                        <div className="sumitem my-[30px] flex justify-between" >
                            <div className="subtotal">Subtotal </div>
                            {/* <div className="subamt"> Rs. {item.price * item.quantity}</div> */}
                        </div>
                        <div className="sumitem my-[30px] flex justify-between">
                            <div className="subtotal">Estimated shopping </div>
                            {/* <div className="subamt"> Rs. {item.price * item.quantity}</div> */}
                        </div>
                        <div className="sumitem my-[30px] flex justify-between">
                            <div className="subtotal">Shipping Discount </div>
                            <div className="subamt">Rs. 100</div>
                        </div>
                        <div className="sumitem my-[30px] flex justify-between text-xl font-semibold">
                            <div className="subtotal" type="total">Total </div>
                            {/* <div className="subamt"> Rs. {item.price * item.quantity - 100}</div> */}
                        </div>
                        <button className='bg-black text-white p-[10px] w-full'>CHECKOUT</button> 
                    
                    </div>  
                     {/* ))} */}
                                           

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart