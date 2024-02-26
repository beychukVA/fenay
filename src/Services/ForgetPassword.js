import axios from "../axios";

export const forgetPasswordMail = async (email) => {
    const response = await axios.put("/api/auth/forgotpasswordmail", {
      email
    });
    return response;
};
  

export const verifyMail = async (email, code) => {
    const response = await axios.post('/api/auth/verifymail', {
     email,
     code
     })
     return response
}

export const changePassword = async (email, password) => {
    const response = await axios.put("api/auth/updateforgotpassword", {
      email,
      password
    });
    return response;
};

