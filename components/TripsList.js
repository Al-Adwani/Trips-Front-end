import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";
import tripsStore from "../Store/tripsStore";
import TripItem from "./TripItem";
import { AddButton } from "./AddButton";

const TripsList = ({ navigation }) => {
  const tripList = tripsStore.trips.map((trip) => (
    <TripItem navigation={navigation} trip={trip} key={trip._id} />
  ));
  return (
    <View style={styles.container}>
      {tripList}
      <AddButton />
    </View>
  );
};

// REVIEW: Move the styling into its own file
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
