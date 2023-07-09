import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <div id="Profile-body">

        <div id="another">
        <div id="left-pro">
          <h3>Menu </h3>

          <div>
            <img
              src="https://www.tatacliq.com/src/general/components/img/WL5.svg"
              alt=""
            />{" "}
            <span>My Wishlist</span>
          </div>
          <div>
            {" "}
            <img
              src="https://www.tatacliq.com/src/general/components/img/order-history.svg"
              alt=""
            />{" "}
            <span>Order History</span>
          </div>
          <div>
            {" "}
            <img
              src="https://www.tatacliq.com/src/account/components/img/addressbook.svg"
              alt=""
            />{" "}
            <span>
Address Book</span>
          </div>
          <div>
            {" "}
            <img
              src="https://www.tatacliq.com/src/account/components/img/brand.svg"
              alt=""
            />{" "}
            <span>
Brands</span>
          </div>
          <div>
            {" "}
            <img
              src="https://www.tatacliq.com/src/account/components/img/card.svg"
              alt=""
            />{" "}
            <span>
Saved Payments</span>
          </div>
          <div>
            {" "}
            <img
              src="https://www.tatacliq.com/src/account/components/img/alert.svg"
              alt=""
            />{" "}
            <span>
Alerts & Coupons</span>
          </div>
          <div>
            {" "}
            <img
              src="https://www.tatacliq.com/src/account/components/img/giftCards.svg"
              alt=""
            />{" "}
            <span>
Gift Card</span>
          </div>
          <div>
            {" "}
            <img
              src="https://www.tatacliq.com/src/account/components/img/cliqCash.svg"
              alt=""
            />{" "}
            <span>
CLiQ Cash</span>
          </div>
          <div>
            {" "}
            <img
              src="https://www.tatacliq.com/src/account/components/img/addressbook.svg"
              alt=""
            />{" "}
            <span>
Manage Notifications</span>
          </div>
          <div>
            {" "}
            <img
              src="	https://www.tatacliq.com/src/account/components/img/settingsRed.svg"
              alt=""
            />{" "}
            <span>
Profile</span>
          </div>
        </div>
        <div id="Right-pro">
        
        <h3>General Information </h3>

        <div>
          <p>
            <span></span>
            <span></span>
          </p>



        </div>
        
        </div>
        <div id="profile-info"></div>

        </div>
      </div>
    </>
  );
};

export default Profile;
