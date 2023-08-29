import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { useFonts } from 'expo-font';
import { RegistrationScreen } from './Screens/RegistrationScreen';
import { LoginScreen } from './Screens/LoginScreen';
import { PostsScreen } from './Screens/PostsScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf')
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* <KeyboardAvoidingView > */}
      {/* <KeyboardAvoidingView style={styles.screenTouch}> */}
     {/* <KeyboardAvoidingView
         style={styles.inputBox}
        behavior={Platform.isMac ? "padding" : "height"}
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         keyboardVerticalOffset = {-150}
       > */}
    <View style={styles.container}>
      <ImageBackground source={require('./img/PhotoBG.png')} resizeMode="cover" style={styles.image}>      
      
      <RegistrationScreen/>
      {/* <LoginScreen/> */}
      {/* <PostsScreen/> */}
      
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
     {/* </KeyboardAvoidingView> */}
     {/* </KeyboardAvoidingView> */}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',    
    alignItems: 'center',
    justifyContent: 'center',
  },
  // screenTouch: {    
  //   width: "100%",    
  // }, 
});
