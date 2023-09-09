import { TouchableOpacity, StyleSheet, Text, Pressable } from "react-native";

export const StartButton = ({ title, onPress, bcgColor, textColor }) => {
  return (
    <Pressable
      onPress={() => onPress()}
      style={[styles.button, { backgroundColor: bcgColor }]}
    >
      <Text style={[styles.btnText, { color: textColor }]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 51,
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 32,
    // marginTop: 43,
    // marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "orange",
  },

  btnText: {
    // color: "#fff",
    fontFamily: "Roboto-Regular",
  },
});
