import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import Osynliggorande from "../../../assets/milla_osynliggorande.jpg";
import Forlojligande from "../../../assets/milla_forlojligande.jpg";
import Undanhallande from "../../../assets/milla_undanhallande.jpg";
import Dubbelbestraffning from "../../../assets/milla_dubbelbestraffning.jpg";
import Skuldoskam from "../../../assets/milla_skuldoskam.jpg";
import Objektifiering from "../../../assets/milla_objektifiering.jpg";
import threatViolence from "../../../assets/milla_threat_force.jpg";

export function TakePlaceScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Ta plats</Text>
        <Text>Någon försöker osynliggöra dig.</Text>
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

export function QuestionScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Ifrågasätt</Text>
        <Text>Någon försöker förlöjliga dig.</Text>
        <Text>
          Låt inte förlöjligande skämt eller kommenterar gå obemärkt förbi.
          Skratta inte med, utan hejda konversationen och kräv en förklaring.
          Upprepa vad som sagts ord för ord och be om en närmare förklaring.
          T.ex: ’Vad menar du med att någon över 50 inte skulle kunna hantera
          det där?’ ’Varför skulle det vara bättre om 'grabbarna sköter det
          där’?’ ’Tycker du att mitt arbete är lustigt? Hur menar du då?’
        </Text>
      </View>
      <Image source={Forlojligande} />
      <Text>Illustration av förlöjligande. Bild av Milla Lepistö.</Text>
    </ScrollView>
  );
}

export function DemandTransparencyScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Kräv transparens</Text>
        <Text>Någon undanhåller information dig.</Text>
        <Text>
          Utgå från att bristen på information beror på dålig
          informationsstruktur eller att personen är omedveten om sitt handlande
          och dess konsekvenser. Påminn de andra om att ni alla ingår i en
          arbetsgrupp där alla ska få bidra. T.ex: ’Vad fint att ni har
          diskuterat saken. Kan ni berätta vad ni kom fram till innan vi tar ett
          beslut?’
        </Text>
      </View>
      <Image source={Undanhallande} />
      <Text>Illustration av undanhallande. Bild av Milla Lepistö.</Text>
    </ScrollView>
  );
}

export function PrioritizeScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Prioritera</Text>
        <Text>Någon försöker utsätta dig för dubbelbestraffning.</Text>
        <Text>
          Skilj mellan egna och andras prioriteringar. Kommunicera dina
          prioriteringar till andra som påverkas av dina val. Var även tydlig
          med hur du upplever de dubbla budskapen. T.ex: ’När du ber mig att
          vara noggrann klagar du på att det tar för lång tid. Om jag skyndar
          mig tycker du att jag slarvar. Jag upplever att hur jag än gör blir
          det fel.’
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
        <Text>Någon försöker skuldbelägga dig.</Text>
        <Text>
          Försök att kritiskt granska situationen och formulera varför du känner
          skuld. Kan någon annan ha lämpat över skuld på dig för att rädda sig
          själv? Du kan ifrågasätta detta genom att tydliggöra hur du upplever
          situationen. T.ex: Jag upplever att de anklagelser du riktar mot mig
          är obefogade. Jag menar att arbetsfördelningen har varit helt orimlig
          och att det därför inte har varit möjligt att hinna klart i tid.’
        </Text>
      </View>
      <Image source={Skuldoskam} />
      <Text>Illustration av skuld och skam. Bild av Milla Lepistö.</Text>
    </ScrollView>
  );
}

export function ShiftFocusScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Skifta fokus</Text>
        <Text>Någon försöker objektifiera dig.</Text>
        <Text>
          Flytta fokus och säg ifrån. T.ex: ’Nej, anledningen till att jag har
          den här positionen är att jag är kompetent, erfaren och driven. Jag
          anser att din kommentar är gravt olämplig.’ ’Oavsett mina yttre
          attribut, hävdar jag att vi i det här projektet bör gå vidare genom
          att…’
        </Text>
      </View>
      <Image source={Objektifiering} />
      <Text>Illustration av objektifiering. Bild av Milla Lepistö.</Text>
    </ScrollView>
  );
}

export function ThreatViolenceScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Din säkerhet först</Text>
        <Text>Någon utsätter dig för våld, hot eller trakaserier.</Text>
        <Text>
          Det absolut viktigaste i en situation som innefattar våld eller hot är
          att se till den egna säkerheten. Det kan innebära att lämna rummet,
          att inte svara emot, eller att ta hjälp av andra i närheten. När du är
          i säkerhet, ta stöd från personer i din närhet och överväg att anmäla
          händelsen. Till skillnad från övriga härskartekniker är våld och hot
          om våld ett brott.
        </Text>
      </View>
      <Image source={threatViolence} />
      <Text>Illustration av hot och våld. Bild av Milla Lepistö.</Text>
    </ScrollView>
  );
}
