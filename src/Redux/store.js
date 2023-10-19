import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "./Slices/wishListSlice";

const store = configureStore({
    reducer: {
        wishlistReducer: wishListSlice
    }
})

export default store;