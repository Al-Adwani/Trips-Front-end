import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";
import { observer } from "mobx-react";

const ProfileButton = ({ navigation }) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate("Profile")}>Profile</Button>
    </View>
  );
};

export default observer(ProfileButton);

const styles = StyleSheet.create({});
