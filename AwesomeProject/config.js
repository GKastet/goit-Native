// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import {
  createUserWithEmailAndPassword,
  //getAuth,
  initializeAuth,
  onAuthStateChanged,  
  signInWithEmailAndPassword,
  signOut,
  getReactNativePersistence,
  updateProfile,
} from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyARFzU1aK-qr6egqJwjB6QXEGy_t6QSkpg",
  authDomain: "awesome-react-native-f31a2.firebaseapp.com",
  databaseURL:
    "<https://awesome-react-native-f31a2-default-rtdb.firebaseio.com>",
  projectId: "awesome-react-native-f31a2",
  storageBucket: "awesome-react-native-f31a2.appspot.com",
  messagingSenderId: "345423250264",
  appId: "1:345423250264:web:0547061730e82dd5db9b2d",
  measurementId: "G-M29T46E10S",
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//export const auth = getAuth(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const authStateChanged = async (onChange = () => {}) => {
  onAuthStateChanged((user) => {
    onChange(user);
  });
};

export const db = getFirestore(app);
export const storage = getStorage(app);

export const registerDB = async (email, password, login) => {
  try {    
    const credentials = await createUserWithEmailAndPassword(auth, email, password);    
    console.log("credentialsRegister", credentials.user);
    await updateProfile(auth.currentUser, {
              displayName: login,
               //photoURL: avatar,
            });               
  } catch (error) {
    if (error.code === "auth/invalid-email") {
      console.log("errorEmail", error.code);
     }else if (error.code === "auth/weak-password") {
      console.log("errorPassword", error.code);
    }else{
        console.log("error", error);
    }
  }
};

export const loginDB = async (email, password) => {    
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
     //console.log("credentialsLogin", credentials.user);
    return credentials.user;
  } catch (error) {
    if (error.code === "auth/wrong-password") {
        console.log("errorWrongPas", error.code);
       }else if (error.code === "auth/missing-password") {
        console.log("errorMissingPas", error.code);
      }else{
          console.log("error", error);
      }    
  }
};

export const logout = async () => {
   await signOut(auth);  
};
