import React, { useContext, useEffect, useState } from "react";
// import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Authcontext } from "../Context/Authcontext";
import Navbar from "../Navbar";

const Singlepoduct = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [products, setProducts] = useState([]);
  const [single, setSingle] = useState({});
  const { id } = useParams();
  const router = useNavigate();
  const { state } = useContext(Authcontext);
  const [isProductExist, setIsProductExist] = useState(false);
  const [userData, setUserData] = useState({});
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    image: "",
    category: "Other",
  });
  const [allowUpdate, setAllowUpdate] = useState(false);

  useEffect(() => {
    if (state) {
      setUserData(state.user);
    }
  }, [state]);

  useEffect(() => {
    const productFromDB = JSON.parse(localStorage.getItem("Products"));
    if (productFromDB) {
      setIsProductExist(true);
      setProducts(productFromDB);
    } else {
      setIsProductExist(false);
    }
  }, []);

  useEffect(() => {
    if (isProductExist) {
      if (id && products.length) {
        const res = products.find((pro) => pro.id == id);
        setSingle(res);
      }
    }
  }, [id, products]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("CurrentUser"));
    // console.log(user, "uzer");
    if (user) {
      setIsUserLoggedIn(true);
      setCurrentUserEmail(user.email);
    }
  }, []);

  function addCart() {
    if (isUserLoggedIn) {
      const users = JSON.parse(localStorage.getItem("Users"));
      for (let i = 0; i < users.length; i++) {
        if (users[i].email == currentUserEmail) {
          users[i]?.cart?.push(single);
          localStorage.setItem("Users", JSON.stringify(users));
          break;
        }
      }
      alert("Product successfully added to cart!");
      router("/Allproduct");
    } else {
      alert("You can't add a product before logging in!");
    }
  }

  function uptoDate() {
    setAllowUpdate(true);
  }

  function closeUpate() {
    setAllowUpdate(false);
  }

  function handleChange(e) {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  }

  function selectRole(e) {
    setProductData({ ...productData, ["category"]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const allProduct = JSON.parse(localStorage.getItem("Products"));
    for (let i = 0; i < allProduct.length; i++) {
      if (allProduct[i].id === id) {
        allProduct[i].image = productData.image;
        allProduct[i].name = productData.name;
        allProduct[i].price = productData.price;
        allProduct[i].category = productData.category;
        single.image = productData.image;
        single.name = productData.name;
        single.price = productData.price;
        single.category = productData.category;

        localStorage.setItem("Products", JSON.stringify(allProduct));
        setProductData({ name: "", price: "", image: "", category: "Other" });
        alert("Product Updated!");
      }
    }
  }

  return (
    <>
      <Navbar />
      <div id="single-pro-body">
        <div id="Container">
          <div id="left-container">
            <div>
              <div>
                <img src={single.image} />
              </div>
              <div>
                <img src={single.image} alt="" />
              </div>
            </div>
            <div>
              <div>
                <img src={single.image} alt="" />
              </div>
              <div>
                <img src={single.image} alt="" />
              </div>
              <div>
                <img src={single.image} alt="" />
              </div>
            </div>
          </div>
          <div id="right-container">
            <div id="right-1">
              <h3>{single.name}</h3>
              <p></p>
              <b>₹{single.price}</b>
              <span>
                MRP:
                <s>₹1799 </s>
              </span>
              <b>63% Off</b> <br />
              <span>{single.category}</span>
              <div>
                <p>
                  Use MENSEOSS coupon to get 10% off on cart value 1999/- and
                  above.
                </p>
                <span>
                  5 <i class="fa-solid fa-star fa-xs"></i>
                </span>{" "}
                <span>
                  {" "}
                  <b>1</b> Rating{" "}
                </span>
                <p>
                  Earn{" "}
                  <img
                    width={"28px"}
                    height={"18px"}
                    src="https://www.tatacliq.com/src/account/components/Neupass_CircleBG.svg "
                    alt=""
                  />
                  2.67 Neucoins on this order
                </p>
              </div>
            </div>

            <div id="right-2">
              <p>
                <span>Select size </span>
                <span>Size Guide </span>
              </p>

              <div>
                <span>XXS</span>
                <span>XS</span>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
                <span>XXL</span>
                <span>XL</span>
              </div>
              <p>
                Size out of stock?
                <b>View Similar</b> <br /> <br />
                Model is 6'0"/185 cms and is wearing size M <br />
                Polyester Recycled, Machine Wash
              </p>
            </div>

            <div id="right-3">
              <h4>Available Offers</h4>

              <div id="bank-info">
                <img
                  src="https://assets.tatacliq.com/medias/sys_master/images/27678831411230.png"
                  alt=""
                />
                <p>
                  10% Instant Discount on Kotak Bank Credit Cards only. <br />
                  Min Purchase: ₹2500 | Max Discount: ₹1000
                  <b>more</b>
                </p>
              </div>

              <div id="bank-info">
                <img
                  src="https://assets.tatacliq.com/medias/sys_master/images/27678831280158.png"
                  alt=""
                />
                <p>
                  10% Instant Discount on Kotak Bank Credit Cards only. <br />
                  Min Purchase: ₹2500 | Max Discount: ₹1000
                  <b>more</b>
                </p>
              </div>

              <div id="bank-info">
                <img
                  src="https://assets.tatacliq.com/medias/sys_master/images/27678831280158.png"
                  alt=""
                />
                <p>
                  10% Instant Discount on Kotak Bank Credit Cards only. <br />
                  Min Purchase: ₹2500 | Max Discount: ₹1000
                  <b>more</b>
                </p>
              </div>
            </div>

            <div id="right-4">
              <h3>Ship To</h3>
              <p className="the-input">
                <input type="text" placeholder=" Mumbai, 40022" />
                <span>Change Pincode</span>
              </p>

              <div id="tata-delivery">
                <div>
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/deliveryIcon.svg"
                    alt=""
                  />

                  <p>
                    {" "}
                    Delivery by<b> 14th Jul</b>
                  </p>
                </div>

                <div>
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/returnReplacementIcon.svg"
                    alt=""
                  />

                  <p>
                    Cash on Delivery |<b> Available</b>
                  </p>
                </div>

                <div>
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/cod.svg"
                    alt=""
                  />

                  <p>
                    30 Days Easy Return | <b> Know More</b>
                  </p>
                </div>
              </div>

              <p className="the-input">
                <span>Sold By 1 Puma Sports India Pvt Ltd</span>
                <span>
                  <i class="fa-solid fa-angle-right"></i>
                </span>
              </p>
            </div>

            <div id="right-5">
              <div>
                <span>
                  <img
                    src="https://www.tatacliq.com/src/pdp/components/img/new-share-icon.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                </span>
              </div>

              <div>
                <button>Buy Now </button>
                <button onClick={addCart}>Add to Bag</button>
              </div>
            </div>
          </div>
        </div>
        <div id="recomend-img">
          <div>
            <div>
              <img
                src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016373929_437Wx649H_202302042021191.jpeg"
                alt=""
              />
            </div>

            <h2>Red cheif</h2>
            <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
            <p>
              {" "}
              <b>₹2115</b> <s>₹4699</s> <span>59% off</span>
            </p>
            <span>
              4.5 <i class="fa-solid fa-star fa-xs"></i>
            </span>
            <b>(10)</b>
            <br />
            <button>Buy Now</button>
          </div>

          <div>
            <div>
              <img
                src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016373929_437Wx649H_202302042021191.jpeg"
                alt=""
              />
            </div>

            <h2>Red cheif</h2>
            <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
            <p>
              {" "}
              <b>₹2115</b> <s>₹4699</s> <span>59% off</span>
            </p>
            <span>
              4.5 <i class="fa-solid fa-star fa-xs"></i>
            </span>
            <b>(10)</b>
            <br />
            <button>Buy Now</button>
          </div>

          <div>
            <div>
              <img
                src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016373929_437Wx649H_202302042021191.jpeg"
                alt=""
              />
            </div>

            <h2>Red cheif</h2>
            <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
            <p>
              {" "}
              <b>₹2115</b> <s>₹4699</s> <span>59% off</span>
            </p>
            <span>
              4.5 <i class="fa-solid fa-star fa-xs"></i>
            </span>
            <b>(10)</b>
            <br />
            <button>Buy Now</button>
          </div>

          <div>
            <div>
              <img
                src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016373929_437Wx649H_202302042021191.jpeg"
                alt=""
              />
            </div>

            <h2>Red cheif</h2>
            <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
            <p>
              {" "}
              <b>₹2115</b> <s>₹4699</s> <span>59% off</span>
            </p>
            <span>
              4.5 <i class="fa-solid fa-star fa-xs"></i>
            </span>
            <b>(10)</b>
            <br />
            <button>Buy Now</button>
          </div>

          <div>
            <div>
              <img
                src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016373929_437Wx649H_202302042021191.jpeg"
                alt=""
              />
            </div>

            <h2>Red cheif</h2>
            <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
            <p>
              {" "}
              <b>₹2115</b> <s>₹4699</s> <span>59% off</span>
            </p>
            <span>
              4.5 <i class="fa-solid fa-star fa-xs"></i>
            </span>
            <b>(10)</b>
            <br />
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singlepoduct;
