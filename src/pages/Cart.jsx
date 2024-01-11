import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { AddOutlined, RemoveOutlined } from '@mui/icons-material'

const Cart = (props) => {
     return (
    <div className=''>
            <Announcement/>
            <Navbar/>
            <div className="wrapper p-[20px]">
                <div className="title font-normal text-[30px] text-center">Your Bag</div>
                <div className="top flex items-center justify-between">
                    <button className='p-[10px] font-semibold'>Continue Shopping</button>
                    <div className="toptexts flex">
                        <div className="toptext cursor-pointer mr-4">Shopping Bag(2)</div>
                        <div className="toptext cursor-pointer underline">Your wishlist(0)</div>

                    </div>
      
                    <button className='p-[10px] font-semibold bg-black text-white'>Checkout Now</button>

                </div>
                <div className="bottom flex justify-between">
                    <div className="info " style={{flex:3}}>
                       <div className="product flex justify-between">
                        <div className="productdetail flex" style={{flex:2}}>
                            <img src="https://images.unsplash.com/photo-1585241920473-b472eb9ffbae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMERyZXNzfGVufDB8fDB8fHww" className='w-[200px]'/>
                            <div className="detail p-[20px] flex flex-col justify-around">
                            <div className="name">
                                <b>Product:</b> WEDDING DRESS
                            </div>
                            <div className="id">
                                <b>ID:</b> 0123564
                            </div>
                            <div className="color">
                                <b>Color:</b> 
                                <p className='h-[20px] w-[20px] bg-pink-400 rounded-full'></p>
                            </div>
                            <div className="size">
                                <b>Size:</b> 37.5
                            </div>
                        </div>
                        <div className="pricedetail flex-1 justify-center flex flex-col items-center space-y-4 ">
                            <div className="price flex text-3xl justify-center items-center space-x-3">
                                <AddOutlined/>
                                <p>2</p>
                                <RemoveOutlined/>
                            </div>
                           
                            <div className="price text-3xl font-thin">
                                Rs. 5000
                                </div>
                        </div>
                       
                        </div>
                       </div>
                    </div>
                    <div className="summary flex-1 border border-gray-400 rounded-sm  p-[20px] h-[50vh]">
                        <div className="title font-thin">ORDER SUMMARY</div>
                        <div className="sumitem my-[30px] flex justify-between">
                            <div className="subtotal">Subtotal </div>
                            <div className="subamt">Rs. 5000</div>
                        </div>
                        <div className="sumitem my-[30px] flex justify-between">
                            <div className="subtotal">Estimated shopping </div>
                            <div className="subamt">Rs. 5000</div>
                        </div>
                        <div className="sumitem my-[30px] flex justify-between">
                            <div className="subtotal">Shipping Discount </div>
                            <div className="subamt">Rs. 5000</div>
                        </div>
                        <div className="sumitem my-[30px] flex justify-between text-xl font-semibold">
                            <div className="subtotal" type="total">Total </div>
                            <div className="subamt">Rs. 4900</div>
                        </div>
                        
                        <button className='bg-black text-white p-[10px] w-full'>CHECKOUT</button>
                    </div>
                  
                </div>
            </div>
            <Footer/>
    </div>
  )
}

export default Cart