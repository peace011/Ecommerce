import { Send } from '@mui/icons-material'
import React from 'react'

const Newsletter = () => {
  return (
    <div className='news h-[60vh] bg-white flex flex-col items-center justify-center'>
        <div className="title text-[70px] mb-[20px]">
                    Newsletter
        </div>
        <div className="desc text-[24px] font-thin mb-[20px]">
            Get timely updates from your favourite product.
        </div>
        <div className="inputcontainer w-[50%] h-[40px] flex justify-between border border-gray-300">
           <input placeholder='Your email' className='pl-[20px]'/>
            <button className='bg-teal-600 p-4 flex items-center justify-center'> <Send className='text-white '/></button>
               
           
        </div>
    </div>
  )
}

export default Newsletter