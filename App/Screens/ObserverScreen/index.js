import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { screenStyles, textStyles } from "../../Styles/StyleSheet";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { observations } from "./observations";
import { ItemList } from "../shared/itemList";

export function ObserverScreen({ navigation }) {
  const { screenContainer } = screenStyles;
  const { titleText, subtitleText, baseText } = textStyles;
  return (
    <ScrollView>
      <View style={screenContainer}>
        <Text style={titleText}>
          <MaterialCommunityIcons name="eye" size={50} />
        </Text>
        <Text style={subtitleText}>Bekräftartekniker</Text>
        <Text style={baseText}>
          Har du sett någon bli utsatt för en härskarteknik? Välj passande
          situation från listan för att få tips på hur du kan ge personen stöd.
        </Text>
      </View>
      <ItemList items={observations} />
    </ScrollView>
  );
}
