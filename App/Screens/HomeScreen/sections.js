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

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const ICON_SIZE = 25;

export const sections = [
  {
    id: 1,
    icon: "hand-left",
    title: "Jag har blivit utsatt",
    path: "Victim",
  },
  {
    id: 2,
    icon: "bell",
    title: "Jag har utsatt någon",
    path: "Attacker",
  },
  {
    id: 3,
    icon: "eye",
    title: "Jag har sett någon bli utsatt",
    path: "Observer",
  },
  {
    id: 4,
    icon: "information-variant",
    title: "Information om härskartekniker",
    path: "Techniques",
  },
];

export const SectionsList = ({ navigation }) =>
  sections.map((section) => {
    const { id, path, title, icon } = section;
    return (
      <Card key={id} containerStyle={cardStyles.card}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(path);
          }}
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
