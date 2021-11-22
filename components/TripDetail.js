import React from "react";
import { observer } from "mobx-react-lite";
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
import { Box, AspectRatio, Center } from "native-base";
// import { TabView, SceneMap } from "react-native-tab-view";
// import Constants from "expo-constants";

// const image = {
//   uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM3uJyKntYkshPTlEiBX9vlpNlbAb-_XVykA&usqp=CAU",
// };

import { TextInput, Dimensions, Image } from "react-native";
import { Spinner } from "native-base";

import tripsStore from "../Store/tripsStore";

export const TripDetail = ({ navigation, route }) => {
  if (tripsStore.isLoading) return <Spinner />;
  const { trip } = route.params;
  // const handleDelete = () => {
  //   tripsStore.deleteTrip(trip._id, navigation);
  // };

  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
        opacity=".2"
      ></ImageBackground> */}
      <Center flex={1} px="7">
        <Text style={styles.baseText}> {trip.title}</Text>
        <Text style={styles.text}>{trip.description}</Text>

        <Box borderWidth="1" borderColor="#39b4bc">
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
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
  // text: {
  //   color: "white",
  //   fontSize: 42,
  //   lineHeight: 84,
  //   fontWeight: "bold",
  //   textAlign: "center",
  //   backgroundColor: "#39b4bc",
  // },

  baseText: {
    fontFamily: "Cochin",
    fontWeight: "bold",
    fontSize: 30,
    color: "#39b4bc",
  },
  text: {
    color: "#39b4bc",
    fontFamily: "Cochin",
    fontSize: 20,
  },
});

export default observer(TripDetail);

//     <Box
//       maxW="80"
//       rounded="lg"
//       overflow="hidden"
//       borderColor="coolGray.200"
//       borderWidth="1"
//       _dark={{
//         borderColor: "coolGray.600",
//         backgroundColor: "gray.700",
//       }}
//       _web={{
//         shadow: 2,
//         borderWidth: 0,
//       }}
//       _light={{
//         backgroundColor: "gray.50",
//       }}
//     >
//       <Box>
//         <AspectRatio w="100%" ratio={16 / 9}></AspectRatio>
//         <Center
//           bg="violet.500"
//           _dark={{
//             bg: "violet.400",
//           }}
//           _text={{
//             color: "warmGray.50",
//             fontWeight: "700",
//             fontSize: "xs",
//           }}
//           position="absolute"
//           bottom="0"
//           px="3"
//           py="1.5"
//         >
//           View -the name of the trip BE-
//         </Center>
//       </Box>
//       <Stack p="4" space={3}>
//         <Stack space={2}>
//           <Heading size="md" ml="-1">
//             The name of the Trip
//           </Heading>
//           <Text
//             fontSize="xs"
//             _light={{
//               color: "violet.500",
//             }}
//             _dark={{
//               color: "violet.400",
//             }}
//             fontWeight="500"
//             ml="-0.5"
//             mt="-1"
//           >
//             {trip.title}
//           </Text>
//         </Stack>
//         <Text fontWeight="400">{trip.description}</Text>
//         <HStack alignItems="center" space={4} justifyContent="space-between">
//           <HStack alignItems="center">
//             <Text
//               color="coolGray.600"
//               _dark={{
//                 color: "warmGray.200",
//               }}
//               fontWeight="400"
//             >
//               Last Month
//             </Text>
//           </HStack>
//         </HStack>
//       </Stack>
//     </Box>
