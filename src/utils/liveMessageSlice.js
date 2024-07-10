import { createSlice } from "@reduxjs/toolkit";

const liveMessageSlice = createSlice({
    name : 'isLiveMessage',
    initialState : {
        isLiveMessage:''
    },
    reducers:{
        addLiveMessage:(state,action)=>{
            state.isLiveMessage = action.payload
        }
    }
})

export const {addLiveMessage} = liveMessageSlice.actions;
export default liveMessageSlice.reducer;