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
} from "react-native";
import { AddImgButton } from "../components/Buttons/addImgButton";
import { RegistrationForm } from "../components/Forms/registrationForm";

export const RegistrationScreen = () => {
  const onAddImgBtnPress = () => {
    console.log("Add img button pressed");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../img/PhotoBG.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <KeyboardAvoidingView
            style={styles.keyboard}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={-50}
          >
            <View style={styles.containerR}>
              <View style={styles.imgThumb}>
                <Image style={styles.img} />
                <AddImgButton onPress={onAddImgBtnPress} />
              </View>
              <Text style={styles.text}>Реєстрація</Text>

              <RegistrationForm />

              <Text style={styles.bottomText}>Вже є акаунт? Увійти</Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  keyboard: {
    flex: 1,
    width: "100%",
  },
  containerR: {
    // flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // width: "100%",
    height: 500,
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
  bottomText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
});
