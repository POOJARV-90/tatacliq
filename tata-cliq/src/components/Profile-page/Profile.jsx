import React, { useEffect, useState } from "react";
import "./Profile.css";
import Navbar from "../Navbar";
import { Authcontext } from "../Context/Authcontext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { login } = useContext(Authcontext);
  const [display, setDisplay] = useState(false);
  const router = useNavigate();
  const [userData, setUserData] = useState({});
  // console.log(userData, "abc");
  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("CurrentUser"));
    if (!currentUser) {
      router("/");
    }
    const allUsers = JSON.parse(localStorage.getItem("Users"));
    if (currentUser && allUsers) {
      for (var i = 0; i < allUsers.length; i++) {
        if (
          allUsers[i].email == currentUser.email &&
          allUsers[i].password == currentUser.password
        ) {
          setUserData(allUsers[i]);
        }
      }
    }
  }, []);

  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const currentUser = JSON.parse(localStorage.getItem("CurrentUser"));
    const allUsers = JSON.parse(localStorage.getItem("Users"));
    for (var i = 0; i < allUsers.length; i++) {
      if (
        allUsers[i].email == currentUser.email &&
        allUsers[i].password == currentUser.password
      ) {
        allUsers[i].name = userData.name;
        allUsers[i].password = userData.password;
        currentUser.password = userData.password;
        currentUser.name = userData.name;
      }
    }

    login(currentUser);
    localStorage.setItem("CurrentUser", JSON.stringify(currentUser));
    localStorage.setItem("Users", JSON.stringify(allUsers));
    setUserData({});
    alert("Profile updated.");
  }
  return (
    <>
      <Navbar />
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
              <span>Address Book</span>
            </div>
            <div>
              {" "}
              <img
                src="https://www.tatacliq.com/src/account/components/img/brand.svg"
                alt=""
              />{" "}
              <span>Brands</span>
            </div>
            <div>
              {" "}
              <img
                src="https://www.tatacliq.com/src/account/components/img/card.svg"
                alt=""
              />{" "}
              <span>Saved Payments</span>
            </div>
            <div>
              {" "}
              <img
                src="https://www.tatacliq.com/src/account/components/img/alert.svg"
                alt=""
              />{" "}
              <span>Alerts & Coupons</span>
            </div>
            <div>
              {" "}
              <img
                src="https://www.tatacliq.com/src/account/components/img/giftCards.svg"
                alt=""
              />{" "}
              <span>Gift Card</span>
            </div>
            <div>
              {" "}
              <img
                src="https://www.tatacliq.com/src/account/components/img/cliqCash.svg"
                alt=""
              />{" "}
              <span>CLiQ Cash</span>
            </div>
            <div>
              {" "}
              <img
                src="https://www.tatacliq.com/src/account/components/img/addressbook.svg"
                alt=""
              />{" "}
              <span>Manage Notifications</span>
            </div>
            <div>
              {" "}
              <img
                src="	https://www.tatacliq.com/src/account/components/img/settingsRed.svg"
                alt=""
              />{" "}
              <span>Profile</span>
            </div>
          </div>
          <div id="Right-pro">
            <h3>General Information </h3>
            <div>
              <p>
                <span>Basic Details</span> <span onClick={open}>Add</span>{" "}
              </p>

              <div>
                <div>
                  <div>First Name</div>
                  <input type="text" placeholder="First Name" />
                </div>

                <div>
                  <div>Last Name</div>
                  <input type="text" placeholder="Last Name" />
                </div>

                <div>
                  <div>Date of Birth</div>
                  <input type="text" placeholder="dd-mm-yyyy" />
                </div>
              </div>
            </div>

            <div>
              <p>
                <span>Contact Details</span> <span>Edit</span>{" "}
              </p>

              <div>
                <div>
                  <div>Mobile Number</div>
                  <input type="text" placeholder="Mobile Number" />
                </div>

                <div>
                  <div>E-mail</div>
                  <input type="text" placeholder="Email" />
                </div>
              </div>
            </div>

            <div>
              <p>
                <span>Personal Details</span> <span>Add</span>{" "}
              </p>

              <div>
                <div>
                  <div>Gender</div>
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>
          <div id="profile-info">
            <div></div>

            <p>{userData.name} </p>
            <p>{userData.email}</p>
          </div>
        </div>

        {display && (
          <div id="edit">
            <form onSubmit={handleSubmit}>
              <h1>Profile</h1>
              <label>Change Name</label>
              <br />
              <input
                type="text"
                value={userData.name}
                name="name"
                onChange={handleChange}
              />
              <br />
              <label>Change Password</label>
              <br />
              <input
                type="text"
                value={userData.password}
                name="password"
                onChange={handleChange}
              />
              <br />
              <input type="submit" />
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
