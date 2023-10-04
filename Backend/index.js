import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import { Login, Register, getCurrentUser} from './Controllers/User.controller.js';
import { checkseller } from './Allmiddlewares/Allmiddleware.js';
import { addProduct, allProducts, getYourProducts, updateYourProduct } from './Controllers/Sellers.controller.js';
import { addCart, allCartProducts, getSingleProductData } from './Controllers/Products.controller.js';
import { removeAllCartProducts, removecartproduct } from './Controllers/Buyers.controller.js'

const app = express();
app.use(express.json())
dotenv.config();
app.use(cors());
app.use(morgan("dev"))

app.get("/",(req , res) => {
    res.send("Working :)")
})

app.post("/register", Register)
app.post("/login",Login)
app.post("/get-current-user",getCurrentUser)
app.get("/all-products", allProducts) //

//Buyer
app.post('/cart',addCart)
app.post('/get-single-product-data',getSingleProductData)
app.post('/your-cart-product',allCartProducts)
app.post('/remove-all-cart-products',removeAllCartProducts)
app.post('/remove-cart-product',removecartproduct)



//SELLER
app.post('/get-your-product' , checkseller, getYourProducts) //1
app.post('/add-product',checkseller,addProduct )  //1
app.post('/edit-product', updateYourProduct)


mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("CONNECTED TO DB :)");
})

app.listen(7000,()=>{
    console.log("litsing on port 7000")
})