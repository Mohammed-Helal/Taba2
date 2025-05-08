// Store/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice";
import recipesReducer from "./Slices/recipesSlice";
import cartReducer from "./Slices/cartSlice";
import globalReducer from "./Slices/globalSlice";
import FavReducer from "@/Store/Slices/fevSlice.js";
import OrderReducer from "@/Store/Slices/orderSlice.js"

const store = configureStore({
  reducer: {
    auth: authReducer,
    recipes: recipesReducer,
    cart: cartReducer,
    global: globalReducer,  
    Fav: FavReducer,
    Order: OrderReducer,
  },
});

export default store;
