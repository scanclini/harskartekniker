import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import {
  screenStyles,
  textStyles,
  sectionStyles,
} from "../../Styles/StyleSheet";

import Osynliggorande from "../../../assets/milla_osynliggorande.jpg";
import Forlojligande from "../../../assets/milla_forlojligande.jpg";
import Undanhallande from "../../../assets/milla_undanhallande.jpg";
import Dubbelbestraffning from "../../../assets/milla_dubbelbestraffning.jpg";
import Skuldoskam from "../../../assets/milla_skuldoskam.jpg";
import Objektifiering from "../../../assets/milla_objektifiering.jpg";
import ThreatViolence from "../../../assets/milla_threat_force.jpg";

const getImage = (technique) => {
  if (technique === "osynliggorande") return <Image source={Osynliggorande} />;
  if (technique === "forlojligande") return <Image source={Forlojligande} />;
  if (technique === "undanhallande") return <Image source={Undanhallande} />;
  if (technique === "dubbelbestraffning")
    return <Image source={Dubbelbestraffning} />;
  if (technique === "skuldoskam") return <Image source={Skuldoskam} />;
  if (technique === "objektifiering") return <Image source={Objektifiering} />;
  if (technique === "threatViolence") return <Image source={ThreatViolence} />;

  return null;
};

export const CounterStrategyLayout = ({
  technique,
  image,
  title,
  subTitle,
  content,
}) => {
  const { screenContainer, background } = screenStyles;
  const { textContainer, listContainer } = sectionStyles;
  const { h1, h3, p } = textStyles;

  return (
    <ScrollView style={background}>
      <View style={screenContainer}>
        <Text style={h3}>{title}</Text>
        <Text style={p}>{subTitle}</Text>
        <Text>{content}</Text>
      </View>
      {getImage(technique)}
      <Text>Illustration av {technique}. Bild av Milla Lepistö.</Text>
    </ScrollView>
  );
};
