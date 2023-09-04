import { Pressable, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { FontAwesome } from "@expo/vector-icons";

const CameraAct = ({fotoImg}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
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
    try{
      const { uri } = await cameraRef.takePictureAsync();
      // setFoto(uri)
      fotoImg(uri)
      await MediaLibrary.createAssetAsync(uri);
    }catch(error){
      console.log(error)
    }
  }

  return (
    <View style={styles.containerCamera}>
      <Camera
        style={styles.camera}
        type={type}
        ref={setCameraRef}
      >
        <View style={styles.photoView}>
          <Pressable
            style={styles.flipContainer}
            onPress={() => onPressCameraType}
          >
            <Text style={{ fontSize: 14, marginBottom: 10, color: "white" }}>
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
  );
};

export default CameraAct;

const styles = StyleSheet.create({
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
