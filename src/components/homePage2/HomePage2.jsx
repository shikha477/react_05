import React from 'react'
import './HomePage2.css';
import { assets } from '../../assets/front_assets/assets';
export default function HomePage2() {
  return (
   <>
   <div className='home_page2_content'>
        <div className='home_page2_left w-full lg:w-1/2'>
            <img src={assets.father_day} alt="" className='home_page2_coffeeglass'/>
        </div>
        <div className='home_page2_right w-full lg:w-1/2'>
            <h1 className='home_page2_heading'>Coffee that's <span className='home_page2_heading_span'>always</span> fresh</h1>
            <p className='home_page2_para'>We are committed to serving you the best coffee, made with the freshest ingredients and served with a smile.</p>
            <button className='home_page2_button'>Order Now</button>
        </div>
   </div>
   </> 
  )
}
