import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ObserverScreen } from "../Screens/ObserverScreen";
import { DemandTransparencyScreen } from "../Screens/ObserverScreen/strategies";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Observer">
      <Stack.Screen name="Observer" component={ObserverScreen} />
      <Stack.Screen
        name="DemandTransparency"
        component={DemandTransparencyScreen}
      />
    </Stack.Navigator>
  );
}
