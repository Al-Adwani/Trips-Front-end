import React from "react";
import { VStack, Button, FormControl, Input } from "native-base";
import tripsStore from "../Store/tripsStore";

const CreateTrip = () => {
  const [trip, setTrip] = React.useState({
    title: "",
    image: "",
    description: "",
  });

  const onSubmit = () => {
    tripsStore.createTrip(trip);
    console.log(trip);
  };

  return (
    <VStack width="90%" mx="3">
      <FormControl>
        <FormControl.Label _text={{ bold: true }}>Trip Title</FormControl.Label>
        <Input
          placeholder="Magical trip to Greece"
          onChangeText={(value) => setTrip({ ...trip, title: value })}
        />
        <FormControl.Label _text={{ bold: true }}>Image</FormControl.Label>
        <Input
          placeholder="Import your image"
          onChangeText={(value) => setTrip({ ...trip, image: value })}
        />
        <FormControl.Label _text={{ bold: true }}>
          Description
        </FormControl.Label>
        <Input
          placeholder="Describe your trip"
          onChangeText={(value) => setTrip({ ...trip, description: value })}
        />
      </FormControl>
      <Button onPress={onSubmit} mt="5" colorScheme="cyan">
        Submit
      </Button>
    </VStack>
  );
};

export default CreateTrip;
