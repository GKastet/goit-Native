import { StatusBar } from "expo-status-bar";
import {
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { LogInForm } from "../components/Forms/logInForm";

export const LoginScreen = () => {
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
            keyboardVerticalOffset={-311}
          >
            <View style={styles.containerL}>
              <Text style={styles.text}>Увійти</Text>

              <LogInForm />

              <Text style={styles.bottomText}>
                Немає акаунту? Зареєструватися
              </Text>
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
  containerL: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    // width: "100%",
    height: 500,
    marginTop: "auto",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: "relative",
  },
  text: {
    marginTop: 32,
    marginBottom: 33,
    paddingVertical: 0,
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
  },
  bottomText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
});
