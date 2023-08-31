import { StyleSheet, Text, View } from 'react-native'
import CameraAct from '../components/Camera/Camera'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text>ProfileScreen</Text> */}
      <View style={styles.imgThumb}>

      <CameraAct/>
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // width: "100%",
    backgroundColor: '#fff',
    
  },
  imgThumb: {
    position: "relative",
    width: 343,
    height: 400,
    marginTop: 32,
    marginBottom: 8,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    overflow: "hidden"
  },
})