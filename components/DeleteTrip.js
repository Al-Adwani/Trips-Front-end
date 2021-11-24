// import React from "react";
// import { VStack, Button, FormControl, Input } from "native-base";
// import tripsStore from "../Store/tripsStore";
// import ImagePick from "./ImagePick";

// const DeleteTrip = () => {
//   const [tripDelete, setTripDelete] = React.useState({
//     title: "",
//     image: "",
//     description: "",
//   });

//   const onSubmit = () => {
//     tripsStore.deleteTrip(tripDelete);
//   };

//   return (
//     <VStack width="90%" mx="3">
//       <FormControl>
//         <FormControl.Label _text={{ bold: true }}>Trip Title</FormControl.Label>
//         <Input
//           placeholder="Magical trip to Greece"
//           onChangeText={(value) =>
//             setTripDelete({ ...tripDelete, title: value })
//           }
//         />
//         <FormControl.Label _text={{ bold: true }}>
//           <ImagePick setTripDelete={setTripDelete} tripDelete={tripDelete} />
//         </FormControl.Label>
//         <Input
//           placeholder="Import your image"
//           onChangeText={(value) =>
//             setTripDelete({ ...tripDelete, image: value })
//           }
//         />
//         <FormControl.Label _text={{ bold: true }}>
//           Description
//         </FormControl.Label>
//         <Input
//           placeholder="Describe your trip"
//           onChangeText={(value) =>
//             setTripDelete({ ...tripDelete, description: value })
//           }
//         />
//       </FormControl>
//       <Button onPress={onSubmit} mt="5" colorScheme="cyan">
//         Submit
//       </Button>
//     </VStack>
//   );
// };

// export default DeleteTrip;
