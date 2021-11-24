import { Button } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import userAuthStore from "../Store/userAuthStore";
import { observer } from "mobx-react";
import ImagePick from "./ImagePick";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Testing Component</Text>

      {userAuthStore.user ? (
        <Button onPress={() => userAuthStore.logout()}>Logout</Button>
      ) : null}
      <Button onPress={() => navigation.navigate("TripsList")}>
        See the Trips
      </Button>
    </View>
  );
};

export default observer(Home);

const styles = StyleSheet.create({});
