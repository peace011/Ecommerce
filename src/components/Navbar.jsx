import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='h-20'>
        <div className="wrapper flex px-1 py-2 justify-around">
            <div className="left flex-1 flex" >
                <p className='text-[14px] cursor-pointer items-center justify-center'>EN</p>
                <div className="searchcontainer border border-solid border-gray-400 items-center justify-center mx-3">
                    <input type='text' />
                    <SearchIcon className='text-gray-500'/>
                </div>
            </div>
            <div className="center flex-1 flex justify-center">
                <p className='font-bold text-xl '>STREET FASHION.</p>
            </div>
            <div className="right flex-1 flex items-center justify-end">
                <div className="menuitem flex text-[14px] cursor-pointer mr-8">
                    <Link to="/register" className='ml-5'>REGISTER</Link>
                    <Link to="/login" className='ml-5'>SIGN IN</Link>
                    <div className="badge flex flex-col ml-5">
                        <Badge badgeContent={4} color="primary"/>
                        <ShoppingCartOutlined/>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar