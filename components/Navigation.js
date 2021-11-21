import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "./Signup";

const Navigation = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerStyle: { backgroundColor: "pink" },
        headerTintColor: "white",
        headerTitleStyle: { fontStyle: "italic", fontWeight: "bold" },
      }}
    >
      <Screen
        name="Signup"
        component={Signup}
        options={{
          headerStyle: { backgroundColor: "pink" },
          //   headerTitle: () => <Title />,
        }}
      />
    </Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
