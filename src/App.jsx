import { Outlet } from "react-router-dom";
import Footer from "@/Components/Footer";
import Header_S from "@/Components/Header/Header_S.jsx";
import Header_L from "@/Components/Header/Header_L.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
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
