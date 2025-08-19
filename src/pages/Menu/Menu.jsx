import React from 'react'
import './Menu.css';
import { assets } from '../../assets/front_assets/assets';
function Menu() {
  return (
     <>
     <div>
      <div className='menu-header'>
        <ul className='menu-header-ul'>
        <li>Menu</li>
        <li>Featured</li>
        <li>Previous</li>
        <li>Favorites</li>
       </ul>
      </div>

      <div className='menu-items'>
        <div className='menu-items-left'>
         <h1>Drinks</h1>
         <p>Hot Coffee</p>
         <p>Cold Coffee</p>
         <p>Hot Tea</p>
         <p>Cold Tea</p>
         <p>Refreshers</p>
         <p>Frappuccino Blended Beverage</p>
         <p>Hot Chocolate Lemonade & More</p>

         <h1>Food </h1>
         <p>Breakfast</p>
         <p>Bakery</p>
         <p>Treats</p>
         <p>Lunch</p>
         <p>Snacks</p>

         <h1>At Home Coffee</h1>
         <p>Whole Bean</p>
         <p>VIA Instant</p>
         <p>Shopping Bag</p>
        </div>

        <div className='menu-items-right'>
          <h1>Menu</h1>
          <h2>Drinks</h2>
          <hr />
          <div className='menu-items-right-div'>
            <img src={assets.cup} alt='' />
            <h3>Hot Coffee</h3>
            <img src={assets.cup} alt='' />
            <h3>cold Coffee</h3>
          </div>

          <div className='menu-items-right-div'>
            <img src={assets.cup} alt='' />
            <h3>Hot Tea</h3>
            <img src={assets.cup} alt='' />
            <h3>cold Tea</h3>
          </div>

          <div className='menu-items-right-div'>
            <img src={assets.cup} alt='' />
            <h3>Refreshers</h3>
            <img src={assets.cup} alt='' />
            <h3>Frappuccino</h3>
          </div>
          <h2>Food</h2>
          <hr/>
          <div className='menu-items-right-div'>
            <img src={assets.food} alt='' />
            <h3>Burgers</h3>
            <img src={assets.food} alt='' />
            <h3>Burgers</h3>
          </div>
          <div className='menu-items-right-div'>
            <img src={assets.food} alt='' />
            <h3>Burgers</h3>
            <img src={assets.food} alt='' />
            <h3>Burgers</h3>
          </div>
          <hr/>
          <h2>At Home Coffee</h2>
          <div className='menu-items-right-div'>
            <img src={assets.cup} alt='' />
            <h3>Hot Coffee</h3>
            <img src={assets.cup} alt='' />
            <h3>Hot Coffee</h3>
          </div>
          <div className='menu-items-right-div'>
            <img src={assets.cup} alt='' />
            <h3>Hot Coffee</h3>
            <img src={assets.cup} alt='' />
            <h3>Hot Coffee</h3>
          </div>
        </div>
      </div>
     
     </div>
     </>
  )
}

export default Menu
