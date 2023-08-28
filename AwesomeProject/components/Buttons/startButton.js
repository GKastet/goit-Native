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
  
  button: {
    width: '100%',
    height: 51,    
    borderRadius: 100,    
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 43,
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },

  btnText: {
    color: "white",
  },
});
