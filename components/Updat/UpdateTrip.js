// import React from "react";
// import { VStack, Button, FormControl, Input } from "native-base";
// import tripsStore from "../Store/tripsStore";
// import ImagePickerUpdate from "../Updat/ImagePickerUpdate";

// const UpdateTrip = ({ oldTrip }) => {
//   const [updateTrip, setUpdateTrip] = React.useState({
//     title: oldTrip.title,
//     image: oldTrip.image,
//     description: oldTrip.description,
//   });

//   const onSubmit = () => {
//     tripsStore.updateTrip(updateTrip, oldTrip._id);
//   };

//   return (
//     <VStack width="90%" mx="3">
//       <FormControl>
//         <FormControl.Label _text={{ bold: true }}>Trip Title</FormControl.Label>
//         <Input
//           placeholder="Magical trip to Greece"
//           onChangeText={(value) =>
//             setUpdateTrip({ ...updateTrip, title: value })
//           }
//         />
//         <FormControl.Label _text={{ bold: true }}>
//           <ImagePickerUpdate
//             setUpdateTrip={setUpdateTrip}
//             updateTrip={updateTrip}
//           />
//         </FormControl.Label>
//         {/* <Input
//         // placeholder="Import your image"
//         // onChangeText={(value) => setUpdateTrip({ ...updateTrip, image: value })}
//         /> */}
//         <FormControl.Label _text={{ bold: true }}>
//           Description
//         </FormControl.Label>
//         <Input
//           placeholder="Describe your trip"
//           onChangeText={(value) =>
//             setUpdateTrip({ ...updateTrip, description: value })
//           }
//         />
//       </FormControl>
//       <Button onPress={onSubmit} mt="5" colorScheme="cyan">
//         Submit
//       </Button>
//     </VStack>
//   );
// };

// export default UpdateTrip;
