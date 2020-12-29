import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { screenStyles, counterStrategyStyles } from "../../Styles/StyleSheet";
import translations from "../../translations";
import { getData } from "../_shared/filters";

export const CounterStrategyLayout = ({
  id,
  technique,
  image,
  title,
  subTitle,
  content,
}) => {
  const { screenContainer, background } = screenStyles;
  const { h3, h2, p, source } = counterStrategyStyles;
  const data = getData(id.toLowerCase());

  return (
    <ScrollView style={background}>
      <View style={screenContainer}>
        <Text style={h2}>{title}</Text>
        {subTitle && <Text style={h3}>{subTitle}</Text>}
        <Text style={p}>{content}</Text>
      </View>
      <Image source={data.illustration} />
      <Text style={source}>{data.source}</Text>
    </ScrollView>
  );
};
