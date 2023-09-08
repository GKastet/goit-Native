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
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/Slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth, loginDB } from '../../config';
import { getDataFromFirestore } from "../Helpers/helpers";
import { commentsAllApiAction, fotoDataApiAction } from "../../redux/Slices/fotoSlice";

export const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isEmailFocus, setIsEmailFocus] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onPressLogIn = async () => {
    // if(!email || !password){
    //   Alert.alert('Please, fill up all inputs 😉')
    //   return
    // }else if(password?.length < 6){
    //   Alert.alert('Password must be min 6 characters 😉')
    //   return
    // }
    const userData = await loginDB(email, password)
    const fotoDataApi = await getDataFromFirestore (`foto`)
    const commentsAllApi = await getDataFromFirestore (`comments`)
    // console.log('fotoDataApi', fotoDataApi);
    console.log('commentsAllApi', commentsAllApi);

    const userObj = {
      userLogin: userData.displayName,      
      userEmail: userData.email,
      userUid: userData.uid      
    }
    dispatch(userRegister(userObj))
    dispatch(fotoDataApiAction(fotoDataApi))
    dispatch(commentsAllApiAction(commentsAllApi)) //


    setEmail("");
    setPassword("");
    navigation.navigate("Home");
    // clear()
  };

  const isFocus = (name) => {
    if (name === "email") {
      setIsEmailFocus(true);
      return;
    } else if (name === "password") {
      setIsPasswordFocus(true);
      return;
    }
    return;
  };

  const isBlur = (name) => {
    if (name === "email") {
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
          title={"Увійти"}
          onPress={onPressLogIn}
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
