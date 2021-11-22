import { Box, Image, Pressable, VStack } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";
import { baseURL } from "../Store/instance";

const TripItem = ({ trip, navigation }) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("TripDetail", { trip: trip });
      }}
    >
      <VStack mt="4">
        <Box
          rounded="lg"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _text={{
            fontSize: "md",
            fontWeight: "medium",
            color: "warmGray.50",
            letterSpacing: "lg",
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <View>
            <Text>The title:{trip.title}</Text>
            <Image
              source={{ uri: baseURL + trip.image }}
              style={{ width: 50, height: 50 }}
            />
          </View>
        </Box>
      </VStack>
    </Pressable>
  );
};

export default observer(TripItem);

const styles = StyleSheet.create({});