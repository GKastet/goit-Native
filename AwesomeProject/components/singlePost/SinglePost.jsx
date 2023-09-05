import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectFotoData, selectFotoId } from "../../redux/selectors";

const SinglePost = ({fotoId}) => {
    const fotoArr = useSelector(selectFotoData)

  console.log('income fotoId');

   const findFotoData = fotoArr?.find(foto => foto.id === fotoId)
   console.log('finded', findFotoData);
  // const {fotoLocationAddress, fotoName, fotoUri} = findFotoData;

  

  // const fotoId = useSelector(selectFotoId)
  // console.log('id', fotoId);
  const navigation = useNavigation();

  const onCommentsIconPress = () => {
    navigation.navigate("CommentsScreen");
  };

  const onLocationIconPress = () => {
    navigation.navigate("MapScreen", {data: 'test'});

  };

  return (
    <View
    style={styles.singleElement}
    //  id={fotoId}
     >
      <View style={styles.fotoThumb}>
        <Image
         style={styles.foto}
         source={findFotoData? {uri: `${findFotoData.fotoUri}`} : require('../../img/PhotoBG.png')}
         
         />
      </View>
      <Text style={styles.fotoText}>{findFotoData?.fotoName ? findFotoData.fotoName : 'fotoName'}</Text>
      <View style={styles.fotoNavigation}>
        <View style={styles.fotoComments}>
          <Pressable onPress={onCommentsIconPress}>
            <Feather
              name="message-circle"
              size={24}
              color="#BDBDBD"
            />
          </Pressable>
          <Text style={styles.commentsCounter}>0</Text>
        </View>
        <View style={styles.fotoLocation}>
          <Pressable onPress={onLocationIconPress}>
            <Feather
              name="map-pin"
              size={24}
              color="#BDBDBD"
            />
          </Pressable>
          <Text style={styles.locationName}>{findFotoData?.fotoLocationAddress ? findFotoData.fotoLocationAddress : 'address'}</Text>
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
