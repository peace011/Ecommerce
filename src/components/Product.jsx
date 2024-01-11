import React from 'react'
import { popularProducts } from '../data'
import ProductItem from './ProductItem'

const Product = () => {
  return (
    <div className='flex flex-wrap'>
        {popularProducts.map((item)=>(
            <ProductItem product={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Product