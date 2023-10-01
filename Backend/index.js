import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import { Login, Register, getCurrentUser} from './Controllers/User.controller.js';
import { checkseller } from './Allmiddlewares/Allmiddleware.js';
import { addProduct, allProducts, getYourProducts } from './Controllers/Sellers.controller.js';

const app = express();
app.use(express.json())
dotenv.config();
app.use(cors());

app.get("/",(req , res) => {
    res.send("Working :)")
})

app.post("/register", Register)
app.post("/login",Login)
app.post("/get-current-user",getCurrentUser)
app.get("/all-products", allProducts) //1



//SELLER
app.post('/get-your-product' , checkseller, getYourProducts) //1


app.post('/add-product',checkseller,addProduct )  //1



mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("CONNECTED TO DB :)");
})

app.listen(7000,()=>{
    console.log("litsing on port 7000")
})