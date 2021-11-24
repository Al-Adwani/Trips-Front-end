import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";
import { observer } from "mobx-react";
import userAuthStore from "../../Store/userAuthStore";

const ProfileButton = ({ navigation }) => {
  const checkUser = () => {
    if (userAuthStore.user) {
      return (
        <Button marginRight="2" onPress={() => navigation.navigate("Profile")}>
          Profile
        </Button>
      );
    } else {
      return (
        <Button marginRight="3" onPress={() => navigation.navigate("Signin")}>
          Signin/up
        </Button>
      );
    }
  };
  return <View>{checkUser()}</View>;
};

export default observer(ProfileButton);

// import { Overlay } from "react-native-elements";

// const styles = StyleSheet.create({});
//  {/* onPress={() => userAuthStore.logout()} */}
//  {userAuthStore.user ? (
//   <Button title="Open Overlay" onPress={toggleOverlay}>
//     Logout
//   </Button>
// ) : null}
// {/* <Button onPress={() => navigation.navigate("TripsList")}> */}
// <Button title="Open Overlay" onPress={toggleOverlay} />
// <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
//   <Text
//     width="300"
//     height="150"
//     fontSize="45"
//     highlight
//     _dark={{
//       color: "coolgray.800",
//     }}
//     fontFamily="heading"
//   >
//     Thank you for visiting us.
//   </Text>
// </Overlay>
//  </Button>
