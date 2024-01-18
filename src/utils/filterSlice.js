import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name : "FilterSlice",
    initialState:{
      filterVideo :[]
    },
    reducers : {
        addFilteredVideo : (state,action)=>{
            state.filterVideo=[];
            state.filterVideo = action.payload;
        }
    }
})

export const {addFilteredVideo} = filterSlice.actions;
export default filterSlice.reducer;