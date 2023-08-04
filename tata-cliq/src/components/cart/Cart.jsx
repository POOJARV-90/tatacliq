import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  // const Checkoutdata = useNavigate();
  // function gotoCheckout() {
  //   Checkoutdata("/Cartshipform");
  // }

  const [finalprice, setFinalPrice] = useState(0);
  const [userCart, setUserCart] = useState([]);
  const router = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("CurrentUser"));
    if (user?.email) {
      const allUsers = JSON.parse(localStorage.getItem("Users"));
      for (var i = 0; i < allUsers.length; i++) {
        if (
          allUsers[i].email == user.email &&
          allUsers[i].password == user.password
        ) {
          setUserCart(allUsers[i].cart);
          break;
        }
      }
    } else {
      alert("Please login to watch all cart products.");
      router("/login");
    }
  }, []);

  useEffect(() => {
    if (userCart.length) {
      var totalprice = 0;
      for (var i = 0; i < userCart.length; i++) {
        totalprice += parseInt(userCart[i].price);
      }
      setFinalPrice(totalprice);
    }
  }, [userCart]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("CurrentUser"));
    if (user) {
      if (user?.role == "Seller") {
        alert("Access granted only to Buyer.");
        router("/");
      }
    } else {
      alert("You are not a Logged in user.");
      router("/practicelogin");
    }
  }, []);

  function checkout() {
    const user = JSON.parse(localStorage.getItem("CurrentUser"));
    if (user?.email) {
      const allUsers = JSON.parse(localStorage.getItem("Users"));
      for (var i = 0; i < allUsers.length; i++) {
        if (
          allUsers[i].email == user.email &&
          allUsers[i].password == user.password
        ) {
          allUsers[i].cart = [];
          break;
        }
      }
      localStorage.setItem("Users", JSON.stringify(allUsers));
    }
    setFinalPrice([]);
    setUserCart([]);
    alert("Your products will be delivered soon. Thankyou for shopping!");
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

                {userCart &&
                  userCart.map((pro) => (
                    <div id="cart-product-added">
                      <div id="cart-product-img">
                        <img src={pro.image} alt="" />
                      </div>
                      <div>
                        <div>
                          <p>{pro.name}</p>{" "}
                          <span>Delivery by 14th JulFREE</span>
                        </div>
                        <span>₹{pro.price}.00</span>
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
                  ))}

                <button onClick={() => router("/Allproduct")} id="button-0">
                  Countine Shopping
                </button>
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
                      <span> {finalprice}</span>
                    </div>

                    <div>
                      <span>Shipping Charge</span>
                      <span>
                        <b className="color">FREE</b>
                      </span>
                    </div>

                    <div>
                      <span>Bag Subtotal</span>
                      <span>₹ {finalprice - 200}</span>
                    </div>
                  </div>
                </div>

                <div id="whole-amt">
                  <div className="font-style">
                    Total <br /> ₹ {finalprice - 200}
                  </div>

                  <button onClick={checkout} id="checkout">
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
