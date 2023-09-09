import { Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const GoBackBtn = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.goBack()}
      style={{ marginLeft: 10 }}
    >
      <Feather
        name="arrow-left"
        size={24}
        color="#212121CC"
      />
    </Pressable>
  );
};

export default GoBackBtn;

const styles = StyleSheet.create({});
