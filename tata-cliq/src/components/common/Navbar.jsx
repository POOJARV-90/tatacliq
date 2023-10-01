import React, { useContext, useEffect, useState } from "react";
import "../Style/Navbar.css";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../Context/Authcontext";
import axios from "axios";
import { toast } from "react-hot-toast";
import Register from "../Register";

const Navbar = () => {
  const { state, dispatch } = useContext(Authcontext);
  // ---------------------------------------------------------------
  const [display, setDisplay] = useState(false); //category
  const [loginopen, setLoginopen] = useState(false);
  const [regopen, setRegopen] = useState(false);
  const [open, setOpen] = useState(false); //category
  const [isbackgroundColor, setIsbackgroundColor] = useState(false);//category
  const router = useNavigate();
  const [userdata, setUserdata] = useState({
    email: "",
    password: "",
  });
  const hangleChangeLogin = (event) => {
    setUserdata({ ...userdata, [event.target.name]: event.target.value });
  };

  // -----------------------for cart----------------------

  const handleMouseEnter = () => {
    setDisplay(true);
  };

  const handleMouseLeave = () => {
    setDisplay(false);
  };

  const letopen = () => {
    setLoginopen(true);
    setRegopen(false);
  };

  const letclose = () => {
    setLoginopen(false);
  };

  // const [regopen, setRegopen] = useState(false);

  const letopenREG = () => {
    setLoginopen(false);
    setRegopen(true);
  };

  const letcloseREG = () => {
    setRegopen(false);
  };

  //   --------------------for categories--------------------------

  const letOpen = () => {
    setOpen(true);
    setIsbackgroundColor(true);
  };
  const letClose = () => {
    setOpen(false);
    setIsbackgroundColor(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userdata.email && userdata.password) {
      const response = await axios.post("http://localhost:7000/login", {
        userdata,
      });
      if (response.data.success) {
        dispatch({
          type: "LOGIN",
          payload: response.data.user,
        });
        localStorage.setItem("token", JSON.stringify(response.data.token));
        setUserdata({ email: "", password: "" });
        router("/");
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } else {
      toast.error("All fields are mandtory.");
    }
  };

  useEffect(() => {
    if (state?.user) {
      setUserdata(state?.user);
    } else {
      setUserdata({});
    }
  }, [state]);

  console.log(userdata, "datahere");
  return (
    <>
      <div id="navbar">
        <div id="tata-logo">
          <div onClick={() => router("/")}>
            <img
              src="http://www.pngimagesfree.com/LOGO/T/Tata-CLiQ/Tata-cliq-logo-PNG-White.png"
              alt=""
            />
          </div>
        </div>
        <div id="nav-option">
          <div id="up-bar">
            <span>Tata CLiQ Luxury</span>
            <span>
              <span>CLiQ Cash </span>
              <span>Gift Card</span>
              <span>CLiQ Care</span>
              <span>Track Orders</span>
              <span onClick={letopen}>
                <i class="fa-regular fa-circle-user fa-lg"></i>
              </span>

              {userdata?.email && (
                <span onMouseEnter={handleMouseEnter}>
                  {userdata.name}
                  <i className="fa-solid fa-chevron-down fa-lg"></i>
                </span>
              )}
              {!userdata?.email && (
                <span onClick={letopen}>
                  {" "}
                  Login/SignUp{" "}
                  <i className="fa-solid fa-chevron-down fa-lg"></i>
                </span>
              )}

              {state?.user?.role == "Seller" && (
                <span onClick={() => router("/AddProduct")}>
                  <i className="fa-solid fa-plus">
                    {" "}
                    <small>ADD</small>
                  </i>
                </span>
              )}
            </span>

            {display && (
              <div id="profile-down" onMouseLeave={handleMouseLeave}>
                <div onClick={() => router("/Profile")}>
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/profile.png"
                    alt=""
                  />{" "}
                  <p>My Account</p>
                </div>
                <div>
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/order-history.svg"
                    alt=""
                  />{" "}
                  <p>Order History</p>
                </div>
                <div onClick={() => router("/Wishlist")}>
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL5.svg"
                    alt=""
                  />{" "}
                  <p>My Wishlist</p>
                </div>
                <div>
                  <img
                    src="https://www.tatacliq.com/src/account/components/img/alert.svg"
                    alt=""
                  />{" "}
                  <p>Alert & Coupon</p>
                </div>
                <div>
                  <img
                    src="https://www.tatacliq.com/src/account/components/img/giftCards.svg"
                    alt=""
                  />{" "}
                  <p>Gift Card</p>
                </div>
                <div>
                  <img
                    src="https://www.tatacliq.com/src/account/components/img/cliqCash.svg"
                    alt=""
                  />{" "}
                  <p>CLiQ Cash</p>
                </div>
                {/* onClick={logout} */}
                <div>
                  <img
                    src="https://www.tatacliq.com/src/account/components/img/settings.svg"
                    alt=""
                  />{" "}
                  <p>Logout</p>
                </div>
              </div>
            )}
          </div>
          <div id="down-bar">
            <div
              className="margin-top"
              onMouseEnter={letOpen}
              onMouseLeave={letClose}
              style={{
                backgroundColor: isbackgroundColor ? "white" : "#212121",
                color: isbackgroundColor ? "black" : "white",
              }}
            >
              Categories <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className="margin-top">
              Brand <i className="fa-solid fa-angle-down"></i>
            </div>
            <div>
              <div>
                {" "}
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="Search for Brands" />
              </div>
            </div>
            <div id="down-bar-logo">
              <i
                className="fa-regular fa-heart fa-lg"
                onClick={() => router("/Wishlist")}
              ></i>
              <i
                className="fa-solid fa-bag-shopping fa-lg"
                onClick={() => router("/Cart")}
              ></i>
            </div>
          </div>

          {open && (
            <div
              id="categories-down"
              onMouseEnter={letOpen}
              onMouseLeave={letClose}
            >
              <div id="rowone">
                <p onClick={() => router("/Allproduct")}>Explore</p>
                <p onClick={() => router("/WomensMultiplepro")}>
                  Women's Fashion
                </p>
                <p onClick={() => router("/MensMultiplepro")}>Men's Fashion</p>
                <p onClick={() => router("/Kidswear")}>Kid's Fashion</p>
                <p onClick={() => router("/HomeKit")}>Home & Kitchen</p>
                <p onClick={() => router("/Beauty")}>Beauty</p>
                <p onClick={() => router("/Gadget")}>Gadgets</p>
                <p onClick={() => router("/Jwellery")}>Jewellery</p>
                <p onClick={() => router("/Accessories")}>Accessories</p>
              </div>
            </div>
          )}
        </div>

        {loginopen && (
          <>
            <div id="login-body">
              <div id="login">
                <span onClick={letclose}>
                  <i className="fa-solid fa-x"></i>
                </span>
                <h1>Welcome to Tata </h1>
                <h1>CLiQ</h1>

                <form onSubmit={handleSubmit}>
                  <input
                    placeholder="E-mail Address"
                    type="email"
                    name="email"
                    onChange={hangleChangeLogin}
                    value={userdata.email}
                  />

                  <br />

                  <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={hangleChangeLogin}
                    value={userdata.password}
                  />

                  <p>
                    By continuing, you agree to our <b>Terms of Use</b> and{" "}
                    <b>Privacy Policy</b>{" "}
                  </p>
                  <p>
                    haven't registered yet here ?{" "}
                    <b onClick={letopenREG}>Click here</b>
                  </p>

                  <input id="button-login" type="submit" value="Login" />
                </form>
              </div>
            </div>
          </>
        )}

        

        {regopen && (
          <Register letcloseREG={letcloseREG} onClose={letcloseREG} />
        )}
      </div>
    </>
  );
};

export default Navbar;
