import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import '../Style/Yourproduct.css'; // Import your CSS file
import Navbar from '../common/Navbar';
import { Authcontext } from '../Context/Authcontext';
import toast from 'react-hot-toast';

const Yourproduct = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [editData , seteditDat] = useState({
        name:"",
        price:"",
        image:"",
        category:""
      })
    const {state} = useContext(Authcontext)
    useEffect(() => {
        async function getProducts() {
            const token = JSON.parse(localStorage.getItem("token"));
            const response = await axios.post("http://localhost:7000/get-your-product", { token })
          
            if (response.data.success) {
                setAllProducts(response.data.Product);
            }
        }
        getProducts();
    }, [])

    const editProduct = (id) => {
        try {
            
        } catch (error) {
            toast.error("An error occurred while editing the prouct item from the cart.");
      console.log(error); 
        }

    }
  
    return (
        <div id='main'>
            <Navbar/>
            <h2>Added Products ({state?.user?.role})</h2>

            {allProducts.length ? (
                <table className="product-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price (₹)</th>
                            <th>Category</th>
                            <th>Edit Products</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProducts.map((product) => (
                            <tr key={product._id}>
                                <td><img id='image' src={product.image} alt={product.name} /></td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td> <button className='thebutton' onClick={() => editProduct(product._id)}>EDIT</button> </td>
                                <td> <button className='thebutton' >Delete</button> </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : <div>
                No Products found.
                
                </div>}

                <div></div>
        </div>
    )
}

export default Yourproduct;
