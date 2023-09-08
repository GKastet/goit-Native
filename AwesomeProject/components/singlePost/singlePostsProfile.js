import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fotoLikesCounter } from "../../redux/Slices/fotoSlice";
import { updateDataInFirestore, updateDataInFirestoreLikes } from "../Helpers/helpers";

const SinglePostProfile = ({ foto }) => {
  const navigation = useNavigation();  
  const dispatch = useDispatch()

  const fotoId = foto.id
  const fotoNoFotoidData = foto.data
  let totalLikes = fotoNoFotoidData.fotoLikes

  const onCommentsIconPress = () => {
    if (!foto) return;
    navigation.navigate("CommentsScreen");
  };

  const onBtnLikesPress = () => {
     totalLikes = totalLikes + 1;    
    const likesCounter = {
      totalLikes,
      fotoId,
    }
    const updateLikes={
      collectionName: 'foto',
      docId: foto.id,
      totalLikes,
    }    
    // console.log('updateLikes', updateLikes);
    // console.log('likesCounter', likesCounter);
    dispatch(fotoLikesCounter(likesCounter));
    updateDataInFirestoreLikes(updateLikes);
  };  

  const onLocationIconPress = () => {    
    if (!foto) return;
    // navigation.navigate("MapScreen", { data: "test" });
    navigation.navigate("MapScreen", { data: foto.fotoCoords });
  };

  return (
    <View style={styles.singleElement}>
      <View style={styles.fotoThumb}>
        <Image
          style={styles.foto}
          source={
            foto ? { uri: `${fotoNoFotoidData.fotoUri}` } : require("../../img/PhotoBG.png")
          }
        />
      </View>
      <Text style={styles.fotoText}>
        {fotoNoFotoidData?.fotoName ? fotoNoFotoidData.fotoName : "fotoName"}
      </Text>
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
          <Pressable
            onPress={onBtnLikesPress}
            style={{marginLeft: 24}}            
          >
            <Feather
              name="thumbs-up"
              size={24}
              color={fotoNoFotoidData?.fotoLikes? "#FF6C00": "#BDBDBD"}
            />
          </Pressable>
          <Text style={styles.commentsCounter}>{fotoNoFotoidData.fotoLikes}</Text>
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
            {fotoNoFotoidData?.fotoCountry ? fotoNoFotoidData.fotoCountry : "address"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SinglePostProfile;

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
