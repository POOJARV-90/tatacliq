import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = ({ letcloseREG, onClose }) => {
   
    const router = useNavigate();
    const [userdata, setUserdata] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword:"",
        role: "Buyer",
      });
      const handlechange = (event) => {
        setUserdata({ ...userdata, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        if (userdata.name && userdata.email && userdata.password && userdata.confirmpassword && userdata.role) {
            if (userdata.password === userdata.confirmpassword) {
                const response = await axios.post("http://localhost:8000/register", { userdata });
                if (response.data.success) {
                    setUserdata({ name: "", email: "", password: "", confirmpassword: "", role: "Buyer" })
                    router('/')
                    toast.success(response.data.message)
                   
                } else {
                    toast.error(response.data.message)
                }
    
            } else {
                toast.error("Password and Confirm Password not Matched.")
            }
        } else {
            toast.error("All fields are mandtory.")
        }
      };
    
      function selectrole(event) {
        // console.log(event.target.value ,"role")
        setUserdata({ ...userdata, ["role"]: event.target.value });
      }
    
  return (
    <div id="register-body">
            <div id="register">
              <span onClick={onClose}>
                <i class="fa-solid fa-x"></i>
              </span>
              <h1>Welcome to Tata </h1>
              <h1>CLiQ</h1>

              <form onSubmit={handleSubmit}>
                <input
                  placeholder="Name"
                  value={userdata.name}
                  type="text"
                  onChange={handlechange}
                  name="name"
                />
                <input
                  placeholder="E-mail Address"
                  value={userdata.email}
                  type="email"
                  onChange={handlechange}
                  name="email"
                />{" "}
                <br />
                <label htmlFor="">Select Role : </label>
                <select id="select" onChange={selectrole}>
                  <option value="Buyer">Buyer</option>
                  <option value="Seller">Seller</option>
                </select>
                <input
                  placeholder="Password"
                  value={userdata.password}
                  type="password"
                  onChange={handlechange}
                  name="password"
                />
                 <input
                  placeholder="Password"
                  value={userdata.confirmpassword}
                  type="password"
                  onChange={handlechange}
                  name="confirmpassword"
                />
                <p>
                  By continuing, you agree to our <b>Terms of Use</b> and{" "}
                  <b>Privacy Policy</b>{" "}
                </p>
                <p>
                  Alraedy a member <b>Click here</b>
                </p>
                <input id="button-login" type="submit" value="Register" />
              </form>
            </div>
          </div>
  )
}

export default Register