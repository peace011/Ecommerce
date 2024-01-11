import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'

const ProductItem = ({product}) => {
  return (
    <div className='flex-1 min-w-[280px] h-[350px] relative m-5 p-[20px] justify-center items-center'>
        {/* <div className="circle w-[200px] h-[200px] rounded-full bg-white absolute">

        </div> */}
        <img src={product.img} className='w-[100%] h-[100%]'/>
    <div className="info w-[100%] h-[100%] bg-gray-1000 absolute top-0 left-0 z-3 flex items-center justify-center bg-black opacity-5 hover:opacity-50 transform transition-transform ease-in-out duration-500">
         <div className='w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center m-[10px] hover:bg-white transform hover:scale-110 transition-transform ease-in-out duration-500'><ShoppingCartOutlined/></div>  
         <div className='w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center m-[10px] hover:bg-white transform hover:scale-110 transition-transform ease-in-out duration-500'><SearchOutlined/></div> 
         <div className='w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center m-[10px] hover:bg-white transform hover:scale-110 transition-transform ease-in-out duration-500'><FavoriteBorderOutlined/></div> 
    </div>
</div>
  )
}

export default ProductItem