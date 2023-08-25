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
import { CustomButton } from "../components/addButton/addButton";
import { SvgXml } from "react-native-svg";



export const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgThumb}>
        <Image style={styles.img} />
        {/* <Button style={styles.button} title='+' onPress={() => console.log('Button pressed')} /> */}
        <CustomButton          
          onPress={() => console.log("Button pressed")}
        />
      </View>
      <Text style={styles.text}>Реєстрація</Text>
      <Button title="Зареєструватися" onPress={() => console.log('REGISTERED')} style={styles.button}/>      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
