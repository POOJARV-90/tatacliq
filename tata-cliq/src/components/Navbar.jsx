import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import {Authcontext} from "./Context/Authcontext"


const Navbar = () => {
  const {state , login , logout} = useContext(Authcontext)
  const [userdatanav, setUserdatanav] = useState();
  // console.log(userdatanav,"jsjhfjsdhf")

  // const { state, logout } = useContext(Authcontext);
  // const router = useNavigate();

  useEffect(() => {
    if (state?.user) {
      setUserdatanav(state?.user);
    } else {
      setUserdatanav({});
    }
  }, [state]);
  // ----------------------register-------------------------------
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
    role: "Buyer",
  });
  const handlechange = (event) => {
    setUserdata({ ...userdata, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userdata.name && userdata.email && userdata.password) {
      const array = JSON.parse(localStorage.getItem("Users")) || [];

      const userobject = {
        name: userdata.name,
        email: userdata.email,
        password: userdata.password,
        role: userdata.role,
        cart: [],
      };
      array.push(userobject);
      localStorage.setItem("Users", JSON.stringify(array));

      setUserdata({ name: "", email: "", password: "", role: "Buyer" });
      router("/");
      alert("Registerd succesfully");
    } else {
      alert("please submit the require details");
    }
  };

  function selectrole(event) {
    // console.log(event.target.value ,"role")
    setUserdata({ ...userdata, ["role"]: event.target.value });
  }


  // --------------------------login---------------------------

  

  const [userdatalogin , setUserdatalogin] = useState({ email: "", password: "" ,role :""});
  // const router = useNavigate();

  const hangleChangeLogin = (event) => {
    setUserdatalogin({ ...userdatalogin, [event.target.name]: event.target.value });
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    if (userdatalogin.email && userdatalogin.password) {
      const users = JSON.parse(localStorage.getItem("Users")); //access to LS

      var flag = false;
      for (var i = 0; i < users.length; i++) {
        if (
          users[i].email == userdatalogin.email &&
          users[i].password == userdatalogin.password
        ) {
          flag = true;
          localStorage.setItem(("CurrentUser"),JSON.stringify( users[i]));
          login(users[i]);
          alert("login succesfull")
          setUserdatalogin({email:"",password:"",role :""  })
          router("/");
          break;
        }
      }
      if (flag == false) {
           alert("Please check credentials.");   //RETURN
      }
      
    } else {
      alert("Please submit all details");
    }
  };





  // ---------------------------------------------------------------
    const[display,setDisplay] = useState(false)  //category
    const [loginopen ,setLoginopen] = useState(false)
    const [regopen ,setRegopen] = useState(false)
    const[open,setOpen] = useState(false)  //category
    const router = useNavigate();
    const[ isbackgroundColor , setIsbackgroundColor] = useState(false)
    

    // -----------------------for cart----------------------
    
    const handleMouseEnter = () => {
        setDisplay(true)
        
      }
    
      const handleMouseLeave = () => {
        setDisplay(false)
      }

      const letopen = () => {
        setLoginopen(true)
      }

      const letclose = () => {
        setLoginopen(false)
      }

      const letopenREG = () => {
        setRegopen(true)
      }

      const letcloseREG = () => {
        setRegopen(false)
      }

    //   --------------------for categories--------------------------

    const letOpen = () => {
        setOpen(true)
        setIsbackgroundColor(true)

    }
    const letClose = () => {
        setOpen(false)
        setIsbackgroundColor(false)
    }
   


   
    

   




    return (
        <>
        <div id='navbar'>
            <div id='tata-logo'>
                <div onClick={()=>router("/")}><img src="http://www.pngimagesfree.com/LOGO/T/Tata-CLiQ/Tata-cliq-logo-PNG-White.png" alt="" /></div>
            </div>
            <div id='nav-option'>

                <div id='up-bar' >
                    <span>Tata CLiQ Luxury</span>
                    <span>
                        <span>CLiQ Cash </span>
                        <span>Gift Card</span>
                        <span>CLiQ Care</span>
                        <span>Track Orders</span>
                        <span onClick={letopen} ><i class="fa-regular fa-circle-user fa-lg"></i></span> 
                       
                       {userdatanav?.email &&  <span onMouseEnter={handleMouseEnter}><  i class="fa-solid fa-chevron-down fa-lg"></i></span>  } 
                       {!userdatanav?.email &&  <span onClick={letopen}> Login/SignUp <  i class="fa-solid fa-chevron-down fa-lg"></i></span>  } 
                      
                       {userdatanav.role == "Seller" && (
                         <span onClick={() => router("/AddProduct")} ><i class="fa-solid fa-plus"> <small>ADD</small></i></span>
            )}


                    </span>
                    
                    { display &&
                     <div id='profile-down' onMouseLeave={handleMouseLeave}>
                       <div onClick={()=>router("/Profile")}  ><img src="https://www.tatacliq.com/src/general/components/img/profile.png" alt=""  /> <p>My Account</p></div>
                       <div><img src="https://www.tatacliq.com/src/general/components/img/order-history.svg" alt="" /> <p>Order History</p></div>
                       <div onClick={()=>router("/Wishlist")}><img src="https://www.tatacliq.com/src/general/components/img/WL5.svg" alt="" /> <p>My Wishlist</p></div>
                       <div><img src="https://www.tatacliq.com/src/account/components/img/alert.svg" alt="" /> <p>Alert & Coupon</p></div>
                       <div><img src="https://www.tatacliq.com/src/account/components/img/giftCards.svg" alt="" /> <p>Gift Card</p></div>
                       <div><img src="https://www.tatacliq.com/src/account/components/img/cliqCash.svg" alt="" /> <p>CLiQ Cash</p></div>
                       <div onClick={logout}><img src="https://www.tatacliq.com/src/account/components/img/settings.svg" alt="" /> <p>Logout</p></div>
                     </div>
                 }

                   

                </div>
                <div id='down-bar' >
                   <div className='margin-top' onMouseEnter={letOpen } onMouseLeave={letClose} style={{
                    backgroundColor : isbackgroundColor ? "white": "#212121",
                    color : isbackgroundColor ? "black" : "white"
                   }}  > 
                    Categories <i class="fa-solid fa-angle-down"></i></div>
                   <div className='margin-top'>Brand <i class="fa-solid fa-angle-down"></i></div>
                   <div>
                    <div> <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="search" placeholder='Search for Brands' /></div>
                   </div>
                   <div id='down-bar-logo'>
                   <i class="fa-regular fa-heart fa-lg"onClick={()=>router("/Wishlist")} ></i>
                   <  i class="fa-solid fa-bag-shopping fa-lg" onClick={()=>router("/Cart")}></i>
                   </div>
 

                </div>

                { open &&

               <div id='categories-down' onMouseEnter={letOpen } onMouseLeave={letClose} >
               
                 <div id='rowone'>
                    <p onClick={()=> router("/WomensMultiplepro")}>Women's Fashion</p>
                    <p onClick={()=> router("/MensMultiplepro")}>Men's Fashion</p>
                    <p onClick={()=> router("/Kidswear")}>Kid's Fashion</p>
                    <p onClick={()=> router("/HomeKit")}>Home & Kitchen</p>
                    <p onClick={()=> router("/Beauty")}>Beauty</p>
                    <p onClick={()=> router("/Gadget")}>Gadgets</p>
                    <p onClick={()=> router("/Jwellery")}>Jewellery</p>
                    <p onClick={()=> router("/Accessories")}>Accessories</p>


                 </div>

                


               </div>
                  } 
            </div>

            {loginopen &&  <>
            
                <div id='login-body'>

                    <div id='login'>
                      <span onClick={letclose} ><i class="fa-solid fa-x"></i></span>
                              <h1>Welcome to Tata </h1>
                              <h1>CLiQ</h1>
                              
                       <form onSubmit={handleSubmitLogin } >
                        
                        <input 
                         placeholder='E-mail Address' 
                        type='email'
                        name="email"
                        onChange={hangleChangeLogin}
                        value={userdatalogin.email} /> 
                          
                          <br />
                        
                        <input placeholder='Password'
                         type="password"
                         name="password"
                         onChange={hangleChangeLogin} 
                         value={userdatalogin.password}
                        />


                        <p>By continuing, you agree to our  <b>Terms of Use</b>  and <b>Privacy Policy</b> </p>
                        <p>haven't registered yet here  ? <b onClick={letopenREG}>Click here</b></p>

                        <input id='button-login' type="submit" value="Login" />
                       </form>

                      
                    </div>
                  
               </div>
            </> }

            {/* letcloseREG  */}

            {regopen && 
            <div id='register-body'>
             
            <div id='register'>
                      <span onClick={letcloseREG }><i class="fa-solid fa-x"></i></span>
                              <h1>Welcome to Tata </h1>
                              <h1>CLiQ</h1>
                              
                       <form onSubmit={handleSubmit} >
                        <input placeholder='Name'  
                        value={userdata.name}
                        type="text"
                        onChange={handlechange}
                        name="name" />

                        <input placeholder='E-mail Address' 
                        value={userdata.email}
                        type="email"
                        onChange={handlechange}
                        name="email" /> <br />

                         <label htmlFor="">Select Role : </label>
        <select id="select" onChange={selectrole}>
          <option value="Buyer">Buyer</option>
          <option value="Seller">Seller</option>
        </select>
                        
                        <input placeholder='Password' 
                        value={userdata.password}
                        type="password"
                        onChange={handlechange}
                        name="password" />


                        <p>By continuing, you agree to our  <b>Terms of Use</b>  and <b>Privacy Policy</b> </p>
                        <p>Alraedy a member <b>Click here</b></p>

                        <input id='button-login' type="submit" value="Register" />
                       </form>

                      
                    </div>
             </div> 
            }
            



        </div>

        



        </>
    )
}

export default Navbar