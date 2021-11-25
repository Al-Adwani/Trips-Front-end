import React from "react";
import { VStack, Button, FormControl, Input } from "native-base";
import tripsStore from "../Store/tripsStore";
import ImagePick from "./ImagePick";

const CreateTrip = ({ navigation }) => {
  const [trip, setTrip] = React.useState({
    title: "",
    image: "",
    description: "",
  });

  const onSubmit = () => {
    tripsStore.createTrip(trip, navigation);
  };

  return (
    <VStack width="90%" mx="3">
      <FormControl>
        <FormControl.Label _text={{ bold: true }}>Trip Title</FormControl.Label>
        <Input
          margin="3"
          placeholder="Magical trip to Greece"
          onChangeText={(value) => setTrip({ ...trip, title: value })}
        />
        <FormControl.Label _text={{ bold: true }}>
          <ImagePick setTrip={setTrip} trip={trip} />
        </FormControl.Label>
        {/* <Input
        // placeholder="Import your image"
        // onChangeText={(value) => setTrip({ ...trip, image: value })}
        /> */}
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
