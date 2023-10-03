import { createContext, useEffect, useReducer } from "react";
import axios from "axios"
import toast from "react-hot-toast";

export const Authcontext = createContext();

const initialState = { user: null };

const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return { ...state, user: action.payload };
        
      case "LOGOUT":
        localStorage.removeItem("token");
        toast.success("Logout Succesfully :(");
        return { ...state, user: null };
      default:
        return state;
    }
  };
  

const Authprovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initialState);

  useEffect(() => {
    async function getCurrentUserData() {
      var token = JSON.parse(localStorage.getItem("token"));
      if (token) {
        try {
          const response = await axios.post("http://localhost:7000/get-current-user", { token });
        if (response.data.success) {
            dispatch({
                type: "LOGIN",
                payload: response.data.user
            })
        } else {
            dispatch({
                type: "LOGOUT"
            });
        }
        } catch (error) {
          console.log(error)
        }
    }
    }
    getCurrentUserData();
  }, []);

  return (
    <Authcontext.Provider value={{state, dispatch}}>
      {children}
    </Authcontext.Provider>
  );
};

export default Authprovider;
