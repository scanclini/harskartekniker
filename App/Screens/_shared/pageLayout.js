import React from "react";
import { Text, View, ScrollView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  screenStyles,
  textStyles,
  sectionStyles,
} from "../../Styles/StyleSheet";
import { ItemList } from "./itemList";

export const PageLayout = ({ navigation, icon, items, title, content }) => {
  const { screenContainer, background } = screenStyles;
  const { textContainer, listContainer } = sectionStyles;
  const { h1, h3, p } = textStyles;

  return (
    <ScrollView style={background}>
      <View style={screenContainer}>
        <View style={textContainer}>
          <MaterialCommunityIcons style={h1} name={icon} size={50} />
          <Text style={h3}>{title}</Text>
          <Text style={p}>{content}</Text>
        </View>
      </View>
      <View style={listContainer}>
        <ItemList items={items} navigation={navigation} />
      </View>
    </ScrollView>
  );
};
