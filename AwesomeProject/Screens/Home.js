import { Pressable, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { LogOutBtn } from "../components/Buttons/logOutBtn";

//import { PostsScreen, CreatePostsScreen, ProfileScreen } from "../Screens";

const Tabs = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  // headerShown: false,
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
  const navigation = useNavigation();
  return (
    
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Posts",
          headerTitle: "Публікації",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            color: "#212121",
          },
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: '#0000004D',
            boxShadow: '0px 0.5px 0px 0px #0000004D',
          },
          headerRight: () => (
            <LogOutBtn style={{marginRight: 10}}/>            
          ),
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
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          title: "CreatePosts",
          headerTitle: "Створити публікацію",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            color: "#212121",
          },
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: '#0000004D',
            boxShadow: '0px 0.5px 0px 0px #0000004D',
          },          
          tabBarStyle: {display: 'none'},
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate("PostsScreen")}
              style={{ marginLeft: 10 }}
            >
              <Feather
                name="arrow-left"
                size={24}
                color="#212121CC"
              />
            </Pressable>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={styles.createPostsActive}
              >
                <Feather
                  name="plus"
                  size={24}
                  color={focused ? "#212121CC" : "#fff"}
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "Profile",
          headerTitle: "Профіль",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            color: "#212121",
          },
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: '#0000004D',
            boxShadow: '0px 0.5px 0px 0px #0000004D',
          },
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
  // createPosts: {
  //   width: 70,
  //   height: 40,
  //   borderRadius: 20,
  //   borderWidth: 2,
  //   borderColor: "#FF6C00",
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
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
