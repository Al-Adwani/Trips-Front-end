import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, HStack, Center, NativeBaseProvider } from "native-base";
import userAuthStore from "../../Store/userAuthStore";
import { observer } from "mobx-react";

const Profile = () => {
  const accountName = () => {
    if (userAuthStore.user) {
      return <Text>{userAuthStore.user.name}</Text>;
    } else {
      return <Text>You are not logged in</Text>;
    }
  };
  const accountEmail = () => {
    if (userAuthStore.user) {
      return <Text>{userAuthStore.user.email}</Text>;
    } else {
      return <Text>You are not logged in</Text>;
    }
  };
  return (
    <View>
      <HStack space={2}>
        {accountName()}
        {/* {accountEmail()} */}
        <Avatar
          bg="green.500"
          source={{
            uri: "https://cms.qz.com/wp-content/uploads/2017/03/twitter_egg_blue.png?quality=75&strip=all&w=1600&h=900&crop=1",
          }}
        >
          SS
        </Avatar>
      </HStack>
    </View>
  );
};

export default observer(Profile);

const styles = StyleSheet.create({});
