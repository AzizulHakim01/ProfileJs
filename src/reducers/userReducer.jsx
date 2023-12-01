import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState: null,
    reducers:{
        login:(state,action)=>{
            return state = true;
        },
        logout:(state)=>{
            return state = false;
        }
    }
})

export const {login, logout} = userSlice.actions

export default userSlice.reducer