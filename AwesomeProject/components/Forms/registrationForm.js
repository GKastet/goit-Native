import { useState } from "react";
import {
  StyleSheet,
  Pressable,
  TextInput,
  View,
  Text,
  Alert,
} from "react-native";
import { StartButton } from "../Buttons/startButton";
import { useNavigation } from "@react-navigation/native";

export const RegistrationForm = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoginFocus, setIsLoginFocus] = useState(false);
  const [isEmailFocus, setIsEmailFocus] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmitRegistration = () => {
    console.log("login:", login);
    console.log("email:", email);
    console.log("password:", password);
    //Alert.alert(`login: ${login}, email: ${email}, password: ${password}`);
    setLogin("");
    setEmail("");
    setPassword("");
    navigation.navigate("Home");
  };

  const isFocus = (name) => {
    if (name === "login") {
      setIsLoginFocus(true);
      return;
    } else if (name === "email") {
      setIsEmailFocus(true);
      return;
    } else if (name === "password") {
      setIsPasswordFocus(true);
      return;
    }
    return;
  };

  const isBlur = (name) => {
    if (name === "login") {
      setIsLoginFocus(false);
      return;
    } else if (name === "email") {
      setIsEmailFocus(false);
      return;
    } else if (name === "password") {
      setIsPasswordFocus(false);
      return;
    }
    return;
  };

  return (
    <>
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Логін"
          value={login}
          onChangeText={setLogin}
          onFocus={() => isFocus("login")}
          onBlur={() => isBlur("login")}
          style={isLoginFocus ? styles.inputActive : styles.input}
        />
        <TextInput
          placeholder="Адреса електронної пошти"
          autoComplete="email"
          value={email}
          onChangeText={setEmail}
          onFocus={() => isFocus("email")}
          onBlur={() => isBlur("email")}
          style={isEmailFocus ? styles.inputActive : styles.input}
        />
        <View>
          <TextInput
            placeholder="Пароль"
            value={password}
            secureTextEntry={!showPassword}
            onChangeText={setPassword}
            onFocus={() => isFocus("password")}
            onBlur={() => isBlur("password")}
            style={isPasswordFocus ? styles.inputActive : styles.input}
          />
          <Pressable
            style={styles.showTextContainer}
            onPress={toggleShowPassword}
          >
            {showPassword ? (
              <Text style={styles.showText}>Приховати</Text>
            ) : (
              <Text style={styles.showText}>Показати</Text>
            )}
          </Pressable>
        </View>
      </View>
      <View style={{ width: "100%", marginTop: 43, marginBottom: 16 }}>
        <StartButton
          title={"Зареєструватися"}
          onPress={onSubmitRegistration}
          bcgColor="#FF6C00"
          textColor='#fff'
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    display: "flex",
    width: "100%",
    gap: 16,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingStart: 16,
    paddingVertical: 16,
    fontFamily: "Roboto-Regular",
  },
  inputActive: {
    width: "100%",
    height: 50,
    borderColor: "#FF6C00",
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
});
