import React from "react";
import { Text, View, ScrollView } from "react-native";
import {
  screenStyles,
  cardStyles,
  textStyles,
  icons,
} from "../../Styles/StyleSheet";
import { TechniquesList } from "./masterSuppressionTechniques";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const { background, screenContainer } = screenStyles;
const { techniquesIcon } = icons;
const { h1, h3, p } = textStyles;

export function TechniquesScreen({ navigation }) {
  return (
    <ScrollView style={background}>
      <View style={screenContainer}>
        <MaterialCommunityIcons style={h1} name={techniquesIcon} />
        <Text style={h3}>Vad är härskartekniker?</Text>
        <Text style={p}>
          Härskartekniker ärolika maktprocesser som används för att utöva
          negativ makt över andra. Idag talas det ofta om sju härskartekniker:
        </Text>
        <View style={cardStyles.cardsContainer}>
          <TechniquesList navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
}
