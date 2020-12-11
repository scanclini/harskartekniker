import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, Text, View } from "react-native";
import BottomNavigator from "./Navigators/bottomNavigator";
import RootStackNavigator from "./Navigators/rootStackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigator />
      {/* <RootStackNavigator /> */}
    </NavigationContainer>
  );
}
