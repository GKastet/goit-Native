import {
  StyleSheet,
  // TouchableOpacity,
  Image,
  Text,
  TextInput,
  View,
  //TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { AddImgButton } from "../components/Buttons/addImgButton";
import { StartButton } from "../components/Buttons/startButton";

import { useState } from "react";

export const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onAddImgBtnPress = () => {
    console.log("Add img button pressed");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmitRegistration = () => {
    console.log("REGISTERED Btn pressed");
    console.log("Input 1:", login);
    console.log("Input 2:", email);
    console.log("Input 3:", password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgThumb}>
        <Image style={styles.img} />
        <AddImgButton onPress={onAddImgBtnPress} />
      </View>
      <Text style={styles.text}>Реєстрація</Text>
      
        <View style={styles.inputBox}>
        <TextInput
          style={[styles.input, { width: "100%" }]}
          placeholder="Логін"
          value={login}
          onChangeText={setLogin}
        />
        <TextInput
          style={styles.input}
          placeholder="Адреса електронної пошти"
          value={email}
          onChangeText={setEmail}
          // autoComplete="email"
        />
        <View>
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            value={password}
            secureTextEntry={!showPassword}
            onChangeText={setPassword}
          />
          <Pressable
            style={styles.showTextContainer}
            onPress={toggleShowPassword}
          >
            <Text style={styles.showText}>Показати</Text>
          </Pressable>
        </View>
        </View>
      {/* </KeyboardAvoidingView> */}

      <StartButton
        title={"Зареєструватися"}
        onPress={onSubmitRegistration}
      />
      <Text style={styles.bottomText}>Вже є акаунт? Увійти</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
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
    // marginBottom: 32,
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
    // fontWeight: "500",
    fontSize: 30,
  },
  bottomText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
  inputBox: {
    // flex: 1,
    display: "flex",
    width: "100%",
    gap: 16,
  },

  input: {
    // display: 'flex',
    width: "100%",
    // position: "relative",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingStart: 16,
    paddingVertical: 16,
    fontFamily: "Roboto-Regular",
  },
  showTextContainer: {
    position: "absolute",
    top: 0,
    right: 16,
    height: "100%",
    justifyContent: "center",
  },
  showText: {
    color: "#1B4371",
  },
  // showText: {
  //   position: "absolute",
  //   // top: 14,
  //   // transform: [{ translateX: '-50%' }],
  //   // translateX: '-50%',
  //   right: 16,
  //   color: "#1B4371",
  //   fontFamily: 'Roboto-Regular',
  // },
});
