import {
  StyleSheet,
  // TouchableOpacity,  
  Image,  
  Text,
  TextInput,
  View,
} from "react-native";
import { AddImgButton } from "../components/Buttons/addImgButton";
import { StartButton } from "../components/Buttons/startButton";

import { useState } from "react";

export const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onAddImgBtnPress = () => {
    console.log("Add img button pressed");
  };

  const handleLogin = (text) => {
    setLogin(text);
  };

  const handleEmail = (text) => {
    setEmail(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
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
          onChangeText={handleLogin}
        />
        <TextInput
          style={styles.input}
          placeholder="Адреса електронної пошти"
          value={email}
          onChangeText={handleEmail}
        />
        <View>
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            value={password}
            onChangeText={handlePassword}
          />
          <Text style={styles.showText}>Показати</Text>
        </View>
      </View>

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
    fontWeight: "500",
    fontSize: 30,
  },
  bottomText: {
    color: "#1B4371",
  },
  inputBox: {
    display: "flex",
    width: "100%",
    gap: 16,
  },

  input: {
    // display: 'flex',
    // width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingStart: 16,
    paddingVertical: 16,
  },
  showText: {
    position: "absolute",
    top: 14,
    // transform: [{ translateX: '-50%' }],
    // translateX: '-50%',
    right: 16,
    color: '#1B4371',    
  }
});
