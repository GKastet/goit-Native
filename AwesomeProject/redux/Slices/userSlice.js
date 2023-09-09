import { createSlice } from "@reduxjs/toolkit";
import { initialStateUser } from "../initialState";

const userSlice = createSlice({
    name: 'user',
    initialState: initialStateUser,
    reducers: {
        userRegister: (state, {payload}) => {            
            state.userObj = payload            
        }
    }
})

export const userReducer = userSlice.reducer
export const {userRegister} = userSlice.actions