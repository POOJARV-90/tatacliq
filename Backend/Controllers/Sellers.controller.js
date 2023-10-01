import ProductModal from "../Modals/Product.modal.js";
import jwt from 'jsonwebtoken'

export const addProduct = async (req , res)=>{
    try {
        const {token} = req.body
      const {name , price , image , category} = req.body.productData

      if (!name || !price || !image || !category|| !token) return res.status(404).json({success:false , message : "all fields are mendatory"})
      

      const decodedData = jwt.verify(token,process.env.JWT_SECRET)

        if (!decodedData) {
            return res.status(404).json({ success:false, message: "Token not valid." })
        }
        const userId = decodedData?.userId   
      
       const Product =  new ProductModal({name , price , image , category ,userId: userId })

      await Product.save()
      return res.status(201).json({ success:true , message :"product added succesfully", Product:Product })

    } catch (error) {
      res.status(500).json({success:false , message : error.message})
        
    }

}

export const allProducts = async (req, res) => {
    try {
        const Product = await ProductModal.find({});  //isVerified: trueisBlocked:false,isVerified: true 
        if (Product.length) {
            return res.status(200).json({ success:true, Product: Product })
        }
        return res.status(404).json({ success:false, message: "No products found" })
  
    } catch (error) {
        return res.status(500).json({ success:false, error: error.message })
    }
  }

  export const getYourProducts = async (req , res) => {
    try {
      const {token}= req.body
      if(!token) return res.status(404).json({success: false, message:"token is mendatory"})
  
      const decodedData = jwt.verify(token,process.env.JWT_SECRET)
  
      if (!decodedData) {
          return res.status(404).json({ success: false, message: "Token not valid." })
      }
      const userId = decodedData?.userId
  
      const userproduct = await ProductModal.find({userId :userId})
  
      if(userproduct.length){
        return res.status(200).json({ success: true, Product:userproduct })
      }
      return res.status(404).json({ success: false, message: "No products found." })
      
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message })
    }
  
  }