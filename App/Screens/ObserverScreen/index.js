import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Card, Image, Button, Icon } from "react-native-elements";
import { screenStyles, cardStyles, textStyles } from "../../Styles/StyleSheet";

export function ObserverScreen() {
  return (
    <ScrollView>
      <View style={screenStyles.screenContainer}>
        <Text style={textStyles.titleText}>
          Uppmuntra personen att begära transparens
        </Text>
        <Text style={textStyles.subtitleText}>
          Någon har undanhållit information eller utestängt någon annan
        </Text>
      </View>
    </ScrollView>
  );
}
