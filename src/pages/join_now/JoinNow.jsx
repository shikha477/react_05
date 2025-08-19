import React from 'react'
import './joinNow.css';
function JoinNow() {
  return (
    <div className="join-now">
      <h1 className='join-now-title'>Create an account</h1>
      <p className='join-now-subtitle'>STARBUCKS® REWARDS</p>
      <p className='join-now-description'>Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and more.</p>
      <div className='join-now-form'>
        <h1 className='join-now-form-title'>* indicates required field</h1>
        <h2 className='join-now-form-subtitle'>Personal Information</h2>
        <form>
          <label htmlFor="firstName">First Name*</label>
          <input type="text" id="firstName" name="firstName" required />

          <label htmlFor="lastName">Last Name*</label>
          <input type="text" id="lastName" name="lastName" required />
           
          <h1>Account Security</h1>
          <label htmlFor="email">Username*</label>
          <input type="text" id="email" name="email" required />
          
          <p className='p1'>This will be your username</p>
          <label htmlFor="password">Password*</label>
          <input type="password" id="password" name="password" required />

          <label htmlFor="confirmPassword">Confirm Password*</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />

          <p className='join-now-form-password-info'>Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.</p>

        </form>
        <div className='join-now-form-checkboxes'>
          <h1 >Already have a Starbucks gift card?</h1>
          <h2>COLLECT MORE STARS & EARN REWARDS</h2>
          <p>Email is a great way to know about offers and what's new from Starbucks.</p>
           <input type="checkbox" id="remember-me" name="remember-me" />
            <label htmlFor="remember-me">Yes, I'd like email from Starbucks</label>
            <p className='join-now-form-checkboxes-info'>Know about initiatives, announcements and product offers.</p>
            <h1 className='join-now-form-checkboxes-title'>TERMS OF USE</h1>
            <input type="checkbox" id="terms-of-use" name="terms-of-use" />
            <label htmlFor="terms-of-use">* I agree to the Starbucks® Rewards Terms.</label>
            <button className='join-now-button' type="submit">Creat account</button>

        </div>
      </div>
     
    </div>
    
  )
}

export default JoinNow
