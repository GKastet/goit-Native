import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, RegistrationScreen, LoginScreen, CommentsScreen, MapScreen } from "./Screens";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-700": require("./assets/fonts/Roboto-Bold.ttf")
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
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
            options={{ headerShown: false}}
          />
          <MainStack.Screen
            name="CommentsScreen"
            component={CommentsScreen}
            options={{ headerShown: false}}
          />
          <MainStack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{ headerShown: false}}
          />
          
        </MainStack.Navigator>
      </NavigationContainer>
    </>
  );
}
