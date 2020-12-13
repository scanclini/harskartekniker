import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import MakingInvisible from "../../../assets/milla_osynliggorande.jpg";
import WithholdInformation from "../../../assets/milla_undanhallande.jpg";
import Ridicule from "../../../assets/milla_forlojligande.jpg";
import DoubleBind from "../../../assets/milla_dubbelbestraffning.jpg";
import HeapBlame from "../../../assets/milla_skuldoskam.jpg";
import Objectifying from "../../../assets/milla_objektifiering.jpg";
import ThreatOfForce from "../../../assets/milla_threat_force.jpg";

export function MakingInvisibleScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Osynliggörande</Text>
        <Text>
          Osynliggörande är en situation där en person ignoreras. Det kan handla
          om att två eller flera personer pratar om en annan person eller frågor
          som berör hen - som om hen inte var där. Osynliggörande behöver inte
          ske i personliga möten utan det kan också röra sig om situationer där
          en persons kompetens, prestationer eller åsikter inte synliggörs. Ett
          exempel på den här typen av indirekt osynliggörande är när en persons
          arbete utelämnas i verksamhetsberättelsen eller liknande dokument.
        </Text>
      </View>
      <Image source={MakingInvisible} />
      <Text>Illustration av osynliggörande. Bild av Milla Lepistö.</Text>
    </ScrollView>
  );
}

export function RidiculeScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Förlöjligande</Text>
        <Text>
          Förlöjligande innebär att någon gör sig lustig på en annan persons
          bekostnad. Det kan röra sig om en situation där en persons arbete
          förlöjligas eller att någon gör sig lustig över en annans persons
          livsstil, intressen, världsåskådning eller bakgrund. Det är inte
          ovanligt att förlöjligande är kopplat till större maktstrukturer såsom
          sexism, rasism, homo- eller transfobi, funkofobi eller
          åldersdiskriminering. Det kan även ha sin grund i interna
          maktrelationer på en arbetsplats.
        </Text>
      </View>
      <Image source={Ridicule} />
      <Text>Illustration av förlöjligande. Bild av Milla Lepistö.</Text>
    </ScrollView>
  );
}

export function WithholdInformationScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Undanhållande av information</Text>
        <Text>
          Undanhållande av information är en handling där någon medvetet eller
          omedvetet låter bli att informera en annan person om saker som berör
          hen. Detta kan till exempel innebära att det hålls ett möte eller
          fattas beslut där en person som borde varit med inte blivit inbjuden
          eller haft tillträde. Ofta är undanhållande av information ett
          resultat av slarv, obetänksamhet eller dålig informationsstruktur i
          organisationen. Det kan dock också vara så att en person medvetet
          undanhåller information för att få egna fördelar, försprång eller
          övertag i en viss situation.
        </Text>
      </View>
      <Image source={WithholdInformation} />
      <Text>
        Illustration av undanhållande av information. Bild av Milla Lepistö.
      </Text>
    </ScrollView>
  );
}

export function DoubleBindScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Dubbelbestraffning</Text>
        <Text>
          Dubbelbestraffning är en situation där någon får en annan person att
          känna att vad hen än gör så blir det fel. Ofta innebär detta att
          personen direkt eller indirekt blir kritiserad för att befinna sig i
          en situation som hen inte upplever sig ha kontroll över. Som
          härskarteknik handlar dubbelbestraffning om en situation där de dubbla
          budskapen kommer ifrån samma person/er. Därutöver kan en person
          uppleva att hen blir utsatt för dubbelbestraffning i en situation där
          kraven kommer ifrån olika håll, till exempel i relationen mellan
          arbete och familj.
        </Text>
      </View>
      <Image source={DoubleBind} />
      <Text>Illustration av skuld och skam. Bild av Milla Lepistö.</Text>
    </ScrollView>
  );
}

export function HeapBlameScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Påförande av skuld och skam</Text>
        <Text>
          Påförande av skuld och skam innebär att någon blir ifrågasatt eller
          beskylld för något i syfte att få personen att känna sig inkompetent.
          Det kan finnas flera orsaker bakom denna härskarteknik. T.ex. kan en
          person vilja rädda sig själv genom att lägga skulden på någon annan
          eller så använder personen andras tillkortakommanden för att själv
          framstå i en bättre dager. Det kan också handla om att en person görs
          till syndabock för ett större problem i en organisation så att det
          framstår som om problemet kan lösas genom att den utpekade personen
          ändrar sitt beteende. Det kan vara svårt för personen som blir utsatt
          att inte internalisera skulden och skammen. Personen kan därför behöva
          extra stöd för att inte hamna i en situation där hen skuldbelägger sig
          själv.
        </Text>
      </View>
      <Image source={HeapBlame} />
      <Text>Illustration av skuld och skam. Bild av Milla Lepistö.</Text>
    </ScrollView>
  );
}

export function ObjectifyingScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Objektifiering</Text>
        <Text>
          Objektifiering som härskarteknik är när en person kommenterar eller
          anspelar på en annan persons utseende eller yttre attribut - ofta med
          en sexuell underton. Det kan ske i mer informella jobbsammanhang men
          även i formella möten. I båda fallen handlar det om att tillskansa sig
          makt över den andra. Syftet med objektifiering som härskarteknik är
          ofta att förminska eller skifta fokus från en persons åsikt eller
          kompetens.
        </Text>
      </View>
      <Image source={Objectifying} />
      <Text>Illustration av objektifiering. Bild av Milla Lepistö.</Text>
    </ScrollView>
  );
}

export function ThreatOfForceScreen() {
  return (
    <ScrollView>
      <View>
        <Text>Våld, hot eller trakasserier</Text>
        <Text>
          Till skillnad från övriga härskartekniker är våld och hot om våld ett
          brott. Även andra former av hot och trakasserier kan vara brottsligt.
          Därför behövs det tas på särskilt stort allvar. Hot behöver inte vara
          verbala utan kan vara gester och kroppsspråk som används för att
          skrämmas. Det skulle kunna vara att luta sig över ett bord eller närma
          sig någon annan på ett aggressivt sätt. En person som blir utsatt kan
          behöva mycket stöd. Som kollega, se i första hand till att lyssna på
          personen och var uppmärksam på hur hen vill gå vidare med händelsen.
          Om den utsatta personen vill anmäla det som hänt, ge stöd i detta.
        </Text>
      </View>
      <Image source={ThreatOfForce} />
      <Text>Illustration av objektifiering. Bild av Milla Lepistö.</Text>
    </ScrollView>
  );
}
