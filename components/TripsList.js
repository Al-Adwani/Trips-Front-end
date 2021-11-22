import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";

const TripsList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Team</Text>
    </View>
  );
};

export default observer(TripsList);

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
