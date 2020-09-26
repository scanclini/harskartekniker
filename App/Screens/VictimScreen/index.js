import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import {
  screenStyles,
  strategyStyles,
  textStyles,
} from "../../Styles/StyleSheet";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { strategyList } from "./strategies";

export function VictimScreen() {
  return (
    <ScrollView>
      <View style={screenStyles.screenContainer}>
        <Text style={textStyles.titleText}>
          <MaterialCommunityIcons name="hand-left" size={50} />
        </Text>
        <Text style={textStyles.subtitleText}>Motstrategier</Text>
        <Text style={textStyles.baseText}>
          Här får ru tips på vad du kan göra om har blivit utsatt för en
          härskarteknik. Välj den sitation i listan som stämmer bäst in på det
          du varit med om.
        </Text>
        <Text style={screenStyles.baseText}>Vad hände?</Text>
        <View style={strategyStyles.strategyContainer}>{strategyList}</View>
      </View>
    </ScrollView>
  );
}
