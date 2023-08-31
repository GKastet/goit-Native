import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { StartButton } from "../components/Buttons/startButton";
import CameraAct from "../components/Camera/Camera";
import { useNavigation } from "@react-navigation/native";

const CreatePostsScreen = () => {
  const [nameFoto, setNameFoto] = useState("");
  const [place, setPlace] = useState("");
  const [isNameFocus, setIsNameFocus] = useState(false);
  const [isPlaceFocus, setIsPlaceFocus] = useState(false);

  const navigation = useNavigation()
  

  const onPressPublicate = () => {
    console.log("onPressPublicate");
    console.log(nameFoto, place);
    navigation.navigate('PostsScreen');
    setNameFoto('');
    setPlace('');
  };

  const isFocus = (name) => {
    if (name === "name") {
      setIsNameFocus(true);
      return;
    } else if (name === "place") {
      setIsPlaceFocus(true);
      return;
    }
    return;
  };

  const isBlur = (name) => {
    if (name === "name") {
      setIsNameFocus(false);
      return;
    } else if (name === "place") {
      setIsPlaceFocus(false);
      return;
    }
    return;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-200}
      >
        
        <View style={styles.container}>
          <View>
            <View style={styles.imgThumb}>
              {/* <Image style={styles.img} /> */}
              <CameraAct/>              
            </View>
            <Text style={styles.text}>Завантажте фото</Text>
            <View style={{ gap: 16 }}>
              <TextInput
                placeholder="Назва..."
                placeholderTextColor="#BDBDBD"
                value={nameFoto}
                onChangeText={setNameFoto}
                maxLength={36}
                cursorColor="#FF6C00"
                onFocus={() => isFocus("name")}
                onBlur={() => isBlur("name")}
                style={isNameFocus ? styles.inputActive : styles.input}
              />

              <View
                style={
                  isPlaceFocus
                    ? styles.mapInputContainerActive
                    : styles.mapInputContainer
                }
              >
                <View style={styles.mapIconContainer}>
                  <Feather
                    name="map-pin"
                    size={24}
                    color="#BDBDBD"
                  />
                </View>
                <TextInput
                  placeholder="Місцевість..."
                  placeholderTextColor="#BDBDBD"
                  value={place}
                  onChangeText={setPlace}
                  maxLength={36}
                  cursorColor="#FF6C00"
                  onFocus={() => isFocus("place")}
                  onBlur={() => isBlur("place")}
                  style={styles.mapInput}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              marginTop: 20,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <StartButton
              title={"Опубліковати"}
              onPress={onPressPublicate}
              bcgColor={nameFoto && place ? "#FF6C00" : "#F6F6F6"}
              textColor={nameFoto && place ? "#fff" : "#BDBDBD"}              
            />
          </View>
          <Pressable style={styles.basket} onPress={()=>console.log('basket pressed')}>
            <Feather
              name="trash-2"
              size={24}
              color="#BDBDBD"
            />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: "center",
    // justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  keyboard: {
    flex: 0,
  },
  imgThumb: {
    position: "relative",
    width: 343,
    height: 240,
    marginTop: 32,
    marginBottom: 8,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    overflow: "hidden"
  },
  // img: {
  //   width: "100%",
  //   height: "100%",
  //   backgroundColor: "#F6F6F6",
  //   borderRadius: 8,
  // },  
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
    lineHeight: 18.75,
    marginBottom: 32,
  },
  input: {
    // flex: 1,
    width: "100%",
    height: 50,
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
    paddingStart: 6,
    paddingVertical: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
  },
  inputActive: {
    width: "100%",
    height: 50,
    borderColor: "#FF6C00",
    borderBottomWidth: 1,
    paddingStart: 6,
    paddingVertical: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
  },
  mapInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    marginBottom: 10,
  },
  mapInputContainerActive: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#FF6C00",
    marginBottom: 10,
  },
  mapIconContainer: {
    marginRight: 4,
  },
  mapInput: {
    flex: 1,
    width: "100%",
    height: 50,
    paddingStart: 6,
    paddingVertical: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
  },
  basket: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    bottom: 20    
  },
});
