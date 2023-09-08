import { nanoid } from "@reduxjs/toolkit";
import { Image, StyleSheet, Text, View } from "react-native";

export const SingleComment = ({ commentsText }) => {
  console.log("commentsText", commentsText);
  return (
    <View style={styles.commentAllBox}>
      <View style={styles.imgThumb}>
        <Image style={styles.img} />
      </View>
      
        <View key={nanoid()} style={styles.commentBox}>
          <Text style={styles.comment}>{commentsText}</Text>
          <Text>Data</Text>
        </View>
      
      {/* <View style = {styles.commentBox}>        
        <Text style={styles.comment}></Text>
        <Text>Data</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  commentAllBox: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    outline: "1px solid red",
  },

  imgThumb: {
    width: 28,
    height: 28,
    borderRadius: 50,
    backgroundColor: "lightgrey",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  commentBox: {
    width: 299,
    height: 100,
    backgroundColor: "#00000008",
    padding: 16,
  },

  comment: {},
});
