import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'; 


const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PostsScreen</Text>
    </View>
  )
}

export default PostsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: '#fff',
    
  },
})
