import React from "react";
import { Text, View, ScrollView } from "react-native";
import { screenStyles, cardStyles, textStyles } from "../../Styles/StyleSheet";
import { TechniquesList } from "./masterSuppressionTechniques";

export function TechniquesScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={screenStyles.screenContainer}>
        <Text style={textStyles.titleText}>i</Text>
        <Text style={textStyles.subtitleText}>Vad är härskartekniker?</Text>
        <Text style={textStyles.baseText}>
          Härskartekniker ärolika maktprocesser som används för att utöva
          negativ makt över andra. Idag talas det ofta om sju härskartekniker:
        </Text>
        {/* <View style={{ ...cardStyles.techiques }}>
          <View style={cardStyles.cardsContainer}>
            <TechniquesList navigation={navigation} />
          </View>
        </View> */}
        <View style={cardStyles.cardsContainer}>
          <TechniquesList navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
}
