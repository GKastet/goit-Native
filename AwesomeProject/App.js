import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Home,
  RegistrationScreen,
  LoginScreen,
  CommentsScreen,
  MapScreen,
} from "./Screens";
import GoBackBtn from "./components/Buttons/goBackBtn";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-700": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <PersistGate
          // loading={<Text>Loading...</Text>}
          loading={null}
          persistor={persistor}
        >
          <NavigationContainer>
            <MainStack.Navigator initialRouteName="RegistrationScreen">
              <MainStack.Screen
                name="Registration"
                component={RegistrationScreen}
                options={{ headerShown: false }}
              />
              <MainStack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <MainStack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <MainStack.Screen
                name="CommentsScreen"
                component={CommentsScreen}
                options={{
                  headerTitle: "Коментарі",
                  headerTitleAlign: "center",
                  headerTitleStyle: {
                    fontFamily: "Roboto-Medium",
                    color: "#212121",
                  },
                  headerStyle: {
                    borderBottomWidth: 1,
                    borderBottomColor: "#0000004D",
                    boxShadow: "0px 0.5px 0px 0px #0000004D",
                  },
                  headerLeft: () => <GoBackBtn />,
                }}
              />
              <MainStack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                  headerTitle: "Карта",
                  headerTitleAlign: "center",
                  headerTitleStyle: {
                    fontFamily: "Roboto-Medium",
                    color: "#212121",
                  },
                  headerStyle: {
                    borderBottomWidth: 1,
                    borderBottomColor: "#0000004D",
                    boxShadow: "0px 0.5px 0px 0px #0000004D",
                  },
                  headerLeft: () => <GoBackBtn />,
                }}
              />
            </MainStack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
}


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyARFzU1aK-qr6egqJwjB6QXEGy_t6QSkpg",
//   authDomain: "awesome-react-native-f31a2.firebaseapp.com",
//   projectId: "awesome-react-native-f31a2",
//   storageBucket: "awesome-react-native-f31a2.appspot.com",
//   messagingSenderId: "345423250264",
//   appId: "1:345423250264:web:0547061730e82dd5db9b2d",
//   measurementId: "G-M29T46E10S"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//https://awesome-react-native-f31a2-default-rtdb.firebaseio.com/