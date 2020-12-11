import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { VictimScreen } from "./";
import { TakePlaceScreen } from "./counterStrategies";
import { QuestionScreen } from "./counterStrategies";
import { DemandTransparencyScreen } from "./counterStrategies";
import { PrioritizeScreen } from "./counterStrategies";
import { IntellectualizeScreen } from "./counterStrategies";
import { ShiftFocusScreen } from "./counterStrategies";
import { PersonalSafetyFirstScreen } from "./counterStrategies";

const Stack = createStackNavigator();

export default function VictimStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Victim">
      <Stack.Screen name="Victim" component={VictimScreen} />
      <Stack.Screen name="TakePlace" component={TakePlaceScreen} />
      <Stack.Screen name="Question" component={QuestionScreen} />
      <Stack.Screen name="Prioritize" component={PrioritizeScreen} />
      <Stack.Screen name="Intellectualize" component={IntellectualizeScreen} />
      <Stack.Screen name="ShiftFocus" component={ShiftFocusScreen} />
      <Stack.Screen
        name="PersonalSafetyFirst"
        component={PersonalSafetyFirstScreen}
      />

      <Stack.Screen
        name="DemandTransparency"
        component={DemandTransparencyScreen}
      />
    </Stack.Navigator>
  );
}
