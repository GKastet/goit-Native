import {
  Alert,
  Dimensions,
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
import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { StartButton } from "../components/Buttons/startButton";

import { FontAwesome } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

import { useNavigation } from "@react-navigation/native";
// import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
// import { PROVIDER_GOOGLE } from "react-native-maps";

const CreatePostsScreen = () => {
  const [nameFoto, setNameFoto] = useState(null);  
  const [isNameFocus, setIsNameFocus] = useState(false);
  const [isPlaceFocus, setIsPlaceFocus] = useState(false);

  const [locationCoords, setLocationCoords] = useState(null);
  const [locationAddress, setLocationAddres] = useState(null);

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [foto, setFoto] = useState(null);

  const [newLatitude, setNNewLatidude] = useState(null);
  const [newLongitude, setNNewLongitude] = useState(null);
  const [fotoCoords, setFotoCoords] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      await Location.requestForegroundPermissionsAsync();
    })();   

    (async () => {
      let locationPermission =
        await Location.requestForegroundPermissionsAsync();
      if (locationPermission.status !== "granted") {
        Alert.alert("Permission to access location is denied");
        console.log("Permission to access location is denied");
      }
    
    })();
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const onPressCameraType = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }; 
  
  

  const fixFoto = async () => {
    // if(foto) return
    try {
      const location = await Location.getCurrentPositionAsync();
      //console.log(location);
      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });            
      const newLatitude = location.coords.latitude;
      const newLongitude = location.coords.longitude;      
      setNNewLatidude(newLatitude);
      setNNewLongitude(newLongitude);
      setFotoCoords({latidude: newLatitude, longitude: newLongitude});
      // console.log('Lat', newLatitude, 'Long', newLongitude);
      
      const cityFoto = address[0].city || address[0].subregion      
      if(cameraRef){
        const { uri } = await cameraRef.takePictureAsync();
        await MediaLibrary.createAssetAsync(uri);
        setFoto(uri);        
        setLocationAddres(`${cityFoto}, ${address[0].country}`);
      }      
    } catch (error) {
      console.log(error);
    }
  };  

  const onPressPublicate = () => {    
    if (!nameFoto || !locationAddress) {
      Alert.alert("fill up inputs!");
      return;
    }        
    console.log('fotoUri', foto);
    console.log('Назва:', nameFoto, 'Місцевість', locationAddress);
    navigation.navigate("PostsScreen");
    console.log('NLat', newLatitude, 'NLong', newLongitude);
    console.log('fotoCoords', fotoCoords);    
    setNameFoto(null);
    setLocationAddres(null);
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

  const reset = () => {
    setFoto(null);
    setNameFoto(null);
    setLocationAddres(null);
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
              {foto ? (
                <View>
                  <Image
                    style={styles.img}
                    source={{ uri: foto }}
                  />
                  <Pressable
                    style={{
                      ...styles.cameraBox,
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                    }}                    
                    onPress={reset}
                  >
                    <FontAwesome
                      name="camera"
                      size={24}
                      color="#FFFFFF"
                    />
                  </Pressable>
                </View>
              ) : (
                // <CameraAct fotoImg={photoImg}/>
                <View style={styles.containerCamera}>
                  <Camera
                    style={styles.camera}
                    type={type}
                    ref={setCameraRef}
                  >
                    <View style={styles.photoView}>
                      <Pressable
                        style={styles.flipContainer}
                        onPress={onPressCameraType}
                      >
                        <Text
                          style={{
                            fontSize: 14,
                            marginBottom: 6,
                            color: "white",
                          }}
                        >
                          {" "}
                          Flip{" "}
                        </Text>
                      </Pressable>
                      <Pressable
                        style={styles.cameraBox}
                        onPress={fixFoto}
                      >
                        <FontAwesome
                          name="camera"
                          size={24}
                          color="#BDBDBD"
                        />
                      </Pressable>
                    </View>
                  </Camera>
                </View>
              )}
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
                  value={locationAddress}                  
                  // value={place}
                  // onChangeText={setPlace}
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
              bcgColor={nameFoto && locationAddress ? "#FF6C00" : "#F6F6F6"}
              textColor={nameFoto && locationAddress ? "#fff" : "#BDBDBD"}
            />
          </View>
          <View style={styles.containerMap}>            
          </View>
          <Pressable
            style={styles.basket}
            onPress={reset}
          >
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
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,    
  },
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
    position: "absolute",
    bottom: 20,
  },
  containerMap: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  containerCamera: { flex: 1 },
  camera: { flex: 1 },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },

  flipContainer: {
    flex: 0.1,
    alignSelf: "flex-end",
  },
  cameraBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translateX: -30 }, { translateY: -30 }],
  },  
});
