import axios from "axios";

export const resetPasssword = async (password, token) => {
  try {
    await axios.post(`https://let-itgo.herokuapp.com/reset-password/${token}`, {
      password,
    });
  } catch (error) {
    console.log(error);
  }
};
