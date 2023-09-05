import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userReducer } from "./Slices/userSlice";
import { fotoReducer } from "./Slices/fotoSlice";


//import fotoReducer from './'

const userPersistConfig = {
  key: "user",
  storage: AsyncStorage,
};

const store = configureStore({
  reducer: {
    user: persistReducer(userPersistConfig, userReducer),
    foto: fotoReducer,
    // whitelist: ['userObj'],
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
export default store;
