import React, { useState } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const[display,setDisplay] = useState(false)
    const gotopro = useNavigate();

    function gotoprofile() {
        gotopro("/Profile");
    }
    
    // const handleclick = () => {
    //     setDisplay(!display)
    // }
    // const gayab = () =>{
    //     setDisplay(!display)
    // }

    const handleMouseEnter = () => {
        setDisplay(true)
      }
    
      const handleMouseLeave = () => {
        setDisplay(false)
      }
    return (
        <>
        <div id='navbar'>
            <div id='tata-logo'>
                <div><img src="http://www.pngimagesfree.com/LOGO/T/Tata-CLiQ/Tata-cliq-logo-PNG-White.png" alt="" /></div>
            </div>
            <div id='nav-option'>

                <div id='up-bar'onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                    <span>Tata CLiQ Luxury</span>
                    <span>
                        <span>CLiQ Cash</span>
                        <span>Gift Card</span>
                        <span>CLiQ Care</span>
                        <span>Track Orders</span>
                        <span><i class="fa-regular fa-circle-user fa-lg"></i></span>
                        <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><  i class="fa-solid fa-chevron-down fa-lg"></i></span>

                    </span>
                    { display &&
                     <div id='profile-down'>
                       <div onClick={gotoprofile}><img src="https://www.tatacliq.com/src/general/components/img/profile.png" alt=""  /> <p>My Account</p></div>
                       <div><img src="https://www.tatacliq.com/src/general/components/img/order-history.svg" alt="" /> <p>Order History</p></div>
                       <div><img src="https://www.tatacliq.com/src/general/components/img/WL5.svg" alt="" /> <p>My Wishlist</p></div>
                       <div><img src="https://www.tatacliq.com/src/account/components/img/alert.svg" alt="" /> <p>Alert & Coupon</p></div>
                       <div><img src="https://www.tatacliq.com/src/account/components/img/giftCards.svg" alt="" /> <p>Gift Card</p></div>
                       <div><img src="https://www.tatacliq.com/src/account/components/img/cliqCash.svg" alt="" /> <p>CLiQ Cash</p></div>
                       <div><img src="https://www.tatacliq.com/src/account/components/img/settings.svg" alt="" /> <p>Logout</p></div>

                     </div>
}

                   

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