import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/front_assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <img src={assets.logo} alt="" className='navbar-logo'/>
        <div className="navbar-content">
            <ul className='navbar-List'>
                <li className='navbar-items'><Link to ='/'>Home</Link></li>
                <li className='navbar-items'><Link to ='/menu'>Menu</Link></li>
                <li className='navbar-items'><Link to ='/reward'>Reward</Link></li>
                <li className='navbar-items'><Link to ='/gift-card'>Gift-Cards</Link></li>
            </ul>
            <div className="navbar-button">
                 <button className="navbar-btn login-btn"><Link to='/sign-in'>Sign Up</Link></button>
                 <button className="navbar-btn signup-btn"><Link to='/join-now'>Join now</Link></button>
            </div>
        </div>
       
    </div>
     <hr className='navbar-hr'/>
    </>
  )
}

export default Navbar
