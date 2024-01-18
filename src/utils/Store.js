import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import cacheSlice from "./cacheSlice";
import chatSlice from "./chatSlice";
import filterSlice from "./filterSlice";

const Store = configureStore({
 reducer:{
    cart:cartSlice,
    cache:cacheSlice,
    chat:chatSlice,
    filter:filterSlice
 }
})
export default Store;