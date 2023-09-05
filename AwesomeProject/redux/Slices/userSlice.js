import { createSlice } from "@reduxjs/toolkit";
import { initialStateUser } from "../initialState";

const userSlice = createSlice({
    name: 'user',
    initialState: initialStateUser,
    reducers: {
        userRegister: (state, {payload}) => {
            state.user = payload
        }
    }
})

export const userReducer = userSlice.reducer