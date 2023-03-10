import axios from "axios";

const serverAdress = "http://localhost:3001";

// Register User
export const postRegister = async (email, password, password2) => {
  try {
    const res = await axios.post(`${serverAdress}/users/register`, {
      email,
      password,
      password2,
    });
    console.log(res.data.message);
    return res;
  } catch (e) {
    // What to do when error
    return e.message;
  }
};

// Login User
export const postLogin = async (email, password) => {
  // try {
  //   const res = await axios.post(`${serverAdress}/users/login`, {
  //     email,
  //     password,
  //   });
  //   console.log(res.data.message);
  //   return res;
  // } catch (e) {
  //   // What to do when error
  //   return e.message;
  // }

  try {
    const res = await axios.post(`${serverAdress}/users/login`, {
      email,
      password,
    });
    console.log(res.data.message);
    localStorage.setItem("token", res.data.token);
    return res;
    // Redirect the user to the protected route
  } catch (error) {
    console.error(error);
  }
};
