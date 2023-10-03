import React from 'react'
import homeKitdata from "./HomeKitchen.json"
import Navbar from '../common/Navbar'



const HomeKit = () => {
  return (
    <>
      <Navbar />
      <div id="parent">
        <div id="head1">
          <h1>Bed linen</h1>
          <p>8444 Products</p>
        </div>

        <div id="parent2">
          <div id="sortby">
            <div>
              <div>
                <span>Sort by :</span> <span>Popularity</span>
                <i class="fa-solid fa-arrow-down-short-wide "></i>
              </div>
              <div>
                <img
                  src="https://www.tatacliq.com/src/plp/components/img/list.svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div id="parent3">
            <div id="left">
              <div>
                <span>Filters</span>
                <span>Clear All</span>
              </div>

              <div id="de-ca">
                <div>
                  <h4>Department</h4>
                  <span>Home</span>
                </div>

                <div>
                  <h4>Category</h4>
                  <span>Bed Linen</span>
                </div>
              </div>

              <div id="producttype">
                <h4>Product Type</h4>

                <div>
                  <p>
                    <span></span> <span>T-shirts & Polos</span>
                  </p>
                  <p>40806</p>
                </div>

                <div>
                  <p>
                    <span></span> <span> Shirts</span>
                  </p>
                  <p>30974</p>
                </div>

                <div>
                  <p>
                    <span></span> <span>Sweatshirts</span>
                  </p>
                  <p>7420</p>
                </div>

                <div>
                  <p>
                    <span></span> <span>Jacketss</span>
                  </p>
                  <p>40806</p>
                </div>

                <div>
                  <p>
                    <span></span> <span>Sweaters</span>
                  </p>
                  <p>40806</p>
                </div>
                <div>
                  <p>
                    <span></span> <span>Jeans</span>
                  </p>
                  <p>10367</p>
                </div>

                <div>
                  <p>
                    <span></span> <span>Jeans</span>
                  </p>
                  <p>10367</p>
                </div>

                <div>
                  <p>
                    <span></span> <span>Trousers & Chinos</span>
                  </p>
                  <p>343</p>
                </div>
              </div>

              <div id="productfilter">
                <p>
                  <span>Brand</span>{" "}
                  <span>
                    <i class="fa-solid fa-plus"></i>
                  </span>
                </p>
                <p>
                  <span>Color</span>{" "}
                  <span>
                    <i class="fa-solid fa-plus"></i>
                  </span>
                </p>
                <p>
                  <span>Size</span>{" "}
                  <span>
                    <i class="fa-solid fa-plus"></i>
                  </span>
                </p>
                <p>
                  <span>Type</span>{" "}
                  <span>
                    <i class="fa-solid fa-plus"></i>
                  </span>
                </p>
                <p>
                  <span>Price</span>{" "}
                  <span>
                    <i class="fa-solid fa-plus"></i>
                  </span>
                </p>
                <p>
                  <span>Fit</span>{" "}
                  <span>
                    <i class="fa-solid fa-plus"></i>
                  </span>
                </p>
                <p>
                  <span>Discount</span>{" "}
                  <span>
                    <i class="fa-solid fa-plus"></i>
                  </span>
                </p>
                <p>
                  <span>Fabric Family</span>{" "}
                  <span>
                    <i class="fa-solid fa-plus"></i>
                  </span>
                </p>
                <p>
                  <span>Seleve</span>{" "}
                  <span>
                    <i class="fa-solid fa-plus"></i>
                  </span>
                </p>
                <p>
                  <span>Collar</span>{" "}
                  <span>
                    <i class="fa-solid fa-plus"></i>
                  </span>
                </p>

                <p>
                  <span>Occation</span>{" "}
                  <span>
                    <i class="fa-solid fa-plus"></i>
                  </span>
                </p>
                <p>
                  <span>All Discount</span>{" "}
                  <span>
                    <i class="fa-solid fa-plus"></i>
                  </span>
                </p>
              </div>
            </div>
            <div id="right">
              {/* onClick={toGo} */}

              {homeKitdata.map((HomeKitchen) => (
                  <div>
                 
                

                  <div>
                  <img id='img'  src={HomeKitchen.image} />
                    <img
                      src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                      alt=""
                    />
                    <img
                      src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                      alt=""
                    />
                    <div> {HomeKitchen.New}</div>
                  </div>
  
                  <h2>{HomeKitchen.brand}</h2>
                  <p>{HomeKitchen.description}</p>
                  <p>
                    
                    <b> ₹{HomeKitchen.price}</b> <s>₹ {HomeKitchen.discount}</s>
                  </p>
                  <span>
                    {HomeKitchen.star} <i class="fa-solid fa-star fa-xs"></i>
                  </span>
                  <b> {HomeKitchen.instock} </b>
                  <p> {HomeKitchen.other} </p>

                </div>
                ))}
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeKit