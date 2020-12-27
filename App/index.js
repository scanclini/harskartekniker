import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigator from "./Navigators/bottomNavigator";
import * as Localization from "expo-localization";
import i18n from "i18n-js";

export default function App() {
  // Set the locale once at the beginning of your app.
  // TODO: Fix so it works
  React.useEffect(() => {
    // Update the document title using the browser API
    i18n.locale = Localization.locale;
    i18n.fallbacks = true;
  });

  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
}
