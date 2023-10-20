import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "./Slices/wishListSlice";
import cartSlice from "./Slices/cartSlice";

const store = configureStore({
    reducer: {
        wishlistReducer: wishListSlice,
        cartReducer: cartSlice
    }
})

export default store;