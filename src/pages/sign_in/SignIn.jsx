import React from 'react'
import './SignIn.css';
export default function SignIn() {
  return (
    <>
    <div className='sign-in-container'>
       <h1 className='sign-in-title'>Sign in or create an account</h1>
       <div className='sign-in-form'>
          <h1>* indicates required field</h1>
          <form>
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password *</label>
            <input type="password" id="password" name="password" required />
            <div className='remember-me'>
              <input type="checkbox" id="remember-me" name="remember-me" />
            <label htmlFor="remember-me">Keep me signed in</label>
            </div>
            
            <p className='forgot-password'>Forgot your password?</p>
            <p className='forgot-password'>Forget your username?</p>

            <button className='sign-in-button' type="submit">Sign In</button>
          </form>
       </div>
       <div className='rewards-container'>
       <h1 className='rewards-title'>JOIN STARBUCKS® REWARDS</h1>
       <p>As a member, start earning free food and drinks, unlock our best offers and celebrate your birthday with a treat from us. Best of all, it's free to join.</p>
       <button className='join-now-button'>Join Now</button>
     </div>
     <hr/>
    </div>
    </>
  )
}