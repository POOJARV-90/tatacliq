import React, { useState } from "react";
import "./Addporduct.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../common/Navbar";
import toast from "react-hot-toast";
import axios from "axios";
import Sellerprotected from "./Sellerprotected";
const AddProduct = () => {
  const [productData, setProductData] = useState({ name: "", price: "", image: "",  image1:"" , image2:"" , image3:"" ,category: "" , brand :"" })
 


  const router = useNavigate();

  const handleChange = (event) => {
    setProductData({ ...productData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (productData.name && productData.price && productData.image && productData.category) {
        const token = JSON.parse(localStorage.getItem("token"))
        try {
            const response = await axios.post("http://localhost:7000/add-product", { token, productData });
            if (response?.data?.success) {
                setProductData({ name: "", price: "", image: "",  image1:"" , image2:"" , image3:"" ,category: "" , brand :""})
                // router('/seller-your-products')
                toast.success(response.data.message)
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    } else {
        toast.error("All fields are mandtory.")
    }
}

  function selectRole(event) {
    // console.log(event.target.value, "- role")
    setProductData({ ...productData, ["category"]: event.target.value });
  }

 

  return (
    <Sellerprotected>
      <div id="add-body">
      <Navbar />
      <form onSubmit={handleSubmit}>
        <h4>ADD PRODUCT</h4> <br />
        <label>Product Name :</label>
        <br />
        <input
          value={productData.name}
          type="text"
          onChange={handleChange}
          name="name"
        />
        <br />
        <br />
        <label>Brand :</label>
        <br />
        <input
          value={productData.brand}
          type="text"
          onChange={handleChange}
          name="brand"
        />
        <br />
        <label>Product Price :</label>
        <br />
        <input
          value={productData.price}
          type="number"
          onChange={handleChange}
          name="price"
        />
        <br />
        <label>Product Image :</label>
        <br />
        <input
          value={productData.image}
          type="text"
          onChange={handleChange}
          name="image"
        />
        <br />
        <br />
        <label>Product Other Images : 1</label>
        <br />
        <input
          value={productData.image1}
          type="text"
          onChange={handleChange}
          name="image1"
        />
        <br />
        <br />
        <label>Product Other Images : 2</label>
        <br />
        <input
          value={productData.image2}
          type="text"
          onChange={handleChange}
          name="image2"
        />
        <br />
        <br />
        <label>Product Other Images : 3</label>
        <br />
        <input
          value={productData.image3}
          type="text"
          onChange={handleChange}
          name="image3"
        />
        <br />
        <label>Product Category :</label>
        <select id="select" onChange={selectRole} value={productData.category}>
          <option value="Other">Other</option>
          <option value="Mens">Mens</option>
          <option value="Womens">Womens</option>
          <option value="Kids">Kids</option>
          <option value="Beauty">Beauty</option>
          <option value="Home & Kitchen">Home & Kitchen</option>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
        </select>
        <br />
        <input type="submit" value="Add Product" />
      </form>

      
    </div>
    </Sellerprotected>
  );
};

export default AddProduct;
