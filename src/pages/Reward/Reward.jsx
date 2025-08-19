import React from 'react'
import './Reward.css';
import { assets } from '../../assets/front_assets/assets';
function Reward() {
  return (
  <>
  <div className='reward'>
    <div className='reward__header'><p>STARBUCKS® REWARDS</p></div>
    <div className='reward__text'>
      <div className='reward__text__left'>
      <h1>It's a great day for free coffee</h1>
     <p>Sign up and start enjoying the perks of Starbucks® Rewards.</p>
     <button>join now</button>
     <p>It's even better with the app.</p>
      </div>
     <img src={assets.hand} alt='img'/>
    </div>
    <div className='reward__steps__text'>
     <h1>Getting Started is easy</h1>
     <p>Earn Stars and get rewarded in a few easy steps</p>
    </div>

    <div className='reward__steps'>
      <div className='reward__steps__one'>
       <img src={assets.one} alt='one'/>
       <h1>Create an Account</h1>
       <p>To get started, join now</p>
      </div>
      <div className='reward__steps__two'>
       <img src={assets.two} alt=""/>
       <h1>Order and Pay how you'd like</h1>
       <p> Use cash, credit/debit card, or the app. You'll collect Stars all ways.</p>
      </div>
      <div className='reward__steps__three'>
       <img src={assets.three} alt=''/>
       <h1>Earn Stars, Get Rewards</h1>
       <p>As you earn Stars, redeem them for Rewards like free drinks and food!</p>
      </div>
    </div>
    
    <div className='reward__rewards'>
      <h1>Get your favorites for Free</h1>
      <div className='reward__rewards__text'>
        <h2>25</h2>
        <img src={assets.star1}alt=''/>
        <h2>100</h2>
        <img src={assets.star1}alt=''/>
        <h2>200</h2>
        <img src={assets.star1}alt=''/>
        <h2>300</h2>
        <img src={assets.star1}alt=''/>
        <h2>400</h2>
        <img src={assets.star1}alt=''/>
      </div>
    </div>
    
    <div className='reward__extras1'>
     <h1>Endless Extras</h1>
    <p>Unlock benefits like quick ordering, tasty Rewards, and free coffee with Starbucks® Rewards.</p>
    </div>

    <div className='reward_extras'>
      <div className='reward_extras__one'>
        <img src={assets.fun1}alt=''/>
        <h1>Fun freebies</h1>
        <p>Look forward to a birthday treat and more.</p>
      </div>
      <div className='reward_extras__one'>
       <img src={assets.fun2}alt=''/>
        <h1>Order & pay ahead</h1>
        <p>Save time with saved favorites and payment methods.</p>
      </div>
      <div className='reward_extras__one'>
       <img src={assets.fun3}alt=''/>
        <h1>Get to free faster</h1>
        <p>Earn Stars faster with Bonus Star challenges and Double Star Days.</p>
      </div>
    </div>
    
    <div className='reward__ways__text1'>
      <div className='reward__ways__text'>
       <h1>Cash or card, you earn Stars</h1>
       <p>Earn Stars no matter how you pay. Those Stars add up to delicious Rewards.</p>
      </div>
      
      <div className='reward__ways'>
        <div className='reward__ways__one'>
          <h1>1★ per dollar</h1>
          <p>Pay as you go with cash or card.</p>
        </div>
        <div className='reward__ways__two'>
          <img src={assets.onea}alt=""/>
          <h1>Scan and pay separately</h1>
          <p>Use cash or card at the register.</p>
        </div>
        <div className='reward__ways__two'>
          <img src={assets.twoA}alt=''/>
          <h1>Preload funds</h1>
          <p>Add funds to your account through the app.</p>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Reward
