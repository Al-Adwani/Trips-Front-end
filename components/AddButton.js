import { Fab, Icon, Box } from "native-base";
import { Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import userAuthStore from "../Store/userAuthStore";

export const AddButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    // if (userAuthStore.user)
    navigation.navigate("CreateTrip");
  };
  // Else go to sign in/up

  return (
    // <Pressable onPress={handlePress}>
    <Box position="relative" h={100} w="100%">
      <Fab
        position="absolute"
        size="sm"
        icon={
          <Icon
            color="white"
            as={<AntDesign name="plus" />}
            size="sm"
            onPress={handlePress}
          />
        }
      />
    </Box>
    // </Pressable>
  );
};
export default AddButton;
