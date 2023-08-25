import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import addButton from "../../img/round-add-button.svg";
import add from "../../img/add.png";
import { IoMdAddCircleOutline } from 'react-icons/io';
// IoMdAddCircleOutline

export const CustomButton = ({ onPress }) => {
  return (
    <TouchableOpacity      
      style={styles.buttonContainer}
      onPress={onPress}
    >
      <Text style={styles.btnText}>+</Text>
      {/* <SvgXml  xml={addButton} width="25" height="25" /> */}
      
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
    backgroundColor: "blue",
  },
  btnText: {
    color: "white",
  },
});
