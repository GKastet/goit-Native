import { StyleSheet, Text, View } from 'react-native'

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CreatePostsScreen</Text>
    </View>
  )
}

export default CreatePostsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    // justifyContent: "flex-end",
  },
})