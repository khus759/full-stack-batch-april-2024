import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./slice/WishlistSlice";
import cartReducer from "./slice/CartSlice";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer, 
  },
});
