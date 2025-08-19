import React from 'react'
import './Gift_card.css';
import { assets } from '../../assets/front_assets/assets';
export default function Gift_card() {
  return (
    <>
    <div className='gift_card'>
      <h1 className='gift_card_heading'>
        Gift cards
      </h1>
      <h6 className='gift_card_subheading'>FEATURES</h6>
      <div className='gift_card_feature'>
       <img src={assets.gift1} alt="feature" />
       <img src={assets.gift2} alt="feature" />
       <img src={assets.gift3} alt="feature" />
        <img src={assets.gift4} alt="feature" />
      </div>
      <div className='gift_card_feature1'>
        <img src ={assets.groupGift} alt='feature'/>
        <p>Effortlessly send up to 10 eGifts per purchase. Select a design to start!</p>
      </div>
      <div className='gift_card_feature2'>
        <h1>Received a gift card?</h1>
        <p>Earns 2★ per $1</p>
        <button className='gift_card_button1'> Add to reload</button>
        <button className='gift_card_button2'>check Balance</button>
      </div>
      <h3 className='gift_card_subheading'>BIRTHDAY</h3>
      <div className='gift_card_feature4'>
        <img src={assets.gift4} alt='birthday' />
        <img src={assets.gift5} alt='birthday' />
      </div>
      <h3 className='gift_card_subheading'>THANKYOU</h3>
      <div className='gift_card_feature5'>
        <img src={assets.gift6} alt='thankyou' />
        <img src={assets.gift7} alt='thankyou' />
        <img src={assets.gift8} alt='thankyou' />
      </div >
      <h3 className='gift_card_subheading'>CELEBRATION</h3>
      <div className='gift_card_feature'>
        <img src={assets.gift9} alt='celebration' />
      </div>
      <h3 className='gift_card_subheading'>GRADUATION</h3>
      <div className='gift_card_feature'>
        <img src={assets.gift1} alt='graduation' />
      </div>
      <h3 className='gift_card_subheading'>APPRECIATION</h3>
      <div className='gift_card_feature4'>
        <img src={assets.gift2} alt='appreciation' />
        <img src={assets.gift8} alt='appreciation' />
      </div>
      <h3 className='gift_card_subheading'>PRIDE</h3>
      <div className='gift_card_feature'>
        <img src={assets.gift3} alt='pride' />
      </div>
      <h3 className='gift_card_subheading'>ENCOURAGEMENT</h3>
      <div className='gift_card_feature4'>
        <img src={assets.gift4} alt='encouragement' />
        <img src={assets.gift5} alt='encouragement' />
      </div>
      <h3 className='gift_card_subheading'>WORKPLACE</h3>
      <div className='gift_card_feature5'>
        <img src={assets.gift9} alt='workplace' />
        <img src={assets.gift8} alt='workplace' />
        <img src={assets.gift7} alt='workplace' />
      </div>
      <h3 className='gift_card_subheading'>ANYTIME</h3>
      <div className='gift_card_feature'>
        <img src={assets.gift9} alt='anytime' />
        <img src={assets.gift5} alt='anytime' />
        <img src={assets.gift2} alt='anytime' />
        <img src={assets.gift1} alt='anytime' />
      </div>
      <div className='gift_card_bulk_container'>
        <div className='gift_card_bulk'>
          <img src={assets.bulk} alt='gift card' />
        </div>
        <div className='gift_card_bulk_text'>
         <h1>Business gifting — simplified</h1>
        <p>Bulk send physical or digital Starbucks Cards to gift, reward, incentivize, or show appreciation towards your customers, clients and team members. Minimum 15 cards per order.</p>
        <button>shop now</button>
        </div>
        
     </div>
      <div className='gift_card_about'>
          <div className='gift_card_about1'> 
            <h2>About eGift cards</h2>
            <p>A Starbucks eGift card is a Starbucks Gift Card that is purchased and sent digitally.</p>
            <p>To manage eGifts, go to eGift History or contact Starbucks Support.</p>
            <h2>Questions around eGift cards?</h2>
            <p>Check our FAQs. Your question might already be answered.</p>
            <button>Cards FAQs</button>
          </div>
          <div className='gift_card_about2'>
            <h2>About Starbucks Gift Cards</h2>
            <p>Use them to pay in-store or join Starbucks® Rewards.</p>
            <p>Earn 2★ per dollar with a registered Gift Card or eGift.</p>
            <button>Card terms & Conditions</button>
          </div>
        </div>
      
    </div>
    </>
  )
}
