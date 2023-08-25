import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import { Login, Register, getCurrentUser} from './Controllers/User.controller.js';

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


mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("CONNECTED TO DB :)");
})

app.listen(8000,()=>{
    console.log("litsing on port 8000")
})