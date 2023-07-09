import "./MensMultiplepro.css";
import { useNavigate } from "react-router-dom";

const MensMultiplepro = () => {
  const router = useNavigate();

  function toGo() {
    router("/SingleProduct");
  }
  return (
    <>
      <div id="parent">
        <div id="head1">
          <h1>Men's winter wear</h1>
          <p>110968 Products</p>
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
                  <span>Men's Clothing</span>
                </div>

                <div>
                  <h4>Category</h4>
                  <span>Casual Wear</span>
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
                    <span></span>{" "}
                    <span>
                      Trousers & Chinos 
                    </span>
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

            <div  onClick={toGo}>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016789927_437Wx649H_202303091302221.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                  <div>New</div>
                </div>

                <h2>Red cheif</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>
              <div>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016373929_437Wx649H_202302042021191.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                  <div>New</div>
                </div>

                <h2>Red cheif</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>

              <div>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000015191655_437Wx649H_202211060047171.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                </div>

                <h2>Red cheif</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>

              <div>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017554565_437Wx649H_202305151656271.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                  <div>New</div>
                </div>

                <h2>Puma</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>
              <div>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016645596_437Wx649H_202302241106111.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                </div>

                <h2>Puma</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>
              <div  onClick={toGo}>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016789927_437Wx649H_202303091302221.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                  <div>New</div>
                </div>

                <h2>Red cheif</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>
              <div>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000015584427_437Wx649H_202212060011461.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                  {/* <div>New</div> */}
                </div>

                <h2>Red cheif</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>
              <div>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016373929_437Wx649H_202302042021191.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                  <div>New</div>
                </div>

                <h2>Red cheif</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>
              <div>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000014428153_437Wx649H_202209112250181.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                  <div>New</div>
                </div>

                <h2>Red cheif</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>
              <div>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000015191643_437Wx649H_202211060046211.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                  <div>New</div>
                </div>

                <h2>Red cheif</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>

              <div>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016373929_437Wx649H_202302042021191.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                  <div>New</div>
                </div>

                <h2>Red cheif</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>

              <div>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000015191655_437Wx649H_202211060047171.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                </div>

                <h2>Red cheif</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>

              <div>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017554565_437Wx649H_202305151656271.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                  <div>New</div>
                </div>

                <h2>Puma</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>
              <div>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016645596_437Wx649H_202302241106111.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                </div>

                <h2>Puma</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>
              <div>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016789927_437Wx649H_202303091302221.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                  <div>New</div>
                </div>

                <h2>Red cheif</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>
              <div>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000015584427_437Wx649H_202212060011461.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                  {/* <div>New</div> */}
                </div>

                <h2>Red cheif</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>
              <div>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016373929_437Wx649H_202302042021191.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                  <div>New</div>
                </div>

                <h2>Red cheif</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>
              <div>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000014428153_437Wx649H_202209112250181.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                  <div>New</div>
                </div>

                <h2>Red cheif</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>
              <div>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000015191643_437Wx649H_202211060046211.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                  <div>New</div>
                </div>

                <h2>Red cheif</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>

              <div>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016373929_437Wx649H_202302042021191.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                  <div>New</div>
                </div>

                <h2>Red cheif</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>

              <div>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000015191655_437Wx649H_202211060047171.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                </div>

                <h2>Red cheif</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>

              <div>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017554565_437Wx649H_202305151656271.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                  <div>New</div>
                </div>

                <h2>Puma</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>
              <div>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016645596_437Wx649H_202302241106111.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                </div>

                <h2>Puma</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>
              <div>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016789927_437Wx649H_202303091302221.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                  <div>New</div>
                </div>

                <h2>Red cheif</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>
              <div>
                <div>
                  <img
                    src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000015584427_437Wx649H_202212060011461.jpeg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/WL1.svg"
                    alt=""
                  />
                  <img
                    src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"
                    alt=""
                  />
                  {/* <div>New</div> */}
                </div>

                <h2>Red cheif</h2>
                <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
                <p>
                  {" "}
                  <b>₹2115</b> <s>₹4699</s>
                </p>
                <span>
                  4.5 <i class="fa-solid fa-star fa-xs"></i>
                </span>
                <b>(10)</b>
                <p>Limited stock</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MensMultiplepro;
