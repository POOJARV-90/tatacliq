import React, { useContext, useEffect } from 'react'
import { Authcontext } from '../Context/Authcontext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Sellerprotected = ({children}) => {
  
    const {state} = useContext(Authcontext)
    const router = useNavigate()

    useEffect(()=>{
        if(state?.user?.role !="Seller"){
            toast.error("opps yoy are not seller")
            router("/")
        }
    },[state])
  return state?.user?.role =="Seller"? children:null;
 
}

export default Sellerprotected