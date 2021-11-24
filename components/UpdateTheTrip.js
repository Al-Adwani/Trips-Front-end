import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { VStack, Button, FormControl, Input } from "native-base";
import ImagePickUpdate from "./ImagePickUpdate";
import tripsStore from "../Store/tripsStore";
const UpdateTheTrip = ({ route, navigation }) => {
  const { trip } = route.params;

  const [updateTrip, setUpdateTrip] = React.useState(trip);

  const onSubmit = () => {
    tripsStore.updateTrip(updateTrip, navigation);
  };
  return (
    <VStack width="90%" mx="3">
      <FormControl>
        <FormControl.Label _text={{ bold: true }}>Trip Title</FormControl.Label>
        <Input
          placeholder={trip.title}
          onChangeText={(value) =>
            setUpdateTrip({ ...updateTrip, title: value })
          }
        />
        <FormControl.Label _text={{ bold: true }}>
          <ImagePickUpdate
            setUpdateTrip={setUpdateTrip}
            updateTrip={updateTrip}
          />
        </FormControl.Label>

        <FormControl.Label _text={{ bold: true }}>
          Description
        </FormControl.Label>
        <Input
          placeholder={trip.description}
          onChangeText={(value) =>
            setUpdateTrip({ ...updateTrip, description: value })
          }
        />
      </FormControl>
      <Button onPress={onSubmit} mt="5" colorScheme="cyan">
        Submit
      </Button>
    </VStack>
  );
};

export default UpdateTheTrip;

const styles = StyleSheet.create({});
