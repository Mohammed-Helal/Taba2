import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import Home from "./pages/Home.jsx";
import store from "@/store/store.js"
import Auth from "./pages/Auth.jsx";
import Signup_Sec from "./components/Auth/Signup_Sec.jsx";
import Login_Sec from "./components/Auth/Login_Sec.jsx";
import Recipe from "./pages/Recipe.jsx";
import Cart from "./pages/Cart.jsx";
import Profile from "./pages/Profile.jsx";
import Acount from '@/components/Profile/Acount';
import Fav from "./components/Profile/Fav.jsx";

const router = createBrowserRouter([
  {
    path: "/Taba2",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: 'recipe/:id',
        element: <Recipe />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'profile',
        element: <Profile />,
        children:[
          {
            path: 'acount',
            element: <Acount />
          },
          {
            path: 'fav',
            element: <Fav />
          },
        ]
      },
    ],
  },
  {
    path: "/Taba2/auth/",
    element: <Auth />,
    children: [
      {
        path: "signup",
        element: <Signup_Sec />,
      },
      {
        path: "login",
        element: <Login_Sec />,
      },
    ],
  },
]);



createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);


