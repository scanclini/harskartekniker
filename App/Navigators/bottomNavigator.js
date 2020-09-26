import * as React from "react";
import { Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import StrategyStackNavigator from "./strategyStackNavigator";
import RootNavigator from "./rootStackNavigator";

import { InformationScreen } from "../Screens/InformationScreen";
import { ObserverScreen } from "../Screens/ObserverScreen";
import { AttackerScreen } from "../Screens/AttackerScreen";

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator activeColor="tomato" barStyle={{ backgroundColor: "white" }}>
      <Tab.Screen
        name="Home"
        component={RootNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Victim"
        component={StrategyStackNavigator}
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
