import { StatusBar } from 'expo-status-bar';
import { Button, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TextInputComponent, View } from 'react-native';
import { useFonts } from 'expo-font';
import { RegistrationScreen } from './Screens/RegistrationScreen';
import { LoginScreen } from './Screens/LoginScreen';
import { PostsScreen } from './Screens/PostsScreen';

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  // });
  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/PhotoBG.png')} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      {/* <Image source={require('./img/PhotoBG.png')} style={{width: 500, height: 500}}/> */}
      <RegistrationScreen/>
      {/* <LoginScreen/>
      <PostsScreen/> */}
      {/* <Image source={require('./img/PhotoBG.png')}/> */}
      {/* <ImageBackground source={require('./img/PhotoBG.png')}/> */}
      {/* <Button type='button'>Click</Button> */} 
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
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
  text: {
    color: '#fff',
  }
});
