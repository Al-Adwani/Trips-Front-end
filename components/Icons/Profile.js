import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import {
  Avatar,
  HStack,
  Center,
  NativeBaseProvider,
  VStack,
  AspectRatio,
  Flex,
} from "native-base";
// import userAuthStore from "../../Store/userAuthStore";
import { observer } from "mobx-react";
import { Button, Box } from "native-base";
// import tripsStore from "../../Store/tripsStore";
// import { useState } from "react";
import { baseURL } from "../../Store/instance";

import { Spinner } from "native-base";
import profileStore from "../../Store/profileStore";

const Profile = ({ navigation, route }) => {
  if (profileStore.isLoading) return <Spinner />;

  const { profile } = route.params;
  const verifyUser = () => {
    if (profileStore.user) {
      return profileStore.user._id.toString();
    } else {
      return "Guest";
    }
  };
  console.log(verifyUser());
  // console.log(baseURL + profile.image);

  // const onSubmit = () => {
  //   profileStore.updateProfile(profile, navigation);
  // };

  // if (profileStore.isLoading) return <Spinner />;
  // بدل قيت توال اللي بالستور ممكن اسوي
  // let total = 0;
  // tripsStore.trips.forEach((trip) => (total = total + trip.nummberOfTrips));
  // render it down

  // const accountName = () => {
  //   if (userAuthStore.user) {
  //     return <Text>{userAuthStore.user.name}</Text>;
  //   } else {
  //     return <Text>You are not logged in</Text>;
  //   }
  // };
  // const accountTrips = () => {
  //   if (userAuthStore.user) {
  //     {
  //       tripsStore.totalTrips;
  //     }
  //   } else {
  //     return <Text>Your Trips</Text>;
  //   }
  // };
  // const accountEmail = () => {
  //   if (userAuthStore.user) {
  //     return <Text>{userAuthStore.user.email}</Text>;
  //   } else {
  //     return <Text>You are not logged in</Text>;
  //   }
  // };
  // const accountBio = () => {
  //   if (userAuthStore.user) {
  //     return <Text>{userAuthStore.user.bio}</Text>;
  //   } else {
  //     return <Text>You are not logged in</Text>;
  //   }};
  return (
    <Box marginTop="3" marginLeft="1" width="200" height="500" bg="primary.500">
      <VStack space={10}>
        <HStack space={2}>
          {/* {accountEmail()} */}
          {/* <Box
          bg="primary.500"
          w="150"
          marginLeft="3"
          shadow={1}
          marginTop="10"
          borderWidth="1"
          borderColor="#39b4bc"
        > */}
          {/* <AspectRatio w="70%" ratio={16 / 9}> */}
          <Flex direction="row" w={20}>
            <Center size="20">
              <Avatar
                marginLeft="-5"
                marginTop="30"
                bg="green.500"
                source={{
                  uri: "https://cms.qz.com/wp-content/uploads/2017/03/twitter_egg_blue.png?quality=75&strip=all&w=1600&h=900&crop=1",
                }}
              >
                SS
              </Avatar>
            </Center>
          </Flex>
          {/* </AspectRatio> */}
          {/* </Box> */}
        </HStack>
      </VStack>

      <VStack space={5}>
        <Text style={styles.baseText}>Email: {profile.email}</Text>
        {/* <Text>trips: {accountTrips()}</Text> */}
        <Text style={styles.baseText}>Bio: {profile.bio}</Text>
        <Image
          source={{ uri: baseURL + profile.image }}
          style={{ width: 50, height: 50 }}
        />
        {verifyUser() === profile.owner.toString() ? (
          <Button
            onPress={() => {
              navigation.navigate("UpdateProfile", { profile: profile });
            }}
          >
            Edit
          </Button>
        ) : null}

        {/* <TouchableOpacity> */}
        {/* onPress={() => }> */}
        {/* 
          <Button
            width="150"
            height="50"
            marginLeft="3"
            onPress={() => {
              navigation.navigate("UpdateProfile");
            }}
          >
            Edit ..
          </Button> */}
        {/* </TouchableOpacity> */}

        {/* <Text>Total Trips: {total} </Text> */}
      </VStack>
    </Box>
  );
};

export default observer(Profile);

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
    fontSize: 30,
  },
});
