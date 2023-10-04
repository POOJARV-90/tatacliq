import ProductModal from "../Modals/Product.modal.js";
import jwt from 'jsonwebtoken'

export const addProduct = async (req , res)=>{
    try {
        const {token} = req.body
      const {name , price , image , image1 , image2 , image3 , category , brand} = req.body.productData

      if (!name || !price || !image || !image1 || !image2 || !image3 || !category|| !token ||!brand) return res.status(404).json({success:false , message : "all fields are mendatory"})
      

      const decodedData = jwt.verify(token,process.env.JWT_SECRET)

        if (!decodedData) {
            return res.status(404).json({ success:false, message: "Token not valid." })
        }
        const userId = decodedData?.userId   
      
       const Product =  new ProductModal({name , price , image , image1 ,image2 , image3 , category , brand ,userId: userId })

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

  export const updateYourProduct = async (req , res) => {
    try {
  
      const { productId , name , price , category , image , token } = req.body.editData
  
      if (!token) return res.status(404).json({ status: "error", message: "Token is mandtory.." })
      const decodedData = jwt.verify(token,process.env.JWT_SECRET)
  
      if (!decodedData) {
          return res.status(404).json({ status: "error", message: "Token not valid." })
      }
      const userId = decodedData?.userId
  
      const updatedproduct = await ProductModal.findOneAndUpdate({ _id : productId , userId : userId} , { name , price , category , image} , {new : true})
  
      if(updatedproduct){
        return res.status(200).json({ status: "Sucess", product: updatedproduct })
      }
  
      return res.status(404).json({ status: "error", message: "You are trying to update product which is not yours.." })
  
      
    } catch (error) {
      return res.status(500).json({ status: "error", error: error.message })
    }
  
  }