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

const ICON_COLOR = "#bbbbbb";
const ACTIVE_COLOR = "#ff6347";
const BACKGROUND_COLOR = "white";

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: BACKGROUND_COLOR }}
      tabBarOptions={{
        activeTintColor: ACTIVE_COLOR,
        inactiveTintColor: BACKGROUND_COLOR,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarVisible: false,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={homeIcon}
              color={focused ? ACTIVE_COLOR : ICON_COLOR}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Victim"
        component={VictimStackNavigator}
        options={{
          tabBarLabel: "Jag har blivit utsatt",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={victimIcon}
              color={focused ? ACTIVE_COLOR : ICON_COLOR}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Observer"
        component={ObserverStackNavigator}
        options={{
          tabBarLabel: "Jag har sett något",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={observerIcon}
              color={focused ? ACTIVE_COLOR : ICON_COLOR}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Attacker"
        component={AttackerStackNavigator}
        options={{
          tabBarLabel: "Jag har utsatt någon",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={attackerIcon}
              color={focused ? ACTIVE_COLOR : ICON_COLOR}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Techniques"
        component={TechniquesStackNavigator}
        options={{
          tabBarLabel: "Härskartekniker",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={techniquesIcon}
              color={focused ? ACTIVE_COLOR : ICON_COLOR}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
