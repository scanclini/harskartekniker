import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import Undanhallande from "../../../assets/milla_undanhallande.jpg";
import Forlojligande from "../../../assets/milla_forlojligande.jpg";
import Skuldoskam from "../../../assets/milla_skuldoskam.jpg";
import Dubbelbestraffning from "../../../assets/milla_dubbelbestraffning.jpg";

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

export function RidiculeScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Bemöt personen seriöst</Text>
        <Text>Någon har försökt förlöjliga någon annan</Text>
        <Text>
          Visa att du tar den utsatta personen på allvar. Respektera och bemöt
          hen seriöst. Ställ frågor om personens uppfattningar och synpunkter.
        </Text>
      </View>
      <Image source={Forlojligande} />
      <Text>Illustration av förlöjligande. Bild av Milla Lepistö.</Text>
    </ScrollView>
  );
}

export function DoubleRewardScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Dubbebelöna</Text>
        <Text>
          Någon har försökt utsätta någon annan för dubbelbestraffning
        </Text>
        <Text>
          Utgå ifrån att alla gör så gott de kan och backa den som utsätts genom
          att påpeka att kritiken är orimlig. Du kan också hjälpa personen genom
          att tydliggöra för hen att den utsatts för dubbelbestraffning.
          Uppmuntra personen att vara tydlig med hur hen upplever de dubbla
          budskapen.
        </Text>
      </View>
      <Image source={Dubbelbestraffning} />
      <Text>Illustration av dubbelbestraffning. Bild av Milla Lepistö.</Text>
    </ScrollView>
  );
}

export function IntellectualizeScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Intellektualisera</Text>
        <Text>Någon har försökt skuldbelägga någon annan</Text>
        <Text>
          Ge den utsatta personen stöd att intellektualisera och på så vis
          eventuellt förflytta skulden. Försök att tillsammans kritiskt granska
          situationen. Kan någon annan ha lämpat över skuld på personen för att
          rädda sig själv?
        </Text>
      </View>
      <Image source={Skuldoskam} />
      <Text>Illustration av skuld och skam. Bild av Milla Lepistö.</Text>
    </ScrollView>
  );
}
