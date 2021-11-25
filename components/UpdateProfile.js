import { StyleSheet } from "react-native";
import { VStack, Button, FormControl, Input } from "native-base";
import ImagePickProfile from "./ImagePickProfile";
import profileStore from "../Store/profileStore";
import { useState } from "react";
const UpdateProfile = ({ route, navigation }) => {
  const { profiles } = route.params;
  const [updateTheProfile, setUpdateTheProfile] = useState();

  const onSubmit = () => {
    profileStore.updateProfile(updateTheProfile, navigation);
  };
  return (
    <VStack width="90%" mx="3">
      <FormControl>
        <FormControl.Label _text={{ bold: true }}>
          <ImagePickProfile
            setUpdateTheProfile={setUpdateTheProfile}
            updateTheProfile={updateTheProfile}
          />
        </FormControl.Label>

        <FormControl.Label _text={{ bold: true }}>Email</FormControl.Label>
        <Input
          placeholder={profiles.email}
          onChangeText={(value) =>
            setUpdateTheProfile({ ...updateTheProfile, email: value })
          }
        />

        <FormControl.Label _text={{ bold: true }}>Bio</FormControl.Label>
        <Input
          placeholder={profiles.bio}
          onChangeText={(value) =>
            setUpdateTheProfile({ ...updateTheProfile, bio: value })
          }
        />
      </FormControl>

      <Button onPress={onSubmit} mt="5" colorScheme="cyan">
        Submit
      </Button>
    </VStack>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({});
