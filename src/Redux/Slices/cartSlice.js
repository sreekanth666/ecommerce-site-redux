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
        },
        emptyCart: (state) => {
            return state = []
        }
    }
})

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer