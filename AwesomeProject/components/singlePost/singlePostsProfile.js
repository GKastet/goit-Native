import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fotoLikesCounter } from "../../redux/Slices/fotoSlice";
import { updateDataInFirestore, updateDataInFirestoreLikes } from "../Helpers/helpers";
import { selectCommentsData } from "../../redux/selectors";

const SinglePostProfile = ({ foto }) => {
  const commentsArr = useSelector(selectCommentsData)

  const navigation = useNavigation();  
  const dispatch = useDispatch()

  
  const fotoId = foto.id
  const fotoNoFotoidData = foto.data
  //console.log('fotoProfile', foto);
  // console.log('commentsArrProfile', commentsArr);
  const filteredComments = commentsArr?.filter(comment => comment.data.fotoId === fotoNoFotoidData.updateId).length;
  // console.log('filteredComments', filteredComments);
  let totalLikes = fotoNoFotoidData.fotoLikes

  const onCommentsIconPress = () => {
    if (!foto) return;
    navigation.navigate("CommentsScreen", { data: fotoNoFotoidData });
  };

  const onBtnLikesPress = () => {
     totalLikes = totalLikes + 1;
     console.log('LikedFotoUpdateID', fotoNoFotoidData.updateId);    
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
              color={filteredComments? "#FF6C00" : "#BDBDBD"}
              // color="#BDBDBD"
            />
          </Pressable>          
          <Text style={styles.commentsCounter}>{filteredComments}</Text>
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

// fotoProfile {"data": {"fotoCommentsNumber": 0, "fotoCoords": {"latidude": 37.4217937, "longitude": -122.083922}, "fotoCountry": "United States", "fotoLikes": 2, "fotoLocationAddress": "Mountain View, United States", "fotoName": "222", "fotoUri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FAwesomeProject-8d38cc16-803f-4136-9141-a2fd32ada805/Camera/72a87f94-0538-4b77-8841-e2245b12b8a8.jpg", "updateId": "sYeIeJrB3QtMK8YITJkC", "userUid": "AD67s6EfA3fFGvYTxnzAKHWSFbA3"}, "id": "sYeIeJrB3QtMK8YITJkC"}       
// commentsArrProfile [{"data": {"comment": "to store 3", "fotoId": "RCZZQ0loBn34Qd6OuZWA", "updateId": "2Ncz1VETq6OMZRY5Q533"}, "id": "2Ncz1VETq6OMZRY5Q533"}, {"data": {"comment": "hello", "fotoId": "RCZZQ0loBn34Qd6OuZWA", "updateId": "D26jSMYzmOBhiTPF0sZ3"}, "id": "D26jSMYzmOBhiTPF0sZ3"}, {"data": {"comment": "to store 3", "fotoId": "RCZZQ0loBn34Qd6OuZWA", "updateId": "F52QQ3d1jiE7Bj2KR19n"}, "id": "F52QQ3d1jiE7Bj2KR19n"}, {"data": {"comment": "to store 2", "fotoId": "RCZZQ0loBn34Qd6OuZWA", "updateId": "P2wsNDSxMbYV584jUwai"}, "id": "P2wsNDSxMbYV584jUwai"}, {"data": {"comment": "to store 1", "fotoId": "RCZZQ0loBn34Qd6OuZWA", "updateId": "SaUcuKokwbCZrW1iUDKG"}, "id": "SaUcuKokwbCZrW1iUDKG"}, {"data": {"comment": "heloo123", "fotoId": "RCZZQ0loBn34Qd6OuZWA", "updateId": "VYHMmqIjCWWoYpw2Y9d9"}, "id": "VYHMmqIjCWWoYpw2Y9d9"}, {"data": {"comment": "qas", "fotoId": "RCZZQ0loBn34Qd6OuZWA", "updateId": 
// "ZB6Qab44SNTIF9piv1wV"}, "id": "ZB6Qab44SNTIF9piv1wV"}, {"data": {"comment": "to store 1", "fotoId": "RCZZQ0loBn34Qd6OuZWA", "updateId": "smZ3qXk19m18cNGLRQ3R"}, "id": "smZ3qXk19m18cNGLRQ3R"}, {"data": {"comment": "hello1 hello2 hello3 hello4 hello5 hello5 hello6 hello7 hello8 hello9 hello10 ", "fotoId": "RCZZQ0loBn34Qd6OuZWA", "updateId": "suwOwQzKdnHqgrKtGoFH"}, "id": "suwOwQzKdnHqgrKtGoFH"}, {"data": {"comment": "asde", "fotoId": "mX8lQLoS9TM5AO6GoNEt", "updateId": "t2WzSn8DtvtwKTOlheC5"}, "id": "t2WzSn8DtvtwKTOlheC5"}, {"data": {"comment": "asd", "fotoId": "mX8lQLoS9TM5AO6GoNEt", "updateId": "vFxNofd46mVTVFsDQ2yr"}, "id": "vFxNofd46mVTVFsDQ2yr"}]
// comments//fotoAllData {"fotoCommentsNumber": 0, "fotoCoords": {"latidude": 37.4217937, "longitude": -122.083922}, "fotoCountry": "United States", "fotoLikes": 2, "fotoLocationAddress": "Mountain View, United States", "fotoName": "2", "fotoUri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FAwesomeProject-8d38cc16-803f-4136-9141-a2fd32ada805/Camera/abab5f24-b9bb-4576-a29f-9fd9c2b7ca4a.jpg", "updateId": "RCZZQ0loBn34Qd6OuZWA", "userUid": "AD67s6EfA3fFGvYTxnzAKHWSFbA3"}
// LikedFoto {"data": {"fotoCommentsNumber": 0, "fotoCoords": {"latidude": 37.4217937, "longitude": -122.083922}, "fotoCountry": "United States", "fotoLikes": 2, "fotoLocationAddress": "Mountain View, United States", "fotoName": "2", "fotoUri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FAwesomeProject-8d38cc16-803f-4136-9141-a2fd32ada805/Camera/abab5f24-b9bb-4576-a29f-9fd9c2b7ca4a.jpg", "updateId": "RCZZQ0loBn34Qd6OuZWA", "userUid": "AD67s6EfA3fFGvYTxnzAKHWSFbA3"}, "id": "RCZZQ0loBn34Qd6OuZWA"}