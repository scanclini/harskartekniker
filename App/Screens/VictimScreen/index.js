import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { screenStyles, textStyles } from "../../Styles/StyleSheet";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { scenarios } from "./scenarios";
import { ItemList } from "../_shared/itemList";

export function VictimScreen({ navigation }) {
  const { screenContainer } = screenStyles;
  const { titleText, subtitleText, baseText } = textStyles;
  return (
    <ScrollView>
      <View style={screenContainer}>
        <Text style={titleText}>
          <MaterialCommunityIcons name="hand-left" size={50} />
        </Text>
        <Text style={subtitleText}>Motstrategier</Text>
        <Text style={baseText}>
          Här får du tips på vad du kan göra om har blivit utsatt för en
          härskarteknik. Välj den sitation i listan som stämmer bäst in på det
          du varit med om.
        </Text>
        <Text style={baseText}>Vad hände?</Text>
      </View>
      <ItemList items={scenarios} navigation={navigation} />
    </ScrollView>
  );
}
