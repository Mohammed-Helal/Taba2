import Cookies from "js-cookie";
import { api } from "./api";

export const registerUser = async ({name, phone_number, password, password_confirmation}) => {
  try{
    const response = await api('register', {
      method:'Post',
      body: {
        name,
        phone_number,
        password,
        password_confirmation,
      }
    })
    return response.user
  }catch (error) {
    console.error("Register error:", error.message); 
    throw new Error(`Register failed: ${error.message}`);
  }
};

export const loginUser = async ({phone_number, password}) =>{
  try{
    const response = await api('login', {
      method:'Post',
      body:{
        phone_number,
        password
      },
    })
    
    Cookies.set("token", response.token, {expires: 0.5})
    Cookies.set("id", response.user.id, {expires: 0.5})
    return response;
    
  }catch (error){
    console.error(error.message)
    throw new Error(`Login failed: ${error.message}`)
  }
}  

export const getCurrentUser = async ({token, id}) => {
  try{
    if(token){
      const respnse = await api (`users/${id}`, {
        method:'get',
        headers:{
          Authorization: `Bearer ${token}`,
        }
      })
      return respnse;
    }
  }catch(error){
    console.error("Get current user error:", error.message);
    throw new Error(`Fetching user failed: ${error.message}`);
  }
}


export const logout_1 = async(token) =>{
  try{
    const response = await api('api/logout', {
      method: "post",
      header: {
        Authorization: `Bearer ${token}`,
      }
    })

    return response;
  }catch(e){
    console.error(e.message);
    throw new Error(`${e.message}`);
  }
}
