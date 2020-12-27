import React from "react";
import translations from "../../translations";
import { Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import { cardStyles } from "../../Styles/StyleSheet";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const ICON_SIZE = 25;

export const sections = [
  {
    id: 1,
    icon: "hand-left",
    title: translations.t("victimTitle"),
    path: "Victim",
  },
  {
    id: 2,
    icon: "bell",
    title: translations.t("attackerTitle"),
    path: "Attacker",
  },
  {
    id: 3,
    icon: "eye",
    title: translations.t("observerTitle"),
    path: "Observer",
  },
  {
    id: 4,
    icon: "information-variant",
    title: translations.t("informationTitle"),
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
