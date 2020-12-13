import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-elements";
import {
  screenStyles,
  cardStyles,
  textStyles,
  sectionStyles,
  assetStyles,
} from "../../Styles/StyleSheet";
import { sections } from "./sections";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ItemList } from "./sections";
const ICON_SIZE = 25;
import MiunLogo from "../../../assets/miun_logo.png";

const MiunHeader = () => (
  <Card containerStyle={cardStyles.header}>
    <Image style={assetStyles.logo} source={MiunLogo} />
    <Text style={textStyles.headerText}>
      Appen är utvecklad av Forum för genusvetenskap i samarbete med Forum för
      digitalisering och institutionen för design.
    </Text>
  </Card>
);

export function HomeScreen({ navigation }) {
  const sectionsList = sections.map((section) => {
    const { id, path, title, icon } = section;
    return (
      <Card key={id} containerStyle={cardStyles.card}>
        <TouchableOpacity
          onPress={() => navigation.navigate(path)}
          containerStyle={cardStyles.touchable}
        >
          <MaterialCommunityIcons
            name={icon}
            size={ICON_SIZE}
            style={cardStyles.icon}
          />
          <Text style={cardStyles.title}>{title}</Text>
        </TouchableOpacity>
      </Card>
    );
  });

  return (
    <ScrollView style={screenStyles.background}>
      <MiunHeader />
      <View style={screenStyles.firstScreenContainer}>
        <View style={sectionStyles.textContainer}>
          <Text style={textStyles.titleText}>Power up</Text>
          <Text style={textStyles.baseText}>
            En app som hjälper dig att uppmärksamma och motverka sju vanliga
            härskartekniker
          </Text>
        </View>
        <View style={cardStyles.cardsContainer}>{sectionsList}</View>
      </View>
    </ScrollView>
  );
}
