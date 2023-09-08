import { nanoid } from "@reduxjs/toolkit";
import { Image, StyleSheet, Text, View } from "react-native";

export const SingleComment = ({ commentsText, isIdEqual, commentDatum }) => {
  // console.log("isIdEqual", isIdEqual);

  return (
    <View style={!isIdEqual ? styles.commentAllBox : styles.commentAllBoxReverse } >
       {/* <View style={styles.commentAllBox} > */}
      <View style={styles.imgThumb}>
        <Image style={styles.img} />
      </View>

      <View
        key={nanoid()}
        style={styles.commentBox}
      >
        <Text style={styles.comment}>{commentsText}</Text>
        <Text style={styles.datum}>{commentDatum}</Text>
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
    marginBottom: 24,
  },
  commentAllBoxReverse: {
    display: "flex",
    flexDirection: "row-reverse",
    gap: 16,
    marginBottom: 24,
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
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
  },

  comment: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    color: "#212121",
    lineHeight: 18,
  },
  datum: {
    marginTop: 'auto',
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    color: "#BDBDBD",
    lineHeight: 11.72,
  },
});
