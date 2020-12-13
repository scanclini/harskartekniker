import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AttackerScreen } from "./";
import {
  OsynliggorandeScreen,
  ForlojligandeScreen,
  UndanhallandeScreen,
  DubbelBestraffningScreen,
  SkuldSkamScreen,
  ThreatViolenceScreen,
} from "./counterStrategies";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Attacker">
      <Stack.Screen name="Attacker" component={AttackerScreen} />
      <Stack.Screen name="Osynliggorande" component={OsynliggorandeScreen} />
      <Stack.Screen name="Forlojligande" component={ForlojligandeScreen} />
      <Stack.Screen name="Undanhallande" component={UndanhallandeScreen} />
      <Stack.Screen
        name="DubbelBestraffning"
        component={DubbelBestraffningScreen}
      />
      <Stack.Screen name="SkuldSkam" component={SkuldSkamScreen} />
      <Stack.Screen name="ThreatViolence" component={ThreatViolenceScreen} />
    </Stack.Navigator>
  );
}
