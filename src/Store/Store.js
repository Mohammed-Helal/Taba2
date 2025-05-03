// Store/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice";
import recipesReducer from "./Slices/recipesSlice";
import cartReducer from "./Slices/cartSlice";
import globalReducer from "./Slices/globalSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    recipes: recipesReducer,
    cart: cartReducer,
    global: globalReducer,  
  },
});

export default store;
