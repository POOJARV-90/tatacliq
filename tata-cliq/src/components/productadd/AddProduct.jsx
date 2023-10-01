import React, { useState } from "react";
import "../productadd/Addporduct.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../common/Navbar";
import toast from "react-hot-toast";
import axios from "axios";
const AddProduct = () => {
  const [productData, setProductData] = useState({ name: "", price: "", image: "", category: "" })


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
                setProductData({ name: "", price: "", image: "", category: "" })
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

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("CurrentUser"));
  //   if (user) {
  //     if (user?.role == "Buyer") {
  //       alert("You are not a Seller.");
  //       router("/");
  //     }
  //   } else {
  //     alert("Please login first");
  //     router("/login");
  //   }
  // }, []);

  return (
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
        <label>Product Category :</label>
        <select id="select" onChange={selectRole} value={productData.category}>
          <option value="Other">Other</option>
          <option value="Mens">Mens</option>
          <option value="Womens">Womens</option>
          <option value="Chidrens">Chidrens</option>
          <option value="Beauty">Beauty</option>
          <option value="Home & Kitchen">Home & Kitchen</option>
          <option value="Electronics">Electronics</option>
        </select>
        <br />
        <input type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;
