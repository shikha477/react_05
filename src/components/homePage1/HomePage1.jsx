import React from 'react'
import './homePage1.css';
import { assets } from '../../assets/front_assets/assets';
function HomePage1() {
  return (
    <>
    <div className='home_page1_content'>
        <div className='home_page1_left w-full lg:w-1/2'>
            <h1 className='home_page1_heading'>Coffee that's <span className='home_page1_heading_span'>always</span> fresh</h1>
            <p className='home_page1_para'>We are committed to serving you the best coffee, made with the freshest ingredients and served with a smile.</p>
            <button className='home_page1_button'>Order Now</button>
        </div>
        <div className='home_page1_right w-full lg:w-1/2'>
            <img src={assets.coffeeglass} alt="" className='home_page1_coffeeglass'/>
        </div>
    </div>
    </>
  )
}

export default HomePage1
