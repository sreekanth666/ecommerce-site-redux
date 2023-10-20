import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart Slice",
    initialState: [],
    reducers: {
        addToCart: (state, actions) => {
            state.push(actions.payload)
        },
        removeFromCart: (state, actions) => {
            return state.filter((item) => item.id !== actions.payload)
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer