import UserModal from "../Modals/User.modal.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  try {
    const { userdata } = req.body;
    const { name, email, password, role } = userdata;
    if (!name || !email || !password || !role)
      return res.json({
        success: false,
        message: "All fields are mandtory.."
      });

    const isEmailExist = await UserModal.find({ email: email });
    if (isEmailExist.length) {
      return res.json({
        success: false,
        message: "Email is exist, try diffrent email."
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModal({ name, email, password: hashedPassword, role });

    await user.save();

    return res.json({
      success: true,
      message: "User registered Successfully.",
      user: user,
    });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
};

export const Login = async (req, res) => {
  try {
   
    const { email, password } = req.body.userdata   //.userdata;
    if (!email || !password)
      return res.json({
        success: false,
        message: "All fields are mandtory..",
      });

    const user = await UserModal.findOne({ email });
    if (!user) return res.json({ success: false, message: "User not found.." });

    if (user.isBlocked) {
      return res.json({ success: false, message: "You are Blocked, Contact us." });
    }

    const isPasswordRight = await bcrypt.compare(password, user.password);
    // console.log(isPasswordRight, "isPasswordRight")
    if (isPasswordRight) {
      const userObeject = {
        name: user.name,
        email: user.email,
        _id: user._id,
        role:user.role
      };
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
      // console.log(token, "token her")
      return res.json({
        success: true,
        message: "Login Successfull.",
        user: userObeject,
        token: token,
      });
    }
    return res.json({ success: false, message: "Password is wrong." });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token)
      return res.json({ success: false, message: "Token is required!" });

    const decoededData = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoededData) {
      return res.json({ success: false, message: "Not valid json token.." });
    }
    // return res.send(decoededData)
    const userId = decoededData?.userId;

    const user = await UserModal.findById(userId);

    if (!user) {
      return res.json({ success: false, message: "User not found.." });
    }

    //     } catch (error) {
    //         return res.json({ status: "error", message: error })
    //     }
    // }
    const userObeject = {
      name: user?.name,
      email: user?.email,
      _id: user?._id,
      role:user?.role
    };

    return res.json({ success: true, user: userObeject });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
};