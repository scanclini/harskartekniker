import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { screenStyles, counterStrategyStyles } from "../../Styles/StyleSheet";

import MakingInvisible from "../../../assets/milla_osynliggorande.jpg";
import Ridicule from "../../../assets/milla_forlojligande.jpg";
import WithholdInformation from "../../../assets/milla_undanhallande.jpg";
import DoubleBind from "../../../assets/milla_dubbelbestraffning.jpg";
import HeapBlame from "../../../assets/milla_skuldoskam.jpg";
import Objectifying from "../../../assets/milla_objektifiering.jpg";
import ThreatOfForce from "../../../assets/milla_threat_force.jpg";

const getImage = (id) => {
  switch (id) {
    case "makingInvisible":
      return <Image source={MakingInvisible} />;
    case "ridicule":
      return <Image source={Ridicule} />;
    case "withholdInformation":
      return <Image source={WithholdInformation} />;
    case "doubleBind":
      return <Image source={DoubleBind} />;
    case "heapBlame":
      return <Image source={HeapBlame} />;
    case "objectifying":
      return <Image source={Objectifying} />;
    case "threatOfForce":
      return <Image source={ThreatOfForce} />;
    default:
      return null;
  }
};

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
  return (
    <ScrollView style={background}>
      <View style={screenContainer}>
        <Text style={h2}>{title}</Text>
        {subTitle && <Text style={h3}>{subTitle}</Text>}
        <Text style={p}>{content}</Text>
      </View>
      {getImage(id)}
      <Text style={source}>
        Illustration av {technique}. Bild av Milla Lepistö.
      </Text>
    </ScrollView>
  );
};
