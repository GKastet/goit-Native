import { createSlice } from "@reduxjs/toolkit";
import { initialStateFoto } from "../initialState";

const fotoSlice = createSlice({
    name: 'foto',
    initialState: initialStateFoto,
    reducers: {
        fotoData: (state, {payload}) => {
            // console.log('payload', payload);
            // console.log('do', state.fotoObj);            
            state.fotoObj.push({data: payload});
            // console.log('pislya', state.fotoObj);
        },
        fotoDataApiAction: (state, {payload}) => {
            // console.log('payload', payload);
            state.fotoObj = payload
            // console.log('pislya', state.fotoObj);        
        },
        fotoLikesCounter: (state, {payload}) => {
            //  console.log('payload', payload);
            const fotoIndex = state.fotoObj.findIndex(foto => foto.id===payload.fotoId)
            const fotoFind = state.fotoObj.find(foto=> foto.id===payload.fotoId)
            const changeLikes = {...fotoFind, data: {...fotoFind.data, fotoLikes: payload.totalLikes}}            
            const updated = state.fotoObj.splice(fotoIndex, 1, changeLikes);            
            //console.log('new', state.fotoObj);            
        },
        fotoAddComments: (state, {payload})=>{
             console.log('payload', payload);
        },
        commentsAllApiAction: (state, {payload})=>{
            console.log('payloadComments', payload);
            state.commentsArray = payload
        }
    }
})

export const fotoReducer = fotoSlice.reducer
export const {fotoData, fotoDataApiAction, fotoLikesCounter, fotoAddComments, commentsAllApiAction} = fotoSlice.actions