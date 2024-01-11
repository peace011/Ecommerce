import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex'>
        <div className="left flex-1 flex-col p-[20px] mx-[20px]">
            <h1 className='font-bold text-xl'>STREET FASHION.</h1>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nam ab itaque laboriosam inventore quos quae eveniet. Cum voluptates sit unde earum quod aspernatur iste adipisci rerum voluptas, repellendus neque.</p>
            <div className="socilacontainer flex">
              <div className="fb w-[40px] h-[40px] border rounded-full text-white bg-blue-800 flex justify-center items-center mr-4"><Facebook/></div>  
                <div className="in w-[40px] h-[40px] border rounded-full text-white bg-pink-700 flex justify-center items-center mr-4"> <Instagram/></div> 
                <div className="tw w-[40px] h-[40px] border rounded-full text-white bg-blue-500 flex justify-center items-center mr-4"> <Twitter/></div> 
                <div className="pn w-[40px] h-[40px] border rounded-full text-white bg-red-600 flex justify-center items-center mr-4"><Pinterest/></div>  
            </div>
        </div>
        <div className="center flex-1 p-[20px]">
            <div className="title mb-[30px]">
                Useful Links
            </div>
            <div className="list m-0 p-0 list-none flex flex-wrap ">
                    <li className='w-[50%] mb-[10px]'>Home</li>
                    <li className='w-[50%] mb-[10px]'>Cart</li>
                    <li className='w-[50%] mb-[10px]'>Men Fashiom</li>
                    <li className='w-[50%] mb-[10px]'>Women Fashion</li>
                    <li className='w-[50%] mb-[10px]'>Accessories</li>
                    <li className='w-[50%] mb-[10px]'>My Account</li>
                    <li className='w-[50%] mb-[10px]'>Order Tracking</li>
                    <li className='w-[50%] mb-[10px]'>Wishlist</li>
                    <li className='w-[50%] mb-[10px]'>Terms</li>
                    <li className='w-[50%] mb-[10px]'>Conditions</li>
            </div>

        </div>
        <div className="right flex-1 p-[20px]">
            <div className="title">
                Contact
            </div>
            <div className="contactitem ">
                <div className="item mb-[20px]"><Room className='mr-[10px]'/>Lainchaur, Kathmandu 46600</div>
                <div className="item mb-[20px]"><Phone className='mr-[10px]'/>01-425635,524563,9852365236</div>
                <div className="item mb-[20px]"><MailOutline className='mr-[10px]'/>contact@streetfashion.com</div>
                <img src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </div>
        </div>
    </div>
  )
}

export default Footer