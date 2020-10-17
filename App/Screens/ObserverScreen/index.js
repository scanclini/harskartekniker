import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Card, Image, Button, Icon } from "react-native-elements";
import {
  screenStyles,
  cardStyles,
  textStyles,
  scenarioStyles,
} from "../../Styles/StyleSheet";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { observations } from "./observations";

export function ObserverScreen({ navigation }) {
  const observationList = observations.map((observation) => {
    return (
      <Card
        key={`observation-${observation.id}`}
        containerStyle={scenarioStyles.scenarioItem}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(observation.strategy);
          }}
        >
          <Text>{observation.value}</Text>
        </TouchableOpacity>
      </Card>
    );
  });

  return (
    <ScrollView>
      <View style={screenStyles.screenContainer}>
        <Text style={textStyles.titleText}>
          <MaterialCommunityIcons name="eye" size={50} />
        </Text>
        <Text style={textStyles.subtitleText}>Bekräftartekniker</Text>
        <Text style={textStyles.baseText}>
          Har du sett någon bli utsatt för en härskarteknik? Välj passande
          situation från listan för att få tips på hur du kan ge personen stöd.
        </Text>
        <View style={scenarioStyles.scenarioContainer}>{observationList}</View>
      </View>
    </ScrollView>
  );
}
