import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import { scenarioStyles } from "../../Styles/StyleSheet";

import { StackActions, NavigationActions } from "react-navigation";

export const ItemList = ({ items, navigation }) => {
  const itemList = items.map((item) => {
    console.log("ITMES", item.counterStrategy);
    return (
      <TouchableOpacity
        key={`${item.id}`}
        onPress={() => navigation.navigate(String(item.counterStrategy))}
      >
        <Card
          containerStyle={{
            ...scenarioStyles.item,
            borderLeftColor: item.color,
          }}
        >
          <Text>{item.value}</Text>
        </Card>
      </TouchableOpacity>
    );
  });
  return <View>{itemList}</View>;
};
