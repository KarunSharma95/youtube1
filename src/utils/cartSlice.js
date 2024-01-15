import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
name : "cartSlice",
initialState :{
    isMenuVisible : true
},
reducers :{
    toggle : (state,action)=>{
     state.isMenuVisible =!state.isMenuVisible;
    },
    closeMenu :(state)=>{
        state.isMenuVisible = false;
    }
}
})
export const {toggle,closeMenu} =CartSlice.actions;
export default CartSlice.reducer;
