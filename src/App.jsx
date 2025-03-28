import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "Taba2", element: <Home/> },
      ],
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;