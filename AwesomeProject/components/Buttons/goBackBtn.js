import { Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { logout } from "../../config";

const GoBackBtn = () => {
  const navigation = useNavigation()
  const onPressGoBack = () => {
    navigation.goBack()
    logout()
  }
  return (
    <Pressable
      onPress={() => onPressGoBack}
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
