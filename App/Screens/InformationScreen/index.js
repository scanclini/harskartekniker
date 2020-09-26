import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Card, Image, Button, Icon } from "react-native-elements";
import { screenStyles, cardStyles, textStyles } from "../../Styles/StyleSheet";
import { techniquesList } from "./masterSuppressionTechniques";

export function InformationScreen() {
  return (
    <ScrollView>
      <View style={screenStyles.screenContainer}>
        <Text style={textStyles.titleText}>i</Text>
        <Text style={textStyles.subtitleText}>Vad är härskartekniker?</Text>
        <Text style={textStyles.baseText}>
          Härskartekniker ärolika maktprocesser som används för att utöva
          negativ makt över andra. Idag talas det ofta om sju härskartekniker:
        </Text>
        <View style={cardStyles.cardsContainer}>{techniquesList}</View>
      </View>
    </ScrollView>
  );
}
