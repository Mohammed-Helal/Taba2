import { Outlet } from "react-router-dom";
import Footer from "@/Components/Footer";
import Header_S from "@/Components/Header/Header_S.jsx";
import Header_L from "@/Components/Header/Header_L.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "@/Store/Slices/authSlice"; 

function App() {
  const dispatch = useDispatch()

  useEffect(() =>{
    const token = Cookies.get("token")
    const id = Cookies.get("id")
    if(token && id){
      dispatch(fetchUser({token, id}))
    } 
  }, [dispatch])
  return (
    <>
      <Header_S />
      <Header_L />
      <Outlet />
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
