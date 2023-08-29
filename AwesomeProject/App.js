import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import { PostsScreen } from "./Screens/PostsScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
          {/* <RegistrationScreen /> */}
          <LoginScreen/>
          {/* <PostsScreen/> */}
    </>
  );

  
}

// const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // image: {
  //   width: "100%",
  //   height: "100%",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // screenTouch: {
  //   width: "100%",
  // },
// });
