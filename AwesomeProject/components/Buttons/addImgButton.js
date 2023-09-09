import { StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const AddImgButton = ({ onPress }) => {
  // const pickImage = async () => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   if (!result.canceled) {
  //     setAvatar(result.assets[0].uri);
  //     // console.log(avatar);
  //   }
  // };
  return (
    <Pressable
      style={styles.buttonContainer}
      onPress={() => onPress()}
      // onPress={()=>pickImage()}
    >
      <AntDesign
        name="pluscircleo"
        size={24}
        color="orange"
      />
    </Pressable>
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
});
