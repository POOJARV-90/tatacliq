import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
        <div id='navbar'>
            <div id='tata-logo'>
                <div><img src="http://www.pngimagesfree.com/LOGO/T/Tata-CLiQ/Tata-cliq-logo-PNG-White.png" alt="" /></div>
            </div>
            <div id='nav-option'>

                <div id='up-bar'>
                    <span>Tata CLiQ Luxury</span>
                    <span>
                        <span>CLiQ Cash</span>
                        <span>Gift Card</span>
                        <span>CLiQ Care</span>
                        <span>Track Orders</span>
                        <span>Sign in / Sign Up</span>

                    </span>

                </div>
                <div id='down-bar'>
                   <div className='margin-top'>Categories <i class="fa-solid fa-angle-down"></i></div>
                   <div className='margin-top'>Brand <i class="fa-solid fa-angle-down"></i></div>
                   <div>
                    <div> <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="search" placeholder='Search for Brands' /></div>
                   </div>
                   <div id='down-bar-logo'>
                   <i class="fa-regular fa-heart fa-lg"></i>
                   <i class="fa-solid fa-bag-shopping fa-lg"></i>
                   </div>

                </div>
            </div>
           

        </div>

        </>
    )
}

export default Navbar