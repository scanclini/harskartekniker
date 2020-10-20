import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import { scenarioStyles } from "../../Styles/StyleSheet";

export const ItemList = ({ items }) => {
  const itemList = items.map((item) => {
    return (
      <Card key={`${item.id}`} containerStyle={scenarioStyles.item}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(item.strategy);
          }}
        >
          <Text>{item.value}</Text>
        </TouchableOpacity>
      </Card>
    );
  });
  return <View style={scenarioStyles.container}>{itemList}</View>;
};
