import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { InformationScreen } from "../Screens/InformationScreen";
import { VictimScreen } from "../Screens/VictimScreen";
import { HomeScreen } from "../Screens/HomeScreen";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Victim" component={VictimScreen} />
      <Stack.Screen name="Information" component={InformationScreen} />
    </Stack.Navigator>
  );
}
