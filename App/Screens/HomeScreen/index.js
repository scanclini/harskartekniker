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

const ICON_SIZE = 25;

export function HomeScreen({ navigation }) {
  const sectionsList = sections.map((section) => {
    return (
      <Card key={`section-${section.id}`} containerStyle={cardStyles.cardStyle}>
        <TouchableOpacity
          onPress={() => navigation.navigate(section.path)}
          containerStyle={cardStyles.touchable}
        >
          <MaterialCommunityIcons
            name={section.icon}
            size={ICON_SIZE}
            style={cardStyles.iconStyle}
          />
          <Text style={cardStyles.titleStyle}>{section.title}</Text>
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
