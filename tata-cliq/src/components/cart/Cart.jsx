import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Authcontext } from "../Context/Authcontext";
import toast from "react-hot-toast";

const Cart = () => {
  
  const [finalprice, setFinalPrice] = useState(0);
  const [userCart, setUserCart] = useState([]);
  const router = useNavigate();
  const {state} = useContext(Authcontext)

  useEffect(() => {
    async function getCartProduct() {
      try {
          const response = await axios.post('http://localhost:7000/your-cart-product', { userId: state?.user?._id })
          if (response.data.success) {
            setUserCart(response.data.cartProducts)
          }
      } catch (error) {
          console.log(error, "error in cart")
      }
  }
  if (state?.user?._id) {
      getCartProduct()
  }
  }, [state]);

  useEffect(() => {
    if (userCart.length) {
      var totalprice = 0;
      for (var i = 0; i < userCart.length; i++) {
        totalprice += parseInt(userCart[i].price);
      }
      setFinalPrice(totalprice);
    }
  }, [userCart]);

  
  const checkOut = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token,"token here")
      if (token) {
        console.log(token,"token here")
      try {
        const response = await axios.post("http://localhost:7000/remove-all-cart-products", {token});
        // console.log(response.data.success,"response here");
        if (response.data.success) {
          toast.success(response.data.message);
          setUserCart([]);
          setFinalPrice([])
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };
  return (
    <>
      <div id="body-cart">
        <div id="xyz">
          <div>
            <div onClick={()=>router("/")}>
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
                      <span>₹ {(finalprice * 0.5).toFixed(2)} ₹ </span>
                    </div>
                  </div>
                </div>

                <div id="whole-amt">
                  <div className="font-style">
                    Total <br /> ₹  {(finalprice * 0.5).toFixed(2)}
                  </div>

                  <button onClick={checkOut} id="checkout">
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
