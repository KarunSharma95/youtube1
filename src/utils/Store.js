import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import cacheSlice from "./cacheSlice";
import chatSlice from "./chatSlice";

const Store = configureStore({
 reducer:{
    cart:cartSlice,
    cache:cacheSlice,
    chat:chatSlice
 }
})
export default Store;