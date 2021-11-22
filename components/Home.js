import { Button } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tripsStore from "../Store/tripsStore";
import { observer } from "mobx-react";

const Home = () => {
  return (
    <View>
      <Text>Testing Component</Text>

      {/* {tripsStore.user ? ( */}
      <Button onPress={() => tripsStore.logout()}>Logout</Button>
      {/* ) : null */}
    </View>
  );
};

export default observer(Home);

const styles = StyleSheet.create({});
