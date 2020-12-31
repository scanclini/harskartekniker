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

const screens = [
  { name: "MakingInvisible", screen: MakingInvisibleScreen },
  { name: "Ridicule", screen: RidiculeScreen },
  { name: "WithholdInformation", screen: WithholdInformationScreen },
  { name: "DoubleBind", screen: DoubleBindScreen },
  { name: "HeapBlame", screen: HeapBlameScreen },
  { name: "Objectifying", screen: ObjectifyingScreen },
  { name: "ThreatOfForce", screen: ThreatOfForceScreen },
];

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Observer">
      <Stack.Screen
        key={`o_initial`}
        name="Observer"
        component={ObserverScreen}
        options={{ headerShown: false }}
      />
      {screens.map((screen) => {
        return (
          <Stack.Screen
            key={`o_${screen.name}`}
            name={screen.name}
            component={screen.screen}
            options={{
              title: null,
              headerBackTitleVisible: false,
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
}
