import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "./Signup";
import Signin from "./Signin";
import Home from "./Home";
import TripsList from "./TripsList";

import CreateTrip from "./CreateTrip";

import TripDetail from "./TripDetail";


const Navigation = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator

      initialRouteName="CreateTrip"

      initialRouteName="TripDetail"

      initialRouteName="TripsList"

      screenOptions={{
        headerStyle: { backgroundColor: "pink" },
        headerTintColor: "white",
        headerTitleStyle: { fontStyle: "italic", fontWeight: "bold" },
        // backgroundColor: "transparent",
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
      <Screen
        name="Signin"
        component={Signin}
        options={{
          headerStyle: { backgroundColor: "pink" },
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: { backgroundColor: "pink" },
        }}
      />
      <Screen
        name="TripsList"
        component={TripsList}
        options={{
          headerStyle: { backgroundColor: "pink" },
        }}
      />
      <Screen

        name="CreateTrip"
        component={CreateTrip}

        name="TripDetail"
        component={TripDetail}

        options={{
          headerStyle: { backgroundColor: "pink" },
        }}
      />
    </Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
