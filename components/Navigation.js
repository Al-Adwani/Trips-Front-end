import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "./Signup";
import Signin from "./Signin";
import Home from "./Home";
import TripsList from "./TripsList";
import Profile from "./Icons/Profile";
import CreateTrip from "./CreateTrip";
import TripDetail from "./TripDetail";
import ImagePick from "./ImagePick";

import UpdateTheTrip from "./UpdateTheTrip";

import ProfileButton from "./Icons/ProfileButton";


const Navigation = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="Signin"
      screenOptions={{
        headerStyle: { backgroundColor: "#96dce0" },
        headerTintColor: "white",
        headerTitleStyle: { fontStyle: "italic", fontWeight: "bold" },

        // backgroundColor: "transparent",
      }}
    >
      <Screen
        name="Signup"
        component={Signup}
        options={{
          headerStyle: { backgroundColor: "#39b4bc" },
        }}
      />
      <Screen
        name="Signin"
        component={Signin}
        options={{
          headerStyle: { backgroundColor: "#39b4bc" },
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={({ navigation }) => {
          return {
            headerRight: () => <ProfileButton navigation={navigation} />,
          };
        }}
      />
      <Screen
        name="TripsList"
        component={TripsList}
        options={({ navigation }) => {
          return {
            headerRight: () => <ProfileButton navigation={navigation} />,
          };
        }}
      />
      <Screen
        name="CreateTrip"
        component={CreateTrip}
        options={({ navigation }) => {
          return {
            headerRight: () => <ProfileButton navigation={navigation} />,
          };
        }}
      />
      <Screen
        name="TripDetail"
        component={TripDetail}
        options={({ navigation }) => {
          return {
            headerRight: () => <ProfileButton navigation={navigation} />,
          };
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => {
          return {
            headerRight: () => <ProfileButton navigation={navigation} />,
          };
        }}
      />
      <Screen
        name="UpdateTheTrip"
        component={UpdateTheTrip}
        options={{
          headerStyle: { backgroundColor: "#39b4bc" },
        }}
      />
    </Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
