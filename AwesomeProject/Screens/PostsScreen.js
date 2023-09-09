import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectFotoData, selectUserData } from "../redux/selectors";
import { nanoid } from "@reduxjs/toolkit";
import SinglePost from "../components/singlePost/singlePost";

const PostsScreen = ({ route }) => {
  //console.log(route);
  const user = useSelector(selectUserData);
  const fotoArrState = useSelector(selectFotoData);
  const [fotoArr, setFotoArr] = useState(fotoArrState);
  //console.log("fotoArrPostsScreen", fotoArr);

  useEffect(() => {
    setFotoArr(fotoArrState);
  }, [fotoArrState]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.user}>
        <View style={styles.imgUserThumb}>
          <Image style={styles.imgUser} />
        </View>
        <View>
          <Text style={styles.userName}>
            {user?.userLogin ? user.userLogin : "Ivan Mazepa"}
          </Text>
          <Text style={styles.userEmail}>
            {user?.userEmail ? user.userEmail : "test@test.com"}
          </Text>
        </View>
      </View>
      <ScrollView>
        {fotoArr.length ? (
          fotoArr?.map((foto) => (
            <SinglePost
              key={nanoid()}
              foto={foto.data}
            />
          ))
        ) : (
          <SinglePost />
        )}
      </ScrollView>
      <View style={styles.allPosts}></View>
    </SafeAreaView>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
    width: "100%",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    paddingBottom: 52,
  },
  user: {
    // width: "100%",
    width: 343,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 32,
  },
  imgUserThumb: {
    width: 60,
    height: 60,
    marginRight: 8,
    borderRadius: 16,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    overflow: "hidden",
  },
  imgUser: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F6F6F6",
    //borderRadius: 8,
  },
  userName: {
    fontFamily: "Roboto-700",
    fontSize: 13,
    color: "#212121",
    lineHeight: 15.23,
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    color: "#212121",
    lineHeight: 12.9,
  },
  allPosts: {},
});
