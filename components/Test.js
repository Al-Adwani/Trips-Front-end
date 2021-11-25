import React from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  HStack,
  Center,
  Pressable,
} from "native-base";
import { observer } from "mobx-react";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import userAuthStore from "../Store/userAuthStore";
import { useState } from "react";

const Test = ({ navigation }) => {
  const [selected, setSelected] = React.useState(1);
  const [query, setQuery] = useState("");

  return (
    <Box flex={1} safeAreaTop width="350">
      <Center flex={1}></Center>
      <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 0 ? "home" : "home-outline"}
                />
              }
              color="white"
              size="sm"
            />
            <Text color="white" fontSize="12">
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => {
            navigation.navigate("Search");
          }}
        >
          <Center>
            <Icon
              mb="1"
              as={<MaterialIcons name="search" />}
              color="white"
              size="sm"
            />
            <Text color="white" fontSize="12">
              Search
            </Text>
            {/* <Input
              placeholder="Search .."
              onChangeText={(value) => setQuery({ ...query, title: value })}
            /> */}
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 2 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => {
            navigation.navigate("TripsList");
          }}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 2 ? "cart" : "cart-outline"}
                />
              }
              color="white"
              size="sm"
            />
            <Text color="white" font="12">
              Trips
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 3 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 3 ? "account" : "account-outline"}
                />
              }
              color="white"
              size="sm"
            />
            <Text color="white" fontSize="12">
              Profile
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
};
export default observer(Test);
