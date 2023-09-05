import { createSlice } from "@reduxjs/toolkit";
import { initialStateUser } from "../initialState";

const userSlice = createSlice({
    name: 'user',
    initialState: initialStateUser,
    reducers: {
        userRegister: (state, {payload}) => {
            console.log('payload', payload);
            state.userObj = payload
            console.log('pislya', state.userObj);
        }
    }
})

export const userReducer = userSlice.reducer
export const {userRegister} = userSlice.actions