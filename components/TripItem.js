import { Box, HStack, Image, Pressable, VStack } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TripItem = ({ trip, navigation }) => {
  return (
    <Pressable>
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
            <Text>{trip.title}</Text>
            <Image
              source={{
                uri: trip.image,
              }}
              alt="Alternate Text"
              style={{ width: 1500, height: 100 }}
            />
          </View>
        </Box>
      </VStack>
    </Pressable>
  );
};

export default TripItem;

const styles = StyleSheet.create({});
