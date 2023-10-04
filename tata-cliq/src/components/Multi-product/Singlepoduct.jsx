import React, { useContext, useEffect, useState } from "react";
// import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Authcontext } from "../Context/Authcontext";
import Navbar from "../common/Navbar";
import axios from "axios";
import toast from "react-hot-toast";

const Singlepoduct = () => {
  const [singlepro, setSinglepro] = useState({});
  const [display, setDisplay] = useState(false);

  const { id } = useParams();
  const { state } = useContext(Authcontext);
  const router = useNavigate();
  const letopen = () => {
    setDisplay(true);
  };

  const letclose = () => {
    setDisplay(false);
  };

  useEffect(() => {
    if (id) {
      async function getSingleproduct() {
        try {
          const responce = await axios.post(
            "http://localhost:7000/get-single-product-data",
            { productId: id }
          );
          if (responce.data.success) {
            setSinglepro(responce.data.product);
          }
        } catch (error) {
          console.log("oops something went wrong :( ");
        }
      }
      getSingleproduct();
    }
  }, [id]);

  const addCart = async (id) => {
    // alert("working")
    try {
      let response = await axios.post("http://localhost:7000/cart", {
        productId: id,
        userId: state?.user?._id,
      });
      console.log(response, "responce");
      if (response?.data?.success) {
        toast.success("Product added successfully to cart :)");
      } else {
        toast.error("internal error");
      }
    } catch (error) {
      toast.error("oops something went wrong :( / login before add to cart");

      // console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div id="single-pro-body">
        <div id="Container">
          <div id="left-container">
            <div>
              <div onClick={letopen}>
                <img src={singlepro.image} />
              </div>
              <div>
                <img src={singlepro.image1} alt="" />
              </div>
            </div>
            <div>
              <div>
                <img src={singlepro.image2} alt="" />
              </div>
              <div>
                <img src={singlepro.image3} alt="" />
              </div>
              <div>
                <img src={singlepro.image} alt="" />
              </div>
            </div>
          </div>
          <div id="right-container">
            <div id="right-1">
              <h3>{singlepro.brand}</h3>
              <p></p>
              <b>₹{singlepro.price}</b>
              <span>
                MRP:
                <s>₹1799 </s>
              </span>
              <b>63% Off</b> <br />
              <span>{singlepro.category}</span>
              <div>
                <p>
                  Use MENSEOSS coupon to get 10% off on cart value 1999/- and
                  above.
                </p>
                <span>
                  5 <i className="fa-solid fa-star fa-xs"></i>
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
                  <i className="fa-solid fa-angle-right"></i>
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

                <button onClick={() => addCart(singlepro._id)}>
                  Add to Bag
                </button>
              </div>
            </div>
          </div>
        </div>
        {display && (
        <div id="image-popup">
          <div id="zoom">
           
           
            <span onClick={letclose}>
            <i class="fa-solid fa-x"></i>
            </span>
            <div>
             
              <div id="zoom-left">
                <div> <img src={singlepro.image} alt="" /></div>
                <div> <img src={singlepro.image1} alt="" /></div>
                <div> <img src={singlepro.image2} alt="" /></div>
                <div> <img src={singlepro.image3} alt="" /></div>
              </div>
              <div id="zoom-right">
                <img src={singlepro.image} alt="" />
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </>
  );
};

export default Singlepoduct;
