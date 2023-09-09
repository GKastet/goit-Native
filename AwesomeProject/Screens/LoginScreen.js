import { StatusBar } from "expo-status-bar";
import {
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LogInForm } from "../components/Forms/logInForm";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-240}
      >
        <View style={styles.container}>
          <ImageBackground
            source={require("../img/PhotoBG.png")}
            resizeMode="cover"
            style={styles.imageBCG}
          >
            <View style={styles.containerL}>
              <Text style={styles.text}>Увійти</Text>
              <LogInForm />
              <View style={styles.bottomTextBox}>
                <Text style={styles.bottomText}>Немає акаунту?</Text>
                <Pressable onPress={() => navigation.navigate("Registration")}>
                  <Text style={styles.bottomTextLink}>Зареєструватися</Text>
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
    // alignItems: "center",
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
  containerL: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
    alignItems: "center",

    // justifyContent: "center",
    width: "100%",
    height: 489,
    marginTop: "auto",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: "relative",
  },
  text: {
    // marginTop: 32,
    marginBottom: 33,
    paddingVertical: 0,
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

export default LoginScreen;
