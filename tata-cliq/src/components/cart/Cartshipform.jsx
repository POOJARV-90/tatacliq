import React from "react";
import "../cart/Checkout.css";

const Cartshipform = () => {
  return (
    <>
      <div id="xyz">
        <div>
          <div>
            <img
              src="http://www.pngimagesfree.com/LOGO/T/Tata-CLiQ/Tata-cliq-logo-PNG-White.png"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://www.tatacliq.com/src/general/components/img/profile.png"
              alt=""
            />

            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>

      <div id="checkout-body">
        <h1>checkout</h1>
        <div>
          <div id="check-left">
            <div id="left-head">
              <p>
                <span>1</span> <span>Add Shipping Address</span>
              </p>
              <span>Clear all</span>
            </div>

            <div id="checkout-form-body">
              <div id="left-input">
                <div>
                  <input type="text" placeholder="First Name(Required)*" />
                  <input type="text" placeholder="  Last Name(Required)*" />
                </div>
                <input
                  type="text"
                  className="input-field"
                  placeholder="First Name(Required)*"
                />{" "}
                <br />
                <input
                  type="text"
                  className="input-field"
                  placeholder="State(Required)*"
                />
                <br />
                <select name="">
                  <option value=""></option>
                  <option value="">Land Mark</option>
                </select>
                <p id="radio-button">
                  {" "}
                  <span>
                    <i class="fa-solid fa-check"></i>
                  </span>{" "}
                  <b>Home</b>{" "}
                  <span>
                    <i class="fa-solid fa-check"></i>
                  </span>{" "}
                  <b>Office</b>{" "}
                </p>
              </div>

              <div id="right-input">
                <input
                  type="text" placeholder="Enter your PIN code(Required)*
                  "
                  style={{ marginTop: "0%" }}
                  className="input-field"
                />

                <input
                  type="text"
                  placeholder="Flat/house/no,bldg Company/Apartment/Nmae,Road/Street Name , Area, Colony, Sector,(Required)*"
                />
                <p>Character Limit : 120</p>

                <input
                  type="text"
                  className="input-field"
                  placeholder="Enter 10 digit mobile No"
                />
                <br />
              </div>
              
            </div>
            <div id="sumit-bill">
              <span>Cancel</span>
              <span><button>Save & Continue</button></span>

              
            </div>
          </div>
          <div id="check-right" >
                <div id="coupan" >
                  <div>
                   
                  </div>

                  <div id="cart-total-amt">
                    <div>
                      <span>Bag Total</span>
                      <span>₹2499.00</span>
                    </div>

                    <div>
                      <span>Shipping Charge</span>
                      <span>
                        <b className="color">FREE</b>
                      </span>
                    </div>

                    <div>
                      <span>Bag Subtotal</span>
                      <span>₹2499.00</span>
                    </div>
                  </div>
                </div>

                <div id="checkout-total-bill" >

                  <span>Total Payable</span>
                  <span>₹2499.00</span>
                  
                 
                </div>
              </div>
        </div>
      </div>
    </>
  );
};

export default Cartshipform;
