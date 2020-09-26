import React from "react";
import { InformationScreen } from "../InformationScreen";
import { Card, Text, Button } from "react-native-elements";
import { cardStyles } from "../../Styles/StyleSheet";
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
    path: "Information",
  },
];
