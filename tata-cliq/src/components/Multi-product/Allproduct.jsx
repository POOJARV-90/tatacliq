import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Multi-product/Allpoduct.css";
import Navbar from "../common/Navbar";


const Allproduct = () => {
  const [isProductsExist, setIsProductsExist] = useState(false);
  const [products, setProducts] = useState([]);
  const router = useNavigate();

  useEffect(() => {
    const productsFromDb = JSON.parse(localStorage.getItem("Products"));
    if (productsFromDb?.length) {
      setIsProductsExist(true);
      setProducts(productsFromDb);
    } else {
      setIsProductsExist(false);
      setProducts([]);
    }
  }, []);

  const tosingleproduct = (id) => {
    console.log(id, "id");
    router(`/Singlepoduct/${id}`);
  };

  return (
    <>
      <Navbar />
      <div id="pro-body">
        <div id="parent">
          <div id="head1">
            <h1>All products</h1>
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
                    <span>Accessories</span>
                  </div>

                  <div>
                    <h4>Category</h4>
                    <span>Women's Bag</span>
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

                {!isProductsExist ? (
                  <div>No products</div>
                ) : (
                  <>
                    {products &&
                      products.map((pro) => (
                        <div
                          onClick={() => tosingleproduct(pro.id)}
                          key={pro.name}
                        >
                          <div>
                            <img id="img" src={pro.image} />
                            <img
                              src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                              alt=""
                            />
                            <img
                              src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                              alt=""
                            />
                          </div>

                          <h2>{pro.category}</h2>
                          <p> {pro.name}</p>
                          <p>
                            <b>{pro.price} ₹</b> <s></s>
                          </p>
                          <span>
                            4.3 <i class="fa-solid fa-star fa-xs"></i>
                          </span>
                          <b> </b>
                          <p> </p>
                        </div>
                      ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allproduct;
