import React from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const Checkoutdata = useNavigate();
  function gotoCheckout() {
    Checkoutdata("/Cartshipform");
  }
  return (
    <>
      <div id="body-cart">
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

        <div id="other-bar">
          <div>My Bag</div>
          <p>
            {" "}
            Delhi,11{" "}
            <u>
              {" "}
              <span>change pincode</span>
            </u>
          </p>
        </div>

        <div id="cart-body">
          <div>
            <p>
              Apply a relevant <b>coupon code</b> here to avail any additional
              discount. Applicable <b>cashback</b> if any will be credited to
              your account as per T&C.
            </p>

            <div id="cart-details">
              <div id="left-cart">
                <div id="into-cart">
                  <p>
                    {" "}
                    <img
                      src="https://www.tatacliq.com/src/cart/components/img/Delivery.svg"
                      alt=""
                    />{" "}
                    <span>
                      Congratulations NeuPass User!! Your order is eligible for{" "}
                      <b>FREE Shipping!</b>{" "}
                    </span>{" "}
                  </p>
                </div>

                <div id="cart-product-added">
                  <div id="cart-product-img">
                    <img
                      src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017813539_437Wx649H_202306022341581.jpeg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div>
                      <p>LOV by Westside Printed Fuchsia Dress</p>{" "}
                      <span>Delivery by 14th JulFREE</span>
                    </div>
                    <span>₹2499.00</span>
                    <p id="abc">
                      <span>Color: Fuchsia</span> <span>Size: S</span>
                    </p>

                    <div id="sum-up">
                      <span>Quantity:</span>
                      <select name="" id="">
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                      </select>

                      <span id="total">
                        <i class="fa-regular fa-heart"></i>
                        <span>Save to wishlist</span>
                      </span>
                      <span>Remove</span>
                    </div>
                  </div>
                </div>

                <button id="button-0">Countine Shopping</button>
              </div>
              <div id="right-cart">
                <div id="coupan">
                  <div>
                    <img
                      src="https://www.tatacliq.com/src/general/components/img/coupon.png"
                      alt=""
                    />
                    <span>Check for coupan</span>
                    <i class="fa-solid fa-angle-right"></i>
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

                <div id="whole-amt">
                  <div className="font-style">
                    Total <br /> ₹ 2499
                  </div>

                  <button id="checkout" onClick={gotoCheckout}>
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
