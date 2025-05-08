import { Outlet } from "react-router-dom";
import Footer from "@/Components/Footer";
import Header_S from "@/Components/Header/Header_S.jsx";
import Header_L from "@/Components/Header/Header_L.jsx";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "@/Store/Slices/authSlice"; 
import { getAuthCookies } from "./Utils/auth.util";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch()
  const {token, id} = getAuthCookies()
  // console.log({token, id})
  
  useEffect(() => {
    if (token && id) {
      dispatch(fetchUser({ token, id }));
    }
  }, [dispatch, token, id]);
  
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
