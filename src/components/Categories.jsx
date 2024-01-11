import React from 'react'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div className='categories flex flex-wrap'>
        {
            categories.map((item)=>(
                <div key={item.id}>
                    <CategoryItem item={item}/>
                    </div>
            ))
        }
    </div>
  )
}

export default Categories