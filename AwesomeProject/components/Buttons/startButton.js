import { TouchableOpacity, StyleSheet, Text, View, Button } from "react-native";

export const StartButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={styles.button}
    >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    //   position: "absolute",
    //   alignItems: "center",
    //   justifyContent: "center",
    //   width: 25,
    //   height: 25,
    //   bottom: 10,
    //   right: 0,
    //   borderRadius: 50,
    //   backgroundColor: "white",
  },
  button: {
    width: '100%',
    height: 51,
    borderRadius: 100,
    padding: '16px 32px',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },

  btnText: {
    color: "white",
  },
});
