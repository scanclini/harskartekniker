import React from "react";
import { Text, View, ScrollView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { screenStyles, textStyles } from "../../Styles/StyleSheet";
import { ItemList } from "../_shared/itemList";
import { harrassments } from "./harrassments";

export function AttackerScreen({ navigation }) {
  const { screenContainer } = screenStyles;
  const { titleText, subtitleText, baseText } = textStyles;
  return (
    <ScrollView>
      <View style={screenContainer}>
        <Text style={titleText}>
          <MaterialCommunityIcons name="bell" size={50} />
        </Text>
        <Text style={subtitleText}>Vad gör jag nu?</Text>
        <Text style={baseText}>
          Här får du tips på vad du kan göra om har blivit utsatt för en
          härskarteknik. Välj den sitation i listan som stämmer bäst in på det
          du varit med om.
        </Text>
      </View>
      <ItemList items={harrassments} navigation={navigation} />
    </ScrollView>
  );
}
