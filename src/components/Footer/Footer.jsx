import React from 'react'
import './Footer.css';
import { assets } from '../../assets/front_assets/assets';
export default function Footer() {
  return (
   <>
   <div className='footer_content'></div>
    <div className='upper_footer'>
      <p>*Valid for new Starbucks Rewards members for 7 days from sign up. Coupon will be available in the offers tab of your Starbucks app following sign up and may take up to 48 hours to arrive. Good at participating U.S. stores for a handcrafted menu-sized beverage with qualifying purchase ($8 max value). Qualifying purchase excludes alcohol, Starbucks Card and Card reloads. Limit one. Cannot be combined with other offers or discounts. Excludes delivery services. Sign up before 6/29/2025.
      </p>
      <hr/>
    </div>
    <div className='footer_links'>
        
        <ul>
            <h1>About Us</h1>
            <li>Our Company</li>
            <li>Our Coffee</li>
            <li>About Starbucks</li>
            <li>Starbucks Archive</li>
            <li>Investor Relations</li>
            <li>Customer Service</li>
            <li>Contact us</li>
        </ul>
        
        <ul>
            <h1>Careers</h1>
            <li>Culture and Values</li>
            <li>Belonging at Starbucks</li>
            <li>College Achievement Plan</li>
            <li>Alumni Community</li>
            <li>U.S. Careers</li>
            <li>International</li>
        </ul>
       
        <ul>
             <h1>Social Impact</h1>
            <li>Communities</li>
            <li>Starbucks Foundation</li>
            <li>Sustainability</li>
            <li>Environmental and Social Impact Reporting</li>
            
        </ul>
       
        <ul>
             <h1>For Business Partner</h1>
            <li>Landlord Support Center</li>
            <li>Suppliers</li>
            <li>Corporate Gift Card Sales</li>
            <li>Office and Foodservice Coffee</li>
        </ul>
        
        <ul>
            <h1>
         Order and Pick Up
        </h1>
            <li>Order on the App</li>
            <li>Order on the Web</li>
            <li>Delivery</li>
            <li>Order and Pick Up Options</li>
            <li>Explore and Find Coffee for Home</li>
        </ul>
    </div>
    <hr/>
    <div className='lower_footer'>
     <div className='footer_logo'>
        <img src={assets.facebook} alt="Facebook" />
        <img src={assets.instagram} alt="Instagram" />
        <img src={assets.youtube} alt="YouTube" />
        <img src={assets.pinterest} alt="Pinterest" />
        <img src={assets.spotify} alt="Spotify" />
     </div>
     <div>
        <ul>
            <li>Privacy Notice</li>
            <li>Consumer Health Privacy Notice</li>
            <li>Term of Use</li>
            <li>Do Not Share My Personal Information</li>
            <li>CA Supply Chain Act</li>
            <li>Accessibility</li>
            <li>Cookie Preferences</li>
        </ul>
     </div>
     <p>© 2025 Starbucks Coffee Company. All rights reserved.</p>
    </div>
   </>
  )
}
