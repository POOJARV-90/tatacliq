import React, { useEffect, useState } from 'react'
import "../productadd/Addporduct.css"

import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Navbar from '../Navbar';

const AddProduct = () => {

    const [productData, setProductData] = useState({ name: "", price: "", image: "", category: "Other" });

    const router = useNavigate();

    const handleChange = (event) => {
        setProductData({ ...productData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (productData.name && productData.price && productData.image && productData.category) {
            const productsArray = JSON.parse(localStorage.getItem("Products")) || [];

            const randomId = uuidv4();
            productData["id"] = randomId;
            productsArray.push(productData);
            localStorage.setItem("Products", JSON.stringify(productsArray))
            setProductData({ name: "", price: "", image: "", category: "Other" })
            router('/Allproduct');//remember
            alert("Product added Successfully.")
        } else {
            alert("Please fill the all fields.")
        }
    }

    function selectRole(event) {
        // console.log(event.target.value, "- role")
        setProductData({ ...productData,["category"]: event.target.value })
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("CurrentUser"))
        if (user) {
            if (user?.role == "Buyer") {
                alert("You are not a Seller.")
                router('/')
            }
        } else {
            alert("Please login first")
            router('/login')
        }
    }, [])

    return (
        <div id='add-body'>
            <Navbar/>
            <form onSubmit={handleSubmit}>
            <h4>ADD PRODUCT</h4> <br />
                <label>Product Name :</label><br />
                <input value={productData.name} type='text' onChange={handleChange} name="name" /><br />
                <label>Product Price :</label><br />
                <input value={productData.price} type='number' onChange={handleChange} name='price' /><br />
                
                <label>Product Image :</label><br />
                <input value={productData.image} type='text' onChange={handleChange} name='image' /><br />

                <label>Product Category :</label>
                <select id='select' onChange={selectRole} >
                    <option value="Other">Other</option>
                    <option value="Mens">Mens</option>
                    <option value="Womens">Womens</option>
                    <option value="Chidrens">Chidrens</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Home & Kitchen">Home & Kitchen</option>
                    <option value="Electronics">Electronics</option>
                </select><br />
                <input type='submit'  value='Add Product' />

                
            </form>
        </div>
    )
}

export default AddProduct