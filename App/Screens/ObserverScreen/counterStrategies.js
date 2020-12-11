import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import Undanhallande from "../../../assets/milla_undanhallande.jpg";

export function DemandTransparencyScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Uppmuntra personen att begära transparens</Text>
        <Text>
          Någon har undanhållit information eller utestängt någon annan
        </Text>
        <Text>
          Någon har undanhållit information eller utestängt någon annan. Utgå
          från att undanhållandet sker på grund av dålig informationsstruktur
          eller att personer är omedvetna om sitt handlande och dess
          konsekvenser. Uppmuntra personen som blivit utestängd att påminna de
          övriga om att hen också ingår i arbetsgruppen och har rätt till
          information och att delta i beslut.
        </Text>
      </View>
      <Image source={Undanhallande} />
      <Text>Illustration av undanhållande. Bild av Milla Lepistö.</Text>
    </ScrollView>
  );
}
