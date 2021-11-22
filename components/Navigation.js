import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "./Signup";
import Signin from "./Signin";
import Home from "./Home";
import TripsList from "./TripsList";
import TripDetail from "./TripDetail";
// import Test from "./Test";
// import Title from "./Icons/Title";

const Navigation = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="TripsList"
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
        options={{
          headerStyle: { backgroundColor: "#39b4bc" },
        }}
      />
      <Screen
        name="TripsList"
        component={TripsList}
        options={{
          headerStyle: { backgroundColor: "#39b4bc" },
        }}
      />
      <Screen
        name="TripDetail"
        component={TripDetail}
        // options={{
        //   headerTitle: () => (

        // <Title detailname={detailname}
        // />
        // ),
        // }}
      />

      {/* <Screen
        name="Test"
        component={Test}
        options={{
          headerStyle: { backgroundColor: "#39b4bc" },
        }}
      /> */}
    </Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
