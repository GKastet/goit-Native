import { StyleSheet, Text, View, TextInput } from 'react-native';
import { AddImgButton } from "../components/Buttons/addImgButton";
import { StartButton } from "../components/Buttons/startButton";
import { useState } from 'react';

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  


  const onPressLogIn = () => {
    console.log('Log In Btn pressed')
    console.log("Input 2:", email);
    console.log("Input 3:", password);
  }
  
  return (
    <View style={styles.container}>      
      <Text style={styles.text}>Увійти</Text>
      <View style={styles.inputBox}>
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
            onChangeText={setPassword}            
          />
          <Text style={styles.showText}>Показати</Text>
        </View>
        </View>

      <StartButton title={'Увійти'} onPress={onPressLogIn}/>
      <Text style={styles.bottomText}>Немає акаунту? Зареєструватися</Text>      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {        
    paddingLeft: 16,
    paddingRight: 16,
    paddingVertical: 0,    
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    width: "100%",
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
    fontFamily: 'Roboto-Medium',
    fontSize: 30
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
    fontFamily: 'Roboto-Regular',
  },
  showText: {
    position: "absolute",
    top: 16,
    // transform: [{ translateX: '-50' }],
    // translateX: '-50',
    right: 16,
    color: '#1B4371',
    fontFamily: 'Roboto-Regular',    
  },
  bottomText: {
    color: '#1B4371',
    fontFamily: 'Roboto-Regular',
  }
  
});

