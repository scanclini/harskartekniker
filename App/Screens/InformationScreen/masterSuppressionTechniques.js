import React from "react";
import { Card, Text, View } from "react-native-elements";
import { screenStyles, cardStyles, textStyles } from "../../Styles/StyleSheet";

const techniques = [
  {
    id: 1,
    illustration: require("../../../assets/milla_osynliggorande.jpg"),
    name: "Osynliggörande",
  },
  {
    id: 2,
    illustration: require("../../../assets/milla_forlojligande.jpg"),
    name: "Förlöjligande",
  },
  {
    id: 3,
    illustration: require("../../../assets/milla_undanhallande.jpg"),
    name: "Undanhållande av information",
  },
  {
    id: 4,
    illustration: require("../../../assets/milla_dubbelbestraffning.jpg"),
    name: "Dubbelbestraffning",
  },
  {
    id: 5,
    illustration: require("../../../assets/milla_skuldoskam.jpg"),
    name: "Påförande av skuld och skam",
  },
  {
    id: 6,
    illustration: require("../../../assets/milla_objektifiering.jpg"),
    name: "Objektifiering",
  },
  {
    id: 7,
    illustration: require("../../../assets/milla_hot.jpg"),
    name: "Våld, hot om våld",
  },
];

export const TechniquesList = () => {
  return techniques.map((technique) => {
    const { id, illustration, name } = technique;
    return (
      <Card key={id} containerStyle={cardStyles.card}>
        <Card.Image style={cardStyles.image} source={illustration} />
        <Card.Title style={cardStyles.title}>{name}</Card.Title>
      </Card>
    );
  });
};
