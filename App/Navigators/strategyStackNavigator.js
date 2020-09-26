import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { VictimScreen } from "../Screens/VictimScreen";
import { TakePlaceScreen } from "../Screens/VictimScreen/strategies";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Victim">
      <Stack.Screen name="Victim" component={VictimScreen} />
      <Stack.Screen name="TakePlace" component={TakePlaceScreen} />
    </Stack.Navigator>
  );
}
