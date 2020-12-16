import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { VictimScreen } from "./";
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

export default function VictimStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Victim">
      <Stack.Screen name="Victim" component={VictimScreen} />
      <Stack.Screen name="MakingInvisible" component={MakingInvisibleScreen} />
      <Stack.Screen name="Ridicule" component={RidiculeScreen} />
      <Stack.Screen
        name="WithholdInformation"
        component={WithholdInformationScreen}
      />
      <Stack.Screen name="DoubleBind" component={DoubleBindScreen} />
      <Stack.Screen name="HeapBlame" component={HeapBlameScreen} />
      <Stack.Screen name="Objectifying" component={ObjectifyingScreen} />
      <Stack.Screen name="ThreatOfForce" component={ThreatOfForceScreen} />
    </Stack.Navigator>
  );
}
