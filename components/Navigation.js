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
import Test from "./Test";
import UpdateTheTrip from "./UpdateTheTrip";
import ProfileButton from "./Icons/ProfileButton";
import Search from "./Search";
import UpdateProfile from "./UpdateProfile";

const Navigation = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="TripsList"
      screenOptions={{
        headerStyle: { backgroundColor: "#96dce0" },
        headerTintColor: "white",
        headerTitleStyle: { fontStyle: "italic", fontWeight: "bold" },
      }}
    >
      <Screen
        name="Search"
        component={Search}
        options={{
          headerStyle: { backgroundColor: "#39b4bc" },
        }}
      />

      <Screen
        name="Test"
        component={Test}
        options={{
          headerStyle: { backgroundColor: "#39b4bc" },
        }}
      />

      <Screen
        name="Signup"
        component={Signup}
        options={{
          title: "Signup",
          headerStyle: { backgroundColor: "#39b4bc" },
        }}
      />

      <Screen
        name="Signin"
        component={Signin}
        options={{
          title: "Signin",
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
            title: "The List",

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
            title: "the Trip Detail",
          };
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: { backgroundColor: "#39b4bc" },
        }}
      />

      <Screen
        name="UpdateTheTrip"
        component={UpdateTheTrip}
        options={{
          headerStyle: { backgroundColor: "#39b4bc" },
        }}
      />
      <Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{
          headerStyle: { backgroundColor: "#39b4bc" },
        }}
      />
    </Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
