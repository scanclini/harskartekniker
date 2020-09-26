import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-elements";
import {
  screenStyles,
  scenarioStyles,
  textStyles,
} from "../../Styles/StyleSheet";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { scenarios } from "./scenarios";

export function VictimScreen({ navigation }) {
  const scenarioList = scenarios.map((scenario) => {
    return (
      <Card
        key={`scenario-${scenario.id}`}
        containerStyle={scenarioStyles.scenarioItem}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate(scenario.strategy)}
        >
          <Text>{scenario.value}</Text>
        </TouchableOpacity>
      </Card>
    );
  });

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
        <View style={scenarioStyles.scenarioContainer}>{scenarioList}</View>
      </View>
    </ScrollView>
  );
}
