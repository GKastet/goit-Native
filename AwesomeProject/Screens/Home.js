import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
//import { PostsScreen, CreatePostsScreen, ProfileScreen } from "../Screens";

const Tabs = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 83,
    backGround: "#fff",
    paddingHorizontal: 70,
  },
};
const Home = () => {
  return (
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen
        name="Публікації"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Feather
                  name="grid"
                  size={24}
                  color={focused ? "#FF6C00" : "#212121CC"}
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={focused ? styles.createPostsActive : styles.createPosts}
              >
                <Feather
                  name="plus"
                  size={24}
                  color={focused ? "#fff" : "#FF6C00"}
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="Профіль"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Feather
                  name="user"
                  size={24}
                  color={focused ? "#FF6C00" : "#212121CC"}
                />
              </View>
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  createPosts: {
    width: 70,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  createPostsActive: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
