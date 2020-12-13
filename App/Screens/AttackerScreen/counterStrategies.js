import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import Undanhallande from "../../../assets/milla_undanhallande.jpg";
import Osynliggorande from "../../../assets/milla_osynliggorande.jpg";
import Forlojligande from "../../../assets/milla_forlojligande.jpg";
import SkuldSkam from "../../../assets/milla_skuldoskam.jpg";
import threatViolence from "../../../assets/milla_threat_force.jpg";
import DubbelBestraffning from "../../../assets/milla_dubbelbestraffning.jpg";

export function OsynliggorandeScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Ge plats</Text>
        <Text>Du har försökt osynliggöra en annan person</Text>
        <Text>
          I situationen: Be om ursäkt. Fråga den som blivit osynliggjord om hens
          åsikt och bemöt personen med respekt även om du inte håller med.
          Efteråt: Reflektera över... Vad hoppades jag vinna genom att
          osynliggöra personen? Vad förlorade jag? Är detta något jag har gjort
          förut? Brukar jag göra på liknande sätt i andra sammanhang?
        </Text>
      </View>
      <Image source={Osynliggorande} />
      <Text>Illustration av dubbelbestraffning. Bild av Milla Lepistö.</Text>
    </ScrollView>
  );
}

export function ForlojligandeScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Bemöt personen med respekt</Text>
        <Text>Du har försökt förlöjliga någon</Text>
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

export function UndanhallandeScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Var transparent</Text>
        <Text>Du har undanhållit information och utestängt någon</Text>
        <Text>
          I situationen: Be om ursäkt. Var transparent och förse alla inblandade
          med nödvändig information. Efteråt: Reflektera över... Gjorde jag
          detta med avsikt? Vad hoppades jag vinna genom att undanhålla
          information eller utestänga någon? Vad förlorade jag Hur kan detta
          problem undvikas i framtiden?
        </Text>
      </View>
      <Image source={Undanhallande} />
      <Text>Illustration av dubbelbestraffning. Bild av Milla Lepistö.</Text>
    </ScrollView>
  );
}

export function DubbelBestraffningScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Ta ansvar för din del i situationen</Text>
        <Text>Du har försökt skuldbelägga en annan person</Text>
        <Text>
          I situationen: Be om ursäkt. Försök att granska situationen och din
          egen del i den. Efteråt: Reflektera över... Gjorde jag detta för att
          skyla över ett eget misstag eller egna svagheter? Vad hoppades jag
          vinna genom att skuldbelägga personen? Vad förlorade jag? Är detta
          något jag har gjort förut? Finns det något bättre sätt att hantera
          liknande situationer på.
        </Text>
      </View>
      <Image source={DubbelBestraffning} />
      <Text>Illustration av dubbelbestraffning. Bild av Milla Lepistö.</Text>
    </ScrollView>
  );
}

export function SkuldSkamScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Rannsaka dig själv</Text>
        <Text>Du har objektifierat någon</Text>
        <Text>
          I situationen: Be om ursäkt för det olämpliga i uttalandet. Flytta
          fokus tillbaka till sakfrågan. Efteråt: Reflektera över... Vad
          hoppades jag vinna genom att objektifiera personen? Hur kom det sig
          att jag kände mig bekväm med att objektifiera personen i detta
          sammanhang? Vilka maktstrukturer förstärks genom mitt agerande?
        </Text>
      </View>
      <Image source={SkuldSkam} />
      <Text>Illustration av skuld och skam. Bild av Milla Lepistö.</Text>
    </ScrollView>
  );
}

export function ThreatViolenceScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Rannsaka dig själv</Text>
        <Text>Du har objektifierat någon</Text>
        <Text>
          I situationen: Be om ursäkt för det olämpliga i uttalandet. Flytta
          fokus tillbaka till sakfrågan. Efteråt: Reflektera över... Vad
          hoppades jag vinna genom att objektifiera personen? Hur kom det sig
          att jag kände mig bekväm med att objektifiera personen i detta
          sammanhang? Vilka maktstrukturer förstärks genom mitt agerande?
        </Text>
      </View>
      <Image source={threatViolence} />
      <Text>Illustration av skuld och skam. Bild av Milla Lepistö.</Text>
    </ScrollView>
  );
}
