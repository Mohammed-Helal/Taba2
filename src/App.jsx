import { Outlet } from "react-router-dom";
import Footer from "@/Components/Footer";
import Header_S from "@/Components/Header/Header_S.jsx";
import Header_L from "@/Components/Header/Header_L.jsx";

function App() {
  return (
    <>
      <Header_S />
      <Header_L />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;