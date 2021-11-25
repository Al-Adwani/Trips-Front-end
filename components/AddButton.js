import { Fab, Icon, Box, View, Text } from "native-base";
import { Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import userAuthStore from "../Store/userAuthStore";
import { FloatingAction } from "react-native-floating-action";

export const AddButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    // if (userAuthStore.user)
    navigation.navigate("CreateTrip");
  };
  // Else go to sign in/up

  const actions = [
    {
      text: "Accessibility",
      icon: require("./images/Soup-Logo.jpg"),
      name: "bt_accessibility",
      position: 2,
    },
  ];

  return (
    <View>
      <FloatingAction
        actions={actions}
        onPressItem={(name) => {
          console.log(`selected button: ${name}`);
        }}
      />
    </View>
  );
};
export default AddButton;

// <Box position="relative" h={100} w="100%">
// <Fab
//   position="absolute"
//   size="sm"
//   icon={
//     <Icon
//       color="white"
//       as={<AntDesign name="plus" />}
//       size="sm"
//       onPress={handlePress}
//     />
//   }
// />
// </Box>
