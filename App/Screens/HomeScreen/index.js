import React from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import {
  screenStyles,
  cardStyles,
  textStyles,
  sectionStyles,
  assetStyles,
} from "../../Styles/StyleSheet";
import { SectionsList } from "./sections";
import { MiunHeader } from "./header";

const { h1, h3, p, headerText } = textStyles;
const { background, screenContainer } = screenStyles;

function HomeScreen({ navigation }) {
  return (
    <>
      <MiunHeader />
      <ScrollView style={background}>
        <View style={screenContainer}>
          <View style={sectionStyles.textContainer}>
            <Text style={h1}>Power up</Text>
            <Text style={p}>
              En app som hjälper dig att uppmärksamma och motverka sju vanliga
              härskartekniker
            </Text>
          </View>
          <View style={cardStyles.cardsContainer}>
            <SectionsList navigation={navigation} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default HomeScreen;
