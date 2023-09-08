import { Pressable } from "react-native";
import { logout } from "../../config";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export const LogOutBtn = ({ style }) => {
  const navigation = useNavigation();
  const onLogOutPress = () => {
    logout();
    navigation.navigate("Login");
  };

  return (
    <Pressable
      onPress={onLogOutPress}
      style={style}
    >
      <Feather
        name="log-out"
        size={24}
        color="#BDBDBD"
      />
    </Pressable>
  );
};
