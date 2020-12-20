import React from "react";
import { CounterStrategyLayout } from "../_shared/counterStrategyLayout";

export function WithholdInformationScreen() {
  return (
    <CounterStrategyLayout
      id="withholdInformation"
      technique="undanhållande"
      title="Uppmuntra personen att begära transparens"
      subTitle="Någon har undanhållit information eller utestängt någon annan"
      content={`Någon har undanhållit information eller utestängt någon annan. 

Utgå från att undanhållandet sker på grund av dålig informationsstruktur eller att personer är omedvetna om sitt handlande och dess konsekvenser.

Uppmuntra personen som blivit utestängd att påminna de övriga om att hen också ingår i arbetsgruppen och har rätt till information och att delta i beslut.`}
    />
  );
}

export function RidiculeScreen() {
  return (
    <CounterStrategyLayout
      id="ridicule"
      technique="förlöjligande"
      title="Bemöt personen seriöst"
      subTitle="Någon har försökt förlöjliga någon annan"
      content="Visa att du tar den utsatta personen på allvar. Respektera och bemöt hen seriöst. Ställ frågor om personens uppfattningar och synpunkter."
    />
  );
}

export function DoubleBindScreen() {
  return (
    <CounterStrategyLayout
      id="doubleBind"
      technique="dubbelbestraffning"
      title="Dubbebelöna"
      subTitle="Någon har försökt utsätta någon annan för dubbelbestraffning"
      content={`Utgå ifrån att alla gör så gott de kan och backa den som utsätts genom att påpeka att kritiken är orimlig. 
      
Du kan också hjälpa personen genom att tydliggöra för hen att den utsatts för dubbelbestraffning. Uppmuntra personen att vara tydlig med hur hen upplever de dubbla budskapen.`}
    />
  );
}

export function HeapBlameScreen() {
  return (
    <CounterStrategyLayout
      id="heapBlame"
      technique="skuld och skam"
      title="Intellektualisera"
      subTitle="Någon har försökt skuldbelägga någon annan"
      content={`Ge den utsatta personen stöd att intellektualisera och på så vis eventuellt förflytta skulden.

Försök att tillsammans kritiskt granska situationen. Kan någon annan ha lämpat över skuld på personen för att rädda sig själv?`}
    />
  );
}

export function MakingInvisibleScreen() {
  return (
    <CounterStrategyLayout
      id="makingInvisible"
      technique="osynliggörande"
      title=""
      subTitle=""
      content=""
    />
  );
}

export function ObjectifyingScreen() {
  return (
    <CounterStrategyLayout
      id="objectifying"
      technique="objektifiering"
      title=""
      subTitle=""
      content=""
    />
  );
}

export function ThreatOfForceScreen() {
  return (
    <CounterStrategyLayout
      id="threatOfForce"
      technique="hot och våld"
      title=""
      subTitle=""
      content=""
    />
  );
}
