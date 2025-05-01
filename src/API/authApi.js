import axiosInstance from "./axiosInstance";
import Cookies from "js-cookie";

export const registerUser = async ({name, phone_number, password, password_confirmation}) => {
  try {
    const res = await fetch("/api/register", {
      method: "post",
      headers:{
          Accept: "application/json"
      },
      body: JSON.stringify({
        name,
        phone_number,
        password,
        password_confirmation,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Registration failed");
    }

    Cookies.set("token", data.user.token, { expires: 0.5 });
    return data.user;
  } catch (error) {
    console.error("Register error:", error.message); 
    throw new Error(`Register failed: ${error.message}`);
  }
};


export const getCurrentUser = async (token) => {
  try {
    const response = await axiosInstance.get("/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Get current user error:", error.message);
    throw new Error(`Fetching user failed: ${error.message}`);
  }
};
