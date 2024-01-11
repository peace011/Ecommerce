
import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { AddOutlined, RemoveOutlined } from '@mui/icons-material'

const Product = () => {
  return (
    <div>
     <Announcement/>
       <Navbar/>
       <div className="wrapper p-[50px] flex">
            <div className="img flex-1 mr-[64px]">
                <img src="https://plus.unsplash.com/premium_photo-1674719144570-0728faf14f96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvYXR8ZW58MHx8MHx8fDA%3D" className='w-[100%] h-[90vh] object-cover'/>
                </div>
                 <div className="infocontaie flex-1">
                    <div className="title font-medium text-4xl mb-[20px]">Long Coat</div>
                    <div className="desc mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laboriosam voluptates, excepturi animi illo qui minima corporis iure nihil! Temporibus repellat iste magni perspiciatis excepturi, ut mollitia eos veniam cupiditate.</div>
                    <div className="price mb-[20px] text-[38px]">Rs. 4400</div>

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
                            <div className="remove mr-[12px]"><RemoveOutlined/></div>
                            <div className="amt border h-[30px] w-[30px] border-teal-700 rounded-md p-1 mr-[12px] flex justify-center items-center font-bold text-[18px]">1</div>
                            <div className="add mr-[12px]"><AddOutlined/></div>
                            <div className="button border border-gray-500 bg-gray-200 p-2 ">Add to Cart</div>
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