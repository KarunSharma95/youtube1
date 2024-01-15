import { createSlice } from "@reduxjs/toolkit";

const CacheSlice = createSlice({
    name : "cacheSlice",
    initialState :{

    },
    reducers :{
        extractCache:(state, action)=>{
        state=Object.assign(state,action.payload);
        }
    }
});

export const { extractCache } = CacheSlice.actions; 
export default CacheSlice.reducer;