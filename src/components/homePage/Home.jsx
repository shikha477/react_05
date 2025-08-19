import React from 'react'
import './Home.css';
import {assets} from '../../assets/front_assets/assets';
const Home = () => {
  return (
    <>
    <div className='home_content'>
      <div className='home_left_content w-full lg:w-1/2'>
        <h2>See You On the Patio</h2>
        <p>Soak up the season with Summer-Berry Refreshers and new Iced Horchata Oatmilk Shaken Espresso. Fresh picks and returning favorites are iced and ready.</p>
        <button>Order Now</button>
      </div>
      <div className='home_right_content w-full lg:w-1/2'>
        <img src= {assets.background} className='home_img'/>
      </div>
    </div>
    </>
  )
}

export default Home
