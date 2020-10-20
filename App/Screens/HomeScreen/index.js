import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { Image, Card } from "react-native-elements";
import { screenStyles, cardStyles, textStyles } from "../../Styles/StyleSheet";
import { sections } from "./sections";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ItemList } from "./sections";
const ICON_SIZE = 25;

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
    <ScrollView>
      <View style={screenStyles.screenContainer}>
        <Text style={textStyles.titleText}>Power up</Text>
        <Text style={textStyles.baseText}>
          En app som hjälper dig att uppmärksamma och motverka sju vanliga
          härskartekniker
        </Text>
        <View style={cardStyles.cardsContainer}>{sectionsList}</View>
      </View>
    </ScrollView>
  );
}
