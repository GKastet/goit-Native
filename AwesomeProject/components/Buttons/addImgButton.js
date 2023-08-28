import { TouchableOpacity, StyleSheet, Text, View, Button } from "react-native";
import { AntDesign } from '@expo/vector-icons'


export const AddImgButton = ({ onPress }) => {
  return (
    
    <TouchableOpacity       
      style={styles.buttonContainer}
      onPress={()=>onPress()}
    >
      <AntDesign name="pluscircleo" size={24} color="orange" />
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    bottom: 10,
    right: 0,
    borderRadius: 50,
    backgroundColor: "white",
  },
  btnText: {
    color: "white",
  },
});
