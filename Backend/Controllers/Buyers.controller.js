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