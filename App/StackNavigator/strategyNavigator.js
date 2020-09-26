import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { TakePlaceScreen } from "../Screens/VictimScreen/strategies";
import { VictimScreen } from "../Screens/VictimScreen";

const Stack = createStackNavigator();

export default function StrategyNavigator() {
  return (
    <Stack.Navigator initialRouteName="Victim">
      <Stack.Screen name="Victim" component={VictimScreen} />
      <Stack.Screen name="TakePlace" component={TakePlaceScreen} />
    </Stack.Navigator>
  );
}
