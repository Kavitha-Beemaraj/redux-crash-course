import { createSlice } from "@reduxjs/toolkit";

const initailStateValue= { name:"", age:0, email:"", mobile:""}

export const userSlice= createSlice({
    name: "user",
    initialState: { value:{ name:"", age:0, email:"", mobile:""}},
    reducers: {
        login: (state, action)=>{
            state.value = action.payload
        },

        logout: (state,action)=>{
            state.value= initailStateValue
        }
    }
})

export const {login, logout}= userSlice.actions
export default userSlice.reducer