import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React from 'react'
import { sliderItems } from '../data';
import { useState } from 'react';

const Slider = () => {
    const[slideIndex,setslideIndex]=useState(0);
    const handleClick = (direction) => {
            if (direction === 'left') {
                setslideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 2));
            }
            if (direction === 'right') {
                setslideIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
            }
      };
    //   sliderItems.length - 1 =2
  return (
    <div className='slider w-full h-[100vh] flex relative overflow-hidden'>
        <div className="wrapper flex"  >
            {sliderItems.map((item)=>(
            <div className={`slide w-[100vw] h-[100vh] relative transform transition-transform ease-in-out`}
            style={{
              transform: `translateX(-${slideIndex * 100}%)`,
              transitionDuration: '0.9s', // Adjust the duration as needed
            }}
            key={item.id}
          >
                <div className="imgcontainer h-[100vh] ">
                    <img src={item.img} className='h-[90%] w-[100%]' />
                </div>
                <div className="infocontainer flex flex-col p-[50px] absolute top-0 bottom-0 m-auto justify-center items-center right-0 mt-44 mr-[-1%] text-white">
                    <div className="title text-[60px] ">
                        {item.title}
                    </div>
                    <div className="desc mx-[50px] text-[20px]">
                        {item.desc}
                    </div>
                    <div className="button p-[10px] text-[20px] border border-white">
                       Shop Now
                    </div>
                </div>
            </div>
))}
        </div>
        <div className="arrow h-[50px] w-[50px] bg-white rounded-full flex justify-center items-center absolute top-0 bottom-0 m-auto opacity-50" direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </div>
        <div className="arrow h-[50px] w-[50px] bg-white rounded-full flex justify-center items-center absolute top-0 bottom-0 m-auto right-0 opacity-50" direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </div>
    </div>
  )
}

export default Slider