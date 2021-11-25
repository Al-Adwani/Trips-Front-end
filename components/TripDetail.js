import React from "react";
import { observer } from "mobx-react";
import {
  Pressable,
  Animated,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Box, AspectRatio, Center, Badge, IconButton } from "native-base";
import { Button } from "native-base";

import { TextInput, Dimensions, Image } from "react-native";
import { Spinner } from "native-base";
import { baseURL } from "../Store/instance";

import tripsStore from "../Store/tripsStore";
import userAuthStore from "../Store/userAuthStore";
import Test from "./Test";
export const TripDetail = ({ navigation, route }) => {
  if (tripsStore.isLoading) return <Spinner />;
  const { trip } = route.params;

  const handleDelete = () => {
    tripsStore.deleteTrip(trip._id, navigation);
  };

  const verifyUser = () => {
    if (userAuthStore.user) {
      return userAuthStore.user._id.toString();
    } else {
      return "Guest";
    }
  };
  console.log(verifyUser());
  console.log(baseURL + trip.image);

  return (
    <View style={styles.container}>
      <Center flex={1} px="7">
        <Text style={styles.baseText}> {trip.title}</Text>
        <Box borderWidth="1" borderColor="#39b4bc">
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{ uri: baseURL + trip.image }}
              style={{ width: 60, height: 60 }}
            />
          </AspectRatio>
        </Box>

        <Box
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
        >
          <Text style={styles.text}>{trip.description}</Text>
        </Box>

        {verifyUser() === trip.owner.toString() ? (
          <Button margin="3" marginLeft="-76%" onPress={handleDelete}>
            Delete
          </Button>
        ) : null}
        {verifyUser() === trip.owner.toString() ? (
          <Button
            marginLeft="-70%"
            onPress={() => {
              navigation.navigate("UpdateTheTrip", { trip: trip });
            }}
          >
            Update Trip
          </Button>
        ) : null}
      </Center>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 100,
  },

  baseText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "crimson",
  },
  text: {
    color: "black",
    fontWeight: "bold",

    margin: 10,
    fontSize: 15,
  },
});

export default observer(TripDetail);
