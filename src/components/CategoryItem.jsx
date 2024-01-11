import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItem = ({item}) => {
  return (
    <div className='flex-1 h-[70vh] relative'>
        <img src={item.img} className='w-[100%] h-[100%] object-cover'/>
       <div className="info absolute top-0 bottom-0 flex justify-center items-center flex-col  text-white h-[100%] w-[100%]">
       <p className='text-4xl'>{item.title}</p> 
          <Link to={`/category/${item.id}`}>
          <button className='border border-white p-1 text-gray-300 bg-orange-300 text-black hover:bg-orange-500 hover:text-white transform transition-transform ease-in-out duration-1000 hover:scale-110'>SHOP NOW </button>
        </Link>
       </div>
    </div>
  )
}

export default CategoryItem