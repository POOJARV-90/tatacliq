import React from "react";
import "./SingleProduct.css";

const SingleProduct = () => {
  return (
    <>
      <div id="single-pro-body">
        <div id="Container">
          <div id="left-container">1</div>
          <div id="right-container">
            <div id="right-1">
              <h3>Puma</h3>
              <p>Puma Essentials Grey Regular Fit Printed T-Shirt</p>
              <b>₹669</b>
              <span>
                MRP:
                <s>₹1799 </s>
              </span>
              <b>63% Off</b> <br />
              <span>Inclusive of all taxes</span>
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

            <div id="right-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
