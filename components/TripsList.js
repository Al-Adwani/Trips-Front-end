import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";
import tripsStore from "../Store/tripsStore";
import TripItem from "./TripItem";
import { AddButton } from "./AddButton";
import Test from "./Test";

import { ScrollView } from "react-native-gesture-handler";
import { Box } from "native-base";

import { useState } from "react";
import userAuthStore from "../Store/userAuthStore";

const TripsList = ({ navigation }) => {
  const tripList = tripsStore.trips.map((trip) => (
    <TripItem navigation={navigation} trip={trip} key={trip._id} />
  ));
  const createBtn = () => {
    if (userAuthStore.user) {
      return <AddButton navigation={navigation} />;
    }
  };
  // const [query, setQuery] = useState("");

  // const tripList = tripsStore.trips
  //   .filter((trip) => trip.title.toLowerCase().includes(query))
  //   .map((trip) => {
  //     return <TripItem trip={trip} key={trip._id} />;
  //   });
  return (
    <View>
      <ScrollView
        _contentContainerStyle={{
          px: "20px",
          mb: "4",
          minW: "72",
        }}
      >
        <View style={styles.container}>
          {tripList}

          {/* <Test navigation={navigation} /> */}
        </View>
      </ScrollView>
      {createBtn()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default observer(TripsList);
