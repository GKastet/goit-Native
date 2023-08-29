import { useState } from "react";
import { StyleSheet, Pressable, TextInput, View, Text, Alert } from "react-native";
import { StartButton } from "../Buttons/startButton";

export const RegistrationForm = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmitRegistration = () => {    
    console.log("login:", login);
    console.log("email:", email);
    console.log("password:", password);
    // Alert.alert(`${{login: login, email: email}}`)
    Alert.alert(`login: ${login}, email: ${email}, password: ${password}`)
    setLogin('');
    setEmail('');
    setPassword('');
  };  

  return (
    <>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Логін"
          value={login}
          onChangeText={setLogin}
        />
        <TextInput
          style={styles.input}
          placeholder="Адреса електронної пошти"
          autoComplete="email"
          value={email}
          onChangeText={setEmail}
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
            {showPassword ? (
              <Text style={styles.showText}>Приховати</Text>
            ) : (
              <Text style={styles.showText}>Показати</Text>
            )}
          </Pressable>
        </View>
      </View>
      <StartButton
        title={"Зареєструватися"}
        onPress={onSubmitRegistration}
      />
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
