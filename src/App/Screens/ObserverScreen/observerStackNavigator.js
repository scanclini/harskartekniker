import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ObserverScreen } from "./";
import {
  MakingInvisibleScreen,
  RidiculeScreen,
  WithholdInformationScreen,
  DoubleBindScreen,
  HeapBlameScreen,
  ObjectifyingScreen,
  ThreatOfForceScreen,
} from "./counterStrategies";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Observer">
      <Stack.Screen name="Observer" component={ObserverScreen} />
      <Stack.Screen name="MakingInvisible" component={MakingInvisibleScreen} />
      <Stack.Screen
        name="WithholdInformation"
        component={WithholdInformationScreen}
      />
      <Stack.Screen name="Ridicule" component={RidiculeScreen} />
      <Stack.Screen name="DoubleBind" component={DoubleBindScreen} />
      <Stack.Screen name="HeapBlame" component={HeapBlameScreen} />
    </Stack.Navigator>
  );
}
