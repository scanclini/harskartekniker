import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import Osynliggorande from "../../../assets/strategies/victim/milla_osynliggorande.jpg";

export function TakePlaceScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Ta plats</Text>
        <Text>Någon försöker osynliggöra dig</Text>
        <Text>
          Gå in i konversationen med en kommentar som bekräftar din närvaro.
          T.ex: 'Jag hör att du diskuterar saker som berör mig. Min uppfattning
          är att…’ eller ’Vad intressant att ni diskuterar mitt kunskapsområde!
          Min erfarenhet är att…'
        </Text>
      </View>
      <Image source={Osynliggorande} />
      <Text>Illustration av osynliggörande. Bild av Milla Lepistö.</Text>
    </ScrollView>
  );
}
