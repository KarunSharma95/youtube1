import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({

    name : "ChatSlice",
    initialState : {
        Message : []
    },
    reducers : {
    addMessage:(state,action)=>{
        state.Message.splice(50,1)
     state.Message.unshift(action.payload);
    }
    }
})

export const { addMessage }  = chatSlice.actions;
export default chatSlice.reducer;