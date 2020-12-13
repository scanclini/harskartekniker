import React from "react";
import { Text, View, ScrollView } from "react-native";
import { screenStyles, cardStyles, textStyles } from "../../Styles/StyleSheet";
import { TechniquesList } from "./masterSuppressionTechniques";

export function TechniquesScreen({ navigation }) {
  const { screenContainer } = screenStyles;
  const { h1, h3, p } = textStyles;

  return (
    <ScrollView>
      <View style={screenContainer}>
        <Text style={h1}>i</Text>
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
