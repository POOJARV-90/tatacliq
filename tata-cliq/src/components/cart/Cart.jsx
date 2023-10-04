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
  const { state } = useContext(Authcontext);
  //  console.log(userCart,"ahdha");
  // Create a state variable to track the quantity of each item in the cart
  const [itemQuantities, setItemQuantities] = useState({});

  useEffect(() => {
    async function getCartProduct() {
      try {
        const response = await axios.post(
          "http://localhost:7000/your-cart-product",
          { userId: state?.user?._id }
        );
        if (response.data.success) {
          // console.log();
          setUserCart(response.data.cartProducts);

          // Initialize item quantities with the default quantity of 1 for each item
          const quantities = {};
          response.data.cartProducts.forEach((item) => {
            quantities[item._id] = 1;
          });
          setItemQuantities(quantities);
        }
      } catch (error) {
        console.log(error, "error in cart");
      }
    }
    if (state?.user?._id) {
      getCartProduct();
    }
  }, [userCart ,state ]);

  useEffect(() => {
    if (userCart.length) {
      var totalprice = 0;
      for (var i = 0; i < userCart.length; i++) {
        totalprice +=
          parseInt(userCart[i].price) * itemQuantities[userCart[i]._id]; // Multiply by item quantity
          console.log(itemQuantities[userCart[i]._id],"itemq");
          console.log(userCart[i]._id,"usercart");
      }
      setFinalPrice(totalprice);
    }
  }, [userCart, itemQuantities]);

  // Function to handle quantity change for an item
  const handleQuantityChange = (itemId, quantity) => {
    // Update the quantity in the state
    const updatedQuantities = { ...itemQuantities };
    updatedQuantities[itemId] = quantity;
    // console.log(quantity,"quantity");
    // console.log(updatedQuantities[itemId],"item");/
    setItemQuantities(updatedQuantities);
  };

  const checkOut = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token,"token here")
      if (token) {
        console.log(token,"token here")
      try {
        const response = await axios.post("http://localhost:7000/remove-all-cart-products", {token});
       
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

  const remove = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      // console.log(token, "token here");
      const response = await axios.post(
        "http://localhost:7000/remove-cart-product",
        {
          productId:id,
          token,
        }
      );
      console.log(response,"data here");
      if (response.data.success) {
        // console.log(response.data.success,"response here");
        toast.success("item removed succesfully");
        // console.log(response.data, "data here");
        setUserCart(response.data.user);
      } else {
        toast.error("Failed to remove the item from the cart.");
        console.error("API Error:", response.data.message);
      }
    } catch (error) {
      toast.error("An error occurred while removing the item from the cart.");
      console.log(error);
    }
  };
  

  return (
    <>
      <div id="body-cart">
        <div id="xyz">
          <div>
            <div onClick={() => router("/")}>
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

              <i className="fa-solid fa-chevron-down"></i>
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
                   
                    <img
                      src="https://www.tatacliq.com/src/cart/components/img/Delivery.svg"
                      alt=""
                    />
                    <span>
                      Congratulations NeuPass User!! Your order is eligible for
                      <b>FREE Shipping!</b>
                    </span>
                  </p>
                </div>

                {userCart.length > 0 &&
                  userCart.map((pro) => (
                    <div id="cart-product-added" key={pro._id}>
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
                          <select
                            name=""
                            id=""
                            value={itemQuantities[pro._id]}
                            onChange={(e) =>
                              handleQuantityChange(
                                pro._id,
                                parseInt(e.target.value)
                              )
                            }
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            {/* Add more options as needed */}
                          </select>

                          <span id="total">
                            <i className="fa-regular fa-heart"></i>
                            <span>Save to wishlist</span>
                          </span>
                          {/* here */}
                          <span onClick={() => remove(pro._id)}>Remove</span>
                        </div>
                      </div>
                    </div>
                  ))}

                <button onClick={() => router("/Allproduct")} id="button-0">
                  Continue Shopping
                </button>
              </div>
              <div id="right-cart">
                <div id="coupon">
                  <div>
                    <img
                      src="https://www.tatacliq.com/src/general/components/img/coupon.png"
                      alt=""
                    />
                    <span>Check for coupon</span>
                    <i className="fa-solid fa-angle-right"></i>
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
                    Total <br /> ₹ {(finalprice * 0.5).toFixed(2)}
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
