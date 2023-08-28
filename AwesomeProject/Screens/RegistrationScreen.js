import {
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  ImageBackground,
  Text,
  TextInput,
  View,
} from "react-native";
import addButton from "../img/round-add-button.svg";
import add from "../img/add.png";
import { CustomButton } from "../components/Buttons/addButton";
import { SvgXml } from "react-native-svg";
import { StartButton } from "../components/Buttons/startButton";



export const RegistrationScreen = () => {
  const onPressRegistration = () => {
    console.log('REGISTERED')
  }


  return (
    <View style={styles.container}>
      <View style={styles.imgThumb}>
        <Image style={styles.img} />        
        <CustomButton          
          onPress={() => console.log("Button pressed")}
        />
      </View>
      <Text style={styles.text}>Реєстрація</Text>
      {/* <Button title="Зареєструватися" onPress={() => onPressRegistration()} style={styles.button}/> */}
      <StartButton title={'Зареєструватися'} onPress={onPressRegistration}/>      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    
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
    position: "absolute",
    top: -60,
  },
  img: {
    width: 120,
    height: "100%",
    backgroundColor: "lightgrey",
    borderRadius: 16,
  },
  button: {
    // position: "fixed",
    // borderRadius: 16,
    // top: 0,
    // display: "block",
    backgroundColor: "orange",
    // color: "red",
  },

  text: {
    color: "#212121",
    fontWeight: '500',
    fontSize: 30
  },  
});
