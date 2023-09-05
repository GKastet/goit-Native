import { createSlice } from "@reduxjs/toolkit";
import { initialStateFoto } from "../initialState";

const fotoSlice = createSlice({
    name: 'foto',
    initialState: initialStateFoto,
    reducers: {
        fotoData: (state, {payload}) => {
            console.log('payload', payload);
            console.log('do', state.fotoObj);
            // state.foto = payload
            state.fotoObj.push(payload);
            console.log('pislya', state.fotoObj);
        }
    }
})

export const fotoReducer = fotoSlice.reducer
export const {fotoData} = fotoSlice.actions