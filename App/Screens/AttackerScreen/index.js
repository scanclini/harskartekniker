import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Card, Image, Button, Icon } from "react-native-elements";
import { screenStyles, cardStyles, textStyles } from "../../Styles/StyleSheet";

export function AttackerScreen() {
  return (
    <ScrollView>
      <View style={screenStyles.screenContainer}>
        <Text style={textStyles.titleText}>
          <MaterialCommunityIcons name="bell" size={50} />
        </Text>
        <Text style={textStyles.subtitleText}>Vad gör jag nu?</Text>
        <Text style={textStyles.baseText}>
          Här får du tips på vad du kan göra om har blivit utsatt för en
          härskarteknik. Välj den sitation i listan som stämmer bäst in på det
          du varit med om.
        </Text>
      </View>
    </ScrollView>
  );
}
