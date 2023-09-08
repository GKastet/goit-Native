import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SingleComment } from "../components/singlePost/singleComment";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fotoAddComments } from "../redux/Slices/fotoSlice";
import {
  updateDataInFirestoreId,
  writeDataToFirestoreComments,
} from "../components/Helpers/helpers";
import { selectCommentsData, selectUserData } from "../redux/selectors";
import { nanoid } from "@reduxjs/toolkit";

const CommentsScreen = ({ route }) => {
  //  console.log('route', route);
  const user = useSelector(selectUserData);
  // console.log("userComments", user);
  const commentsArr = useSelector(selectCommentsData);
  const [comment, setComment] = useState("");
  const fotoAllData = route.params.data;
  const foto = fotoAllData.fotoUri;
  const fotoId = fotoAllData.updateId;
  // console.log("fotoAllData", fotoAllData);
  //console.log('commentsArr', commentsArr);
  const dispatch = useDispatch();
  // console.log('fotoAllData.userUid', fotoAllData.userUid);

  const filteredComments = commentsArr?.filter(
    (comment) => comment.data.fotoId === fotoId
  );
  // console.log("filteredComments", filteredComments.length);

  const onSendCommentPress = async () => {
    //   const currentDate = new Date();
//   const day = currentDate.getDate();
//   const month = currentDate.getMonth()+1;
//   const year = currentDate.getFullYear();
//   const hours = currentDate.getHours();
// const minutes = currentDate.getMinutes();
    const date = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const commentDatum = date.toLocaleDateString("ukr-UKR", options);

    const commentsToFirebase = {
      fotoId,
      comment,
      commentDatum,
      userUid: user.userUid,
    };
    //console.log("commentsToFirebase", commentsToFirebase);
    const collectionName = "comments";
    const documentId = await writeDataToFirestoreComments(
      commentsToFirebase,
      collectionName
    );
    const commentToStore = {
      data: {
        fotoId,
        comment,
        commentDatum,
        commentId: documentId,
        userUid: user.userUid,
      },
    };
    // console.log("commentsDocumentId", documentId);
    await updateDataInFirestoreId("comments", documentId, fotoId);
    // await updateDataInFirestoreId("comments", documentId, fotoId);
    dispatch(fotoAddComments(commentToStore));
    setComment("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fotoThumb}>
        <Image
          style={styles.foto}
          source={
            foto ? { uri: `${foto}` } : require("../img/PhotoBG.png")
            //require("../img/PhotoBG.png")
          }
        />
      </View>
      <ScrollView style={styles.commentsBox}>
        {/* {filteredComments?.map(comment=> <SingleComment key={nanoid()} commentsText={comment.data.comment} />)} */}
        {filteredComments?.map((comment, index, array) => {
          //console.log('uid', comment.data.userUid);

          const previousUserComment = index > 0 ? array[index - 1] : null;          
          const isIdEqual = !previousUserComment
            ? false
            : comment.data.userUid === previousUserComment.data.userUid
            ? false
            : true;
          
          return (
            <SingleComment
              key={nanoid()}
              commentsText={comment.data.comment}
              commentDatum={comment.data.commentDatum}
              isIdEqual={isIdEqual}
            />
          );
        })}
      </ScrollView>
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Коментувати..."
          multiline={true}
          value={comment}
          onChangeText={setComment}
          // onFocus={() => isFocus("password")}
          // onBlur={() => isBlur("password")}
          style={styles.commentInput}
          // style={isPasswordFocus ? styles.inputActive : styles.input}
        />
        <Pressable
          style={styles.sendComment}
          onPress={onSendCommentPress}
        >
          <AntDesign
            name="arrowup"
            size={24}
            color="#FFFFFF"
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
    width: "100%",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    paddingBottom: 52,
  },
  fotoThumb: {
    width: 343,
    height: 240,
    marginVertical: 32,
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
  inputBox: {
    position: "relative",
    width: "100%",
  },
  // commentsBox: {
  //   display: 'flex',
  //   gap: 24,
  // },

  commentInput: {
    width: "100%",
    minHeight: 69,
    backgroundColor: "#00000008",
    borderRadius: 10,
    padding: 15,
  },

  sendComment: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
  },
});

