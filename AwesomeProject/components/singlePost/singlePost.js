import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCommentsData } from "../../redux/selectors";

const SinglePost = ({ foto }) => {
  const commentsArr = useSelector(selectCommentsData)
  
  const navigation = useNavigation();

  //console.log('fotoSinglePost', foto);

  const filteredComments = commentsArr?.filter(comment => comment.data.fotoId === foto.updateId).length;
  //console.log('filteredComments', filteredComments);

  const onCommentsIconPress = () => {
    if(!foto)return;
    navigation.navigate("CommentsScreen", { data: foto });
  };

  const onLocationIconPress = () => {
    if(!foto)return;
    // navigation.navigate("MapScreen", { data: "test" });
    navigation.navigate("MapScreen", { data: foto.fotoCoords });
  };

  return (
    <View style={styles.singleElement}>
      <View style={styles.fotoThumb}>
        <Image
          style={styles.foto}
          source={
            foto ? { uri: `${foto.fotoUri}` } : require("../../img/PhotoBG.png")
          }
        />
      </View>
      <Text style={styles.fotoText}>
        {foto?.fotoName ? foto.fotoName : "fotoName"}
      </Text>
      <View style={styles.fotoNavigation}>
        <View style={styles.fotoComments}>
          <Pressable onPress={onCommentsIconPress}>
            <Feather
              name="message-circle"
              size={24}
              color={filteredComments? "#FF6C00" : "#BDBDBD"}
            />
          </Pressable>
          <Text style={styles.commentsCounter}>{filteredComments}</Text>
        </View>
        <View style={styles.fotoLocation}>
          <Pressable onPress={onLocationIconPress}>
            <Feather
              name="map-pin"
              size={24}
              color="#BDBDBD"
            />
          </Pressable>
          <Text style={styles.locationName}>
            {foto?.fotoLocationAddress ? foto.fotoLocationAddress : "address"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SinglePost;

const styles = StyleSheet.create({
  singleElement: {
    width: 343,
    marginBottom: 34,
  },
  fotoThumb: {
    width: 343,
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    overflow: "hidden",
  },
  foto: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F6F6F6",
  },
  fotoText: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#212121",
    lineHeight: 18.75,
  },
  fotoNavigation: {
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fotoComments: {
    flexDirection: "row",
    gap: 4,
  },
  commentsCounter: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
    lineHeight: 18.75,
  },
  fotoLocation: {
    flexDirection: "row",
    gap: 4,
  },
  locationName: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    lineHeight: 18.75,
    textDecorationLine: "underline",
  },
});
