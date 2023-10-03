import ProductModal from "../Modals/Product.modal.js";
import UserModal from "../Modals/User.modal.js";

export const getSingleProductData = async (req, res) => {
    try {
        const { productId } = req.body;
        if (!productId) return res.status(404).json({ success: false, message: "Product id is mandtory.." })
  
        const product = await ProductModal.findById(productId);
        if (product) {
            return res.status(200).json({ success: true, product })
        }
        return res.status(404).json({ success: false, error: "Products details not found." })
  
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message })
    }
  }

  export const addCart = async (req, res) => {
    try {
        const { productId, userId } = req.body;
        console.log(productId , userId);
        
        if (!productId || !userId) return res.status(404).json({ success: false, message: "necessery to login before adding" })
        

        const user = await UserModal.findByIdAndUpdate(userId, { $push: { cart: productId } })
      console.log(user);
        if (!user){return res.status(404).json({ success: false, message: "User not found.." })}
        else {return res.status(200).json({ success: true , message:"product added to cart "  })}
  
    } catch (error) {
        // console.log(error, "error")
        return res.status(500).json({ success: false, error: error.message })
    }
  }

  export const allCartProducts = async (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) return res.status(404).json({ success: false, message: "Usur id is mandtory.." })
  
  
        const user = await UserModal.findById(userId)
        if (!user) return res.status(404).json({ success: false, message: "User not found.." })
        var finalData = [];
        var array = user?.cart;
        for (var i = 0; i < array?.length; i++) {
            const productData = await ProductModal.findById(array[i])
            if (productData) {
                finalData.push(productData)
            }
        }
        return res.status(200).json({ success: true, cartProducts: finalData })
  
    } catch (error) {
        console.log(error, "error")
        return res.status(500).json({ success: false, error: error.message })
    }
  }

  