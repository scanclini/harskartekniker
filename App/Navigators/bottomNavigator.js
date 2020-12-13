import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { icons } from "../Styles/StyleSheet";

import HomeScreen from "../Screens/HomeScreen";

import VictimStackNavigator from "../Screens/VictimScreen/victimStackNavigator";
import ObserverStackNavigator from "../Screens/ObserverScreen/observerStackNavigator";
import AttackerStackNavigator from "../Screens/AttackerScreen/attackerStackNavigator";
import TechniquesStackNavigator from "../Screens/TechniquesScreen/stackNavigator";

import RootNavigator from "./rootStackNavigator";

const {
  attackerIcon,
  victimIcon,
  homeIcon,
  observerIcon,
  techniquesIcon,
} = icons;

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
            <MaterialCommunityIcons name={homeIcon} color={color} size={26} />
          ),
        })}
      />
      <Tab.Screen
        name="Victim"
        component={VictimStackNavigator}
        options={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name={victimIcon} color={color} size={26} />
          ),
        })}
      />
      <Tab.Screen
        name="Observer"
        component={ObserverStackNavigator}
        options={{
          tabBarLabel: "Jag har sett något",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name={observerIcon}
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Attacker"
        component={AttackerStackNavigator}
        options={{
          tabBarLabel: "Attacker",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name={attackerIcon}
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Techniques"
        component={TechniquesStackNavigator}
        options={{
          tabBarLabel: "Information",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name={techniquesIcon}
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
