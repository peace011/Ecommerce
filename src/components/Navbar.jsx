import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { categories } from '../data';

const Navbar = () => {

    const cartCount=useSelector((state)=>  {
     return state.carts.count;
    })

    const[data,setData]=useState('');
    const[filter,setFilter]=useState([]);

    const handleSearch=(e)=>{
        setData(e.target.value);
        console.log("data",data);
        const input=e.target.value;
        console.log("data",input);

        if (categories.product) {
            const filtered = categories.product.filter((product) =>
              product.name.toLowerCase().startsWith(input.toLowerCase())
            );
            setFilter(filtered);
            console.log(filtered);
          }
    }


  return (
    <div className='h-20'>
        <div className="wrapper flex px-1 py-2 justify-around">
            <div className="left flex-1 flex" >
                <p className='text-[14px] cursor-pointer items-center justify-center'>EN</p>
                <div className="searchcontainer border border-solid border-gray-400 items-center justify-center mx-3">
                    <input type='text' onChange={handleSearch}/>
                    <SearchIcon className='text-gray-500' />
                </div>
            </div>
            <div className="center flex-1 flex justify-center">
                <p className='font-bold text-xl '>STREET FASHION.</p>
            </div>
            <div className="right flex-1 flex items-center justify-end">
                <div className="menuitem flex text-[14px] cursor-pointer mr-8">
                    <Link to="/register" className='ml-5'>REGISTER</Link>
                    <Link to="/login" className='ml-5'>SIGN IN</Link>
                    <Link to="/cart" className="badge flex flex-col ml-5">
                             <Badge badgeContent={cartCount} color="primary"/>
                             <ShoppingCartOutlined/>
                        </Link>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar