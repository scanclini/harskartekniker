import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";

import { screenStyles, cardStyles, textStyles } from "../../Styles/StyleSheet";

const techniques = [
  {
    id: 1,
    illustration: require("../../../assets/milla_osynliggorande.jpg"),
    name: "Osynliggörande",
    masterTechnique: "MakingInvisible",
  },
  {
    id: 2,
    illustration: require("../../../assets/milla_forlojligande.jpg"),
    name: "Förlöjligande",
    masterTechnique: "Ridicule",
  },
  {
    id: 3,
    illustration: require("../../../assets/milla_undanhallande.jpg"),
    name: "Undanhållande av information",
    masterTechnique: "WithholdInformation",
  },
  {
    id: 4,
    illustration: require("../../../assets/milla_dubbelbestraffning.jpg"),
    name: "Dubbelbestraffning",
    masterTechnique: "DoubleBind",
  },
  {
    id: 5,
    illustration: require("../../../assets/milla_skuldoskam.jpg"),
    name: "Påförande av skuld och skam",
    masterTechnique: "HeapBlame",
  },
  {
    id: 6,
    illustration: require("../../../assets/milla_objektifiering.jpg"),
    name: "Objektifiering",
    masterTechnique: "Objectifying",
  },
  {
    id: 7,
    illustration: require("../../../assets/milla_threat_force.jpg"),
    name: "Våld, hot om våld",
    masterTechnique: "ThreatOfForce",
  },
];

export const TechniquesList = ({ navigation }) => {
  return techniques.map((technique) => {
    const { id, illustration, name, masterTechnique } = technique;
    return (
      <Card key={id} containerStyle={cardStyles.card}>
        <TouchableOpacity
          key={`${id}`}
          onPress={() => {
            navigation.navigate(masterTechnique);
          }}
        >
          <Card.Image style={cardStyles.image} source={illustration} />
          <Text style={cardStyles.title}>{name}</Text>
        </TouchableOpacity>
      </Card>
    );
  });
};
