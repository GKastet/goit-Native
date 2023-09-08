import { StatusBar } from "expo-status-bar";
import {
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Button,
} from "react-native";
import { AddImgButton } from "../components/Buttons/addImgButton";
import { RegistrationForm } from "../components/Forms/registrationForm";
import { Link, useNavigation } from "@react-navigation/native";

const RegistrationScreen = () => {
  const navigation = useNavigation();

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
            <View style={styles.containerR}>
              <View style={styles.imgThumb}>
                <Image style={styles.img} />
                <AddImgButton onPress={onAddImgBtnPress} />
              </View>
              <Text style={styles.text}>Реєстрація</Text>

              <RegistrationForm />
              <View style={styles.bottomTextBox}>
                <Text style={styles.bottomText}>Вже є акаунт?</Text>
                <Pressable onPress={() => navigation.navigate("Login")}>
                  <Text style={styles.bottomTextLink}>Увійти</Text>
                </Pressable>
              </View>
            </View>
          </ImageBackground>
          <StatusBar style="auto" />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    width: "100%",
    // justifyContent: "flex-end",
  },
  imageBCG: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  keyboard: {
    flex: 1,
    // width: "100%",
  },
  containerR: {
    // flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // justifyContent: "flex-end",
    width: "100%",
    height: 549,
    marginTop: "auto",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: "relative",
  },
  imgThumb: {
    width: 132,
    height: 120,
    marginTop: 0,
    position: "absolute",
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
    marginTop: 32,
    marginBottom: 33,
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
  },
  bottomTextBox: {
    display: "flex",
    flexDirection: "row",
  },
  bottomText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
  bottomTextLink: {
    marginLeft: 6,
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    textDecorationLine: "underline",
  },
});

export default RegistrationScreen;
