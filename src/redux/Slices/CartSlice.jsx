import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name:"cart",
    initialState : [],
    reducers: {
        add : (state, action) => {
            state.push(action.payload);
            // we can access any input parameter through action payload. Action payload her resembles the selected item.
        },
        remove : (state, action) => {
            return state.filter((item) => item.id !== action.payload);
            // The above statement represents that whoever's id will be not equal to input parameter stays. Whose matches will be removed
        },
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;