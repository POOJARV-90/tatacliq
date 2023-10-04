import jwt from 'jsonwebtoken'
import UserModal from '../Modals/User.modal.js';
export const removeAllCartProducts = async (req, res) => {
    try {
      const { token } = req.body;
  
      if (!token)
        return res
          .satus(404)
          .json({ success: false, message: "Token is required!" });
  
      const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  
      if (!decodedData)
        return res
          .status(404)
          .json({ success: false, message: "Not a valid token" });
  
      const userId = decodedData?.userId;
  
      const user = await UserModal.findByIdAndUpdate(userId,{cart:[]});
  
      
      return res.status(200).json({
        success: true,
        message: "Thank you for shopping! Your products will be delivered soon!", user
      })
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  };

  export const removecartproduct = async (req, res) => {
    try {
      const { token, productId } = req.body;
      // console.log(token , productId);
  
      if (!token || !productId) {
        return res.status(400).json({ success: false, message: "userId and token are required" });
      }
  
      const decodedData = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decodedData?.userId;
      const user = await UserModal.findById({ _id: userId });
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      const cart = user?.cart;
      const removeIndex = cart.indexOf(productId);
      console.log(cart);
  
      if (removeIndex === -1) {
        return res.status(404).json({ success: false, message: "Product not found in cart" });
      }
      cart.splice(removeIndex, 1);
  
      await user.save();
  
      return res.status(200).json({ success: true, user: user });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  };
  