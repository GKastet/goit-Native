import {  
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,  
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { AddImgButton } from "../components/Buttons/addImgButton";
//import SinglePostProfile from "../components/singlePost/singlePostProfile";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectFotoData, selectUserData } from "../redux/selectors";
import { LogOutBtn } from "../components/Buttons/logOutBtn";
//import SinglePostProfile from "../components/singlePost/singlePostsProfile";
import SinglePost from "../components/singlePost/singlePost";
import SinglePostProfile from "../components/singlePost/singlePostsProfile";


const ProfileScreen = () => {
  const user = useSelector(selectUserData)
  const fotoArr = useSelector(selectFotoData);   
  const userId = user.userUid  
  
  const onAddImgBtnPress = () => {
    console.log("Add img button pressed");
  };
  

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-180}
      >
        <View style={styles.container}>
          <ImageBackground
            source={require("../img/PhotoBG.png")}
            resizeMode="cover"
            style={styles.imageBCG}
          >
            <SafeAreaView style={styles.containerSafe}>
              <View style={styles.containerR}>
                <View style={styles.imgThumb}>
                  <Image style={styles.img} />
                  <AddImgButton onPress={onAddImgBtnPress} />
                </View>
                <LogOutBtn style={styles.goBackBtn}/>
                <Text style={styles.text}>{user?.userLogin ? user.userLogin : 'Ivan Mazepa'}</Text>
                <ScrollView>                
                  {fotoArr.length ? (
                    fotoArr?.filter(foto=>foto.data.userUid === userId).map((foto) => (
                      // <SinglePost
                      //   key={nanoid()}
                      //   foto={foto.data}
                      // />
                      <SinglePostProfile
                        key={nanoid()}
                        foto={foto}
                      />
                    ))
                  ) : (
                    <SinglePost />
                  )}
                </ScrollView>
              </View>              
            </SafeAreaView>
          </ImageBackground>
          <StatusBar style="auto" />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },

  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    width: "100%",
    // justifyContent: "flex-end",
    /////////////////////////////////////////////////
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // // width: "100%",
    // backgroundColor: '#fff',
  },

  imageBCG: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerSafe: {
    // flex: 1,
    // alignItems: "center",
    //justifyContent: "center",
    width: "100%",
    // paddingHorizontal: 10,
    // backgroundColor: "#fff",
    // paddingBottom: 52,
  },

  containerR: {
    // flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "center",
    // justifyContent: "flex-end",
    width: "100%",
    height: 665,
    marginTop: "auto",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: "relative",
  },
  goBackBtn: {
    position: "absolute",
    top: 22,
    right: 16,
  },

  imgThumb: {
    width: 132,
    height: 120,
    marginTop: 0,
    //position: "absolute",
    top: -60,
    borderRadius: 16,
    overflow: "hidden",
  },
  img: {
    width: 120,
    height: "100%",
    backgroundColor: "lightgrey",
    borderRadius: 16,
  },
  text: {
    //marginTop: 32,
    marginBottom: 33,
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
  },  
});
