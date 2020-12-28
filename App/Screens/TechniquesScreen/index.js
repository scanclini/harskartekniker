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
import translations from "../../translations";

const { background, screenContainer } = screenStyles;
const { techniquesIcon } = icons;
const { h1, h3, p } = textStyles;

export function TechniquesScreen({ navigation }) {
  return (
    <ScrollView style={background}>
      <View style={{ marginBottom: 100 }}>
        <View style={screenContainer}>
          <MaterialCommunityIcons style={h1} name={techniquesIcon} />
          <Text style={h3}>{translations.t("t_title")}</Text>
          <Text style={p}>{translations.t("t_content")}</Text>
          <View style={cardStyles.cardsContainer}>
            <TechniquesList navigation={navigation} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
