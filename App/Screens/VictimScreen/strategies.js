import React from "react";
import { Text, View, ScrollView } from "react-native";

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
    </ScrollView>
  );
}
