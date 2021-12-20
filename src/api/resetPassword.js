import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const resetPasssword = async (password, token) => {
  try {
    await axios.post(
      `https://let-itgo.herokuapp.com/user/reset-password/${token}`,
      {
        password,
      }
    );
  } catch (error) {
    toast.error("something went wrong");
    console.log(error);
  }
};
