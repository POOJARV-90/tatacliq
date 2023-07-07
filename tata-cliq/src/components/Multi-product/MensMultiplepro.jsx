import "./MensMultiplepro.css";
import { useNavigate } from "react-router-dom";

const MensMultiplepro = () => {
  const router = useNavigate();

  function toGo() {
    router("/");
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
              <div onClick={toGo}>
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
                  <h4>Department</h4>
                  <span>Men's Clothing</span>
                </div>
              </div>

              <div id="producttype">
                <h4>Product Type</h4>

                <div>
                  <p><span></span> <span>b</span></p>
                  <p>abc</p>
                </div>


              </div>
            </div>
            <div id="right">2</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MensMultiplepro;
