import React from "react";
import { Card } from "react-native-elements";
import { screenStyles, cardStyles, textStyles } from "../../Styles/StyleSheet";

const techniques = [
  {
    id: 1,
    illustration: {
      uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
    },
    name: "Osynliggäörande",
  },
  {
    id: 2,
    illustration: {
      uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
    },
    name: "Förlöjligande",
  },
  {
    id: 3,
    illustration: {
      uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
    },
    name: "Undanhållande av information",
  },
  {
    id: 4,
    illustration: {
      uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
    },
    name: "Dubbelbestraffning",
  },
  {
    id: 5,
    illustration: {
      uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
    },
    name: "Påförande av skuld och skam",
  },
  {
    id: 6,
    illustration: {
      uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
    },
    name: "Objektifiering",
  },
  {
    id: 7,
    illustration: {
      uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
    },
    name: "Våld, hot om våld",
  },
];

export const techniquesList = techniques.map((technique) => {
  return (
    <Card
      key={`technique-${technique.id}`}
      containerStyle={cardStyles.cardStyle}
    >
      <Card.Image source={technique.illustration}></Card.Image>
      <Card.Title style={cardStyles.titleStyle}>{technique.name}</Card.Title>
    </Card>
  );
});
