import { createSlice } from "@reduxjs/toolkit";
import { initialStateFoto } from "../initialState";

const fotoSlice = createSlice({
  name: "foto",
  initialState: initialStateFoto,
  reducers: {
    fotoData: (state, { payload }) => {
      state.fotoObj.push({ data: payload });
    },
    fotoDataApiAction: (state, { payload }) => {
      state.fotoObj = payload;
    },
    fotoLikesCounter: (state, { payload }) => {
      const fotoIndex = state.fotoObj.findIndex(
        (foto) => foto.id === payload.fotoId
      );
      const fotoFind = state.fotoObj.find((foto) => foto.id === payload.fotoId);
      const changeLikes = {
        ...fotoFind,
        data: { ...fotoFind.data, fotoLikes: payload.totalLikes },
      };
      const updated = state.fotoObj.splice(fotoIndex, 1, changeLikes);
    },
    commentsAllApiAction: (state, { payload }) => {
      state.commentsArray = payload;
    },
    fotoAddComments: (state, { payload }) => {
      state.commentsArray.push(payload);
    },
  },
});

export const fotoReducer = fotoSlice.reducer;
export const {
  fotoData,
  fotoDataApiAction,
  fotoLikesCounter,
  fotoAddComments,
  commentsAllApiAction,
} = fotoSlice.actions;
