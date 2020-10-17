import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import StrategyStackNavigator from "./strategyStackNavigator";
import ObserverStackNavigator from "./observerStackNavigator";

import { InformationScreen } from "../Screens/InformationScreen";
import { HomeScreen } from "../Screens/HomeScreen";
import { AttackerScreen } from "../Screens/AttackerScreen";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Victim" component={StrategyStackNavigator} />
      <Stack.Screen name="Information" component={InformationScreen} />
      <Stack.Screen name="Observer" component={ObserverStackNavigator} />
      <Stack.Screen name="Attacker" component={AttackerScreen} />
    </Stack.Navigator>
  );
}
