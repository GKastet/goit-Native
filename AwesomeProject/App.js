import { StatusBar } from 'expo-status-bar';
import { Button, Image, ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
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
      
      {/* <RegistrationScreen/> */}
      <LoginScreen/>
      {/* <PostsScreen/> */}
      
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
});
