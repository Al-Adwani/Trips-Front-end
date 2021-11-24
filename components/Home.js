import React from "react";
import { StyleSheet, View } from "react-native";
import userAuthStore from "../Store/userAuthStore";
import { observer } from "mobx-react";
import ImagePick from "./ImagePick";

import {
  Button,
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
} from "native-base";
// import { Overlay } from "react-native-elements";
import { useState } from "react";

const Home = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
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
      {/* onPress={() => userAuthStore.logout()} */}
      {/* {userAuthStore.user ? (
        <Button title="Open Overlay" onPress={toggleOverlay}>
          Logout
        </Button>
      ) : null} */}
      {/* <Button onPress={() => navigation.navigate("TripsList")}> */}
      {/* <Button title="Open Overlay" onPress={toggleOverlay} />
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text
          width="300"
          height="150"
          fontSize="45"
          highlight
          _dark={{
            color: "coolgray.800",
          }}
          fontFamily="heading"
        >
          Thank you for visiting us.
        </Text>
      </Overlay> */}
      {/* </Button> */}
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i0bd52c5a1083c9d3/version/1585157325/best-places-to-visit-in-greece.jpg",
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
        <Text fontWeight="400">
          There are plenty of things one can gain from exploring different
          places. The list includes gaining new friends, new experiences, and
          new stories. When you start exploring new places, you get a better
          understanding of the people living there, including their culture,
          history and background.
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="400"
            ></Text>
            <Button onPress={() => navigation.navigate("TripsList")}>
              View Our Trips
            </Button>

            {/* onPress={() => userAuthStore.logout()} */}
            {/* {userAuthStore.user ? (
              <Button onPress={() => userAuthStore.logout()}>Logout</Button>
            ) : null} */}
          </HStack>
        </HStack>
      </Stack>
    </Box>
  );
};

export default observer(Home);
