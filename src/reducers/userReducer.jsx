import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState: false,
    reducers:{
        login:(state,action)=>{
            return state = true;
        },
        logout:(state)=>{
            return state = false;
        },
        updateUser:(state, action)=>{
            return state = action.payload
        }
    }
})

export const {login, logout, updateUser} = userSlice.actions

export default userSlice.reducer