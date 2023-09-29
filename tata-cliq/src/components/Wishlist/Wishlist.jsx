import React from "react";
import "../Wishlist/Wishlistpage.css"
import wishlistdata from "../Wishlist/Wishlistpro.json";
import Navbar from "../common/Navbar";

const Wishlist = () => {
  return (
    <>
      <Navbar />
      <div id="wishlist-head">
        <h1>My Wishlist</h1>
      </div>

      <div id="wishlist-body">
        <div id="wishlist-body-pro">
          {wishlistdata.map((Wishlistpro) => (
            <div>
              <div>
                
                <img src={Wishlistpro.image}/>
                <img src={Wishlistpro.image2}/>


              </div>
              <button id="button-to-bag">Add to bag</button>
              <p> {Wishlistpro.brand}


</p>
              <p> {Wishlistpro.description}</p>
              <h5> ₹{Wishlistpro.price}</h5>
              <span>{Wishlistpro.other}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
