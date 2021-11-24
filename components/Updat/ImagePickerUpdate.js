// import React, { useState, useEffect } from "react";
// import { Button, Image, View, Platform } from "react-native";
// import ImagePickerUpdate from "expo-image-picker";

// export default function ImagePickerUpdate({ updateTrip, setUpdateTrip }) {
//   //   const [image, setImage] = useState(null);

//   useEffect(() => {
//     (async () => {
//       if (Platform.OS !== "web") {
//         const { status } =
//           await ImagePickerUpdate.requestMediaLibraryPermissionsAsync();
//         if (status !== "granted") {
//           alert("Sorry, we need camera roll permissions to make this work!");
//         }
//       }
//     })();
//   }, []);

//   const pickImage = async () => {
//     let result = await ImagePickerUpdate.launchImageLibraryAsync({
//       mediaTypes: ImagePickerUpdate.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.cancelled) {
//       let localUri = result.uri;
//       let filename = localUri.split("/").pop();

//       let match = /\.(\w+)$/.exec(filename);
//       let type = match ? `image/${match[1]}` : `image`;
//       //   setImage({ image: result.uri });
//       //   setImage({ ...image, localUri: result.uri });
//       //   setImage({ ...image, filename: filename });
//       //   setImage({ ...image, type: type });

//       setUpdateTrip({
//         ...updateTrip,
//         image: { uri: localUri, name: filename, type },
//       });
//     }
//   };

//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       {/* {trip.image && (
//         <Image
//           source={{ uri: trip.image.uri }}
//           style={{ width: 200, height: 200 }}
//         />
//       )} */}
//     </View>
//   );
// }
