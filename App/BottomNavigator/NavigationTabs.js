import * as React from "react";
import { Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ObserverScreen, AttackerScreen } from "./NavigationScreenss";
import StackNavigator from "../StackNavigator";

import { InformationScreen } from "../Screens/InformationScreen";
import { VictimScreen } from "../Screens/VictimScreen";
import { HomeScreen } from "../Screens/HomeScreen";

const Tab = createMaterialBottomTabNavigator();

export default function NavigationTabs() {
  return (
    <Tab.Navigator
      initialRouteName="StackNavigator"
      activeColor="tomato"
      barStyle={{ backgroundColor: "white" }}
    >
      {/* <Tab.Screen name="Root" component={StackNavigator} /> */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Victim"
        component={VictimScreen}
        options={{
          tabBarLabel: "Victim",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="hand-left" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Observer"
        component={ObserverScreen}
        options={{
          tabBarLabel: "Observer",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="eye" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Attacker"
        component={AttackerScreen}
        options={{
          tabBarLabel: "Attacker",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Information"
        component={InformationScreen}
        options={{
          tabBarLabel: "Information",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="information-variant"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
