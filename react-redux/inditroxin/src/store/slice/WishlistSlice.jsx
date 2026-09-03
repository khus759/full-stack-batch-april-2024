import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const savedWishlist = localStorage.getItem("wishlistItems")
  ? JSON.parse(localStorage.getItem("wishlistItems"))
  : [];

export const wishlistSlice = createSlice({
  name: "wishlist",

  initialState: {
    userid: 1,
    wishlistItems: savedWishlist, 
  },

  reducers: {
    addItemToWishlist: (state, action) => {
      const { payload } = action;
      const newItem = {
        id: uuid(),
        productID: payload.id,
        title: payload.title,
        thumbnail: payload.thumbnail,
        price: payload.price,
      };
      state.wishlistItems = [...state.wishlistItems, newItem];

      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
    },

    RemoveItemFromWishlist: (state, action) => {
      const { payload } = action;
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.productID !== payload
      );
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
    },

    clearWishlist: (state) => {
      state.wishlistItems = [];
      localStorage.removeItem("wishlistItems"); 
    },
  },
});

export const { addItemToWishlist, RemoveItemFromWishlist, clearWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
