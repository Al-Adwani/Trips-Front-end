import React from "react";
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
  Heading,
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import tripsStore from "../Store/tripsStore";
import { useState } from "react";
import TripItem from "./TripItem";

function SearchBar({ navigation }) {
  const [query, setQuery] = useState("");

  const tripList = tripsStore.trips
    .filter((trip) => trip.title.toLowerCase().includes(query))
    .map((trip) => {
      return <TripItem trip={trip} key={trip._id} />;
    });

  return (
    <VStack
      space={5}
      width="100%"
      divider={
        <Box px="2">
          <Divider />
        </Box>
      }
    >
      <VStack width="100%" space={5} alignItems="center">
        <Input
          type="text"
          // value={title}
          // onChangeText={(query) => setQuery({ ...query, title })}
          // keyboardType="numeric"
          placeholder="Search"
          variant="filled"
          width="100%"
          bg="gray.100"
          borderRadius="10"
          py="1"
          px="2"
          placeholderTextColor="gray.500"
          _hover={{ bg: "gray.200", borderWidth: 0 }}
          borderWidth="0"
          _web={{
            _focus: { style: { boxShadow: "none" } },
          }}
          InputLeftElement={
            <Icon
              ml="2"
              size="5"
              color="gray.500"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
      </VStack>
    </VStack>
  );
}

export default SearchBar;

// import { SearchBar } from "react-native-elements";

// export default class App extends React.Component {
//   state = {
//     search: "",
//   };

//   updateSearch = (search) => {
//     this.setState({ search });
//   };

//   render() {
//     const { search } = this.state;

//     return (
//       <SearchBar
//         placeholder="Type Here..."
//         onChangeText={this.updateSearch}
//         value={search}
//       />
//     );
//   }
// }
