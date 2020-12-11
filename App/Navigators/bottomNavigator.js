import * as React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import VictimStackNavigator from "../Screens/VictimScreen/victimStackNavigator";
import ObserverStackNavigator from "../Screens/ObserverScreen/observerStackNavigator";
import RootNavigator from "./rootStackNavigator";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { InformationScreen } from "../Screens/InformationScreen";
import { ObserverScreen } from "../Screens/ObserverScreen";
import { AttackerScreen } from "../Screens/AttackerScreen";
import { HomeScreen } from "../Screens/HomeScreen";

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: "white" }}
      tabBarOptions={{ activeTintColor: "#ff6347" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({ route }) => ({
          tabBarVisible: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        })}
      />
      <Tab.Screen
        name="Victim"
        component={VictimStackNavigator}
        options={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="hand-left" color={color} size={26} />
          ),
        })}
      />
      <Tab.Screen
        name="Observer"
        component={ObserverStackNavigator}
        options={{
          tabBarLabel: "Jag har sett något",
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
