import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ObserverScreen } from "./";
import {
  DemandTransparencyScreen,
  RidiculingScreen,
  DoubleRewardScreen,
  IntellectualizeScreen,
} from "./counterStrategies";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Observer">
      <Stack.Screen name="Observer" component={ObserverScreen} />
      <Stack.Screen
        name="DemandTransparency"
        component={DemandTransparencyScreen}
      />
      <Stack.Screen name="Ridiculing" component={RidiculingScreen} />
      <Stack.Screen name="DoubleReward" component={DoubleRewardScreen} />
      <Stack.Screen name="Intellectualize" component={IntellectualizeScreen} />
    </Stack.Navigator>
  );
}
