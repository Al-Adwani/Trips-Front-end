import {
  Box,
  Button,
  Pressable,
  VStack,
  Stack,
  HStack,
  AspectRatio,
  Heading,
  Image,
  Text,
  ScrollView,
} from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";
import { observer } from "mobx-react";
import { baseURL } from "../Store/instance";

const TripItem = ({ trip, navigation }) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("TripDetail", { trip: trip });
      }}
    >
      <Box
        rounded="lg"
        overflow="hidden"
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
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: baseURL + trip.image,
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading
              size="md"
              ml="-1"
              fontStyle="italic"
              _dark={{
                color: "blue.400",
              }}
            >
              {trip.title}
            </Heading>
          </Stack>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
                fontWeight="400"
              ></Text>
              <Button onPress={() => navigation.navigate("TripsDetail")}>
                Trip Details
              </Button>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Pressable>
  );
};

export default observer(TripItem);

const styles = StyleSheet.create({});

{
  /* <View>
            <Text>{trip.title}</Text>
            <Image
              source={{ uri: baseURL + trip.image }}
              style={{ width: 50, height: 50 }}
            />
          </View> */
}
{
  /* <VStack mt="4">
        <Box
          marginTop="150"
          rounded="lg"
          overflow="hidden"
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
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: baseURL + trip.image
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading
            size="md"
            ml="-1"
            fontStyle="italic"
            _dark={{
              color: "blue.400",
            }}
          >
            Welcome To .Ignore Valley
          </Heading>
        </Stack>
          
        </Box>
      </VStack> */
}
