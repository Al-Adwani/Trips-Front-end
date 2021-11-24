import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Avatar,
  HStack,
  Center,
  NativeBaseProvider,
  VStack,
} from "native-base";
import userAuthStore from "../../Store/userAuthStore";
import { observer } from "mobx-react";
import { Button } from "native-base";
import tripsStore from "../../Store/tripsStore";

const Profile = () => {
  const accountName = () => {
    if (userAuthStore.user) {
      return <Text>{userAuthStore.user.name}</Text>;
    } else {
      return <Text>You are not logged in</Text>;
    }
  };
  const accountTrips = () => {
    if (userAuthStore.user) {
      {
        tripsStore.totalTrips;
      }
    } else {
      return <Text>Your Trips</Text>;
    }
  };
  const accountEmail = () => {
    if (userAuthStore.user) {
      return <Text>{userAuthStore.user.email}</Text>;
    } else {
      return <Text>You are not logged in</Text>;
    }
  };
  const accountBio = () => {
    if (userAuthStore.user) {
      return <Text>{userAuthStore.user.bio}</Text>;
    } else {
      return <Text>You are not logged in</Text>;
    }
  };
  return (
    <View>
      <HStack space={2}>
        {/* {accountEmail()} */}
        <Avatar
          marginLeft="3"
          marginTop="3"
          bg="green.500"
          source={{
            uri: "https://cms.qz.com/wp-content/uploads/2017/03/twitter_egg_blue.png?quality=75&strip=all&w=1600&h=900&crop=1",
          }}
        >
          SS
        </Avatar>
      </HStack>
      <VStack>
        <Text>username: {accountName()}</Text>
        <Text>email: {accountEmail()}</Text>
        <Text>trips: {accountTrips()}</Text>
        <Text>bio: {accountBio()}</Text>
        {userAuthStore.user ? (
          <Button
            width="150"
            height="50"
            marginLeft="3"
            onPress={() => userAuthStore.logout()}
          >
            Logout
          </Button>
        ) : null}
      </VStack>
    </View>
  );
};

export default observer(Profile);

const styles = StyleSheet.create({});
