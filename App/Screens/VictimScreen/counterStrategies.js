import React from "react";

import { CounterStrategyLayout } from "../_shared/counterStrategyLayout";

export function TakePlaceScreen() {
  return (
    <CounterStrategyLayout
      technique="osynliggörande"
      title="Ta plats"
      subTitle="Någon försöker osynliggöra dig."
      content="Gå in i konversationen med en kommentar som bekräftar din närvaro. T.ex: 'Jag hör att du diskuterar saker som berör mig. Min uppfattning är att…’ eller ’Vad intressant att ni diskuterar mitt kunskapsområde! Min erfarenhet är att…'"
    />
  );
}

export function QuestionScreen() {
  return (
    <CounterStrategyLayout
      technique="förlöjligande"
      title="Ifrågasätt"
      subTitle="Någon försöker förlöjliga dig."
      content="Låt inte förlöjligande skämt eller kommenterar gå obemärkt förbi. Skratta inte med, utan hejda konversationen och kräv en förklaring. Upprepa vad som sagts ord för ord och be om en närmare förklaring. T.ex: ’Vad menar du med att någon över 50 inte skulle kunna hantera det där?’ ’Varför skulle det vara bättre om 'grabbarna sköter det där’?’ ’Tycker du att mitt arbete är lustigt? Hur menar du då?’"
    />
  );
}

export function DemandTransparencyScreen() {
  return (
    <CounterStrategyLayout
      technique="undanhallande"
      title="Kräv transparens"
      subTitle="Någon undanhåller information dig."
      content="Utgå från att bristen på information beror på dålig informationsstruktur eller att personen är omedveten om sitt handlande och dess konsekvenser. Påminn de andra om att ni alla ingår i en arbetsgrupp där alla ska få bidra. T.ex: ’Vad fint att ni har diskuterat saken. Kan ni berätta vad ni kom fram till innan vi tar ett beslut?’"
    />
  );
}

export function PrioritizeScreen() {
  return (
    <CounterStrategyLayout
      technique="dubbelbestraffning"
      title="Prioritera"
      subTitle="Någon försöker utsätta dig för dubbelbestraffning."
      content="Skilj mellan egna och andras prioriteringar. Kommunicera dina prioriteringar till andra som påverkas av dina val. Var även tydlig med hur du upplever de dubbla budskapen. T.ex: ’När du ber mig att vara noggrann klagar du på att det tar för lång tid. Om jag skyndar mig tycker du att jag slarvar. Jag upplever att hur jag än gör blir det fel.’"
    />
  );
}

export function IntellectualizeScreen() {
  return (
    <CounterStrategyLayout
      technique="skuld och skam"
      title="Intellektualisera"
      subTitle="Någon försöker skuldbelägga dig."
      content="Försök att kritiskt granska situationen och formulera varför du känner skuld. Kan någon annan ha lämpat över skuld på dig för att rädda sig själv? Du kan ifrågasätta detta genom att tydliggöra hur du upplever situationen. T.ex: Jag upplever att de anklagelser du riktar mot mig är obefogade. Jag menar att arbetsfördelningen har varit helt orimlig och att det därför inte har varit möjligt att hinna klart i tid.’"
    />
  );
}

export function ShiftFocusScreen() {
  return (
    <CounterStrategyLayout
      technique="objektifiering"
      title="Skifta fokus"
      subTitle="Någon försöker objektifiera dig."
      content="Flytta fokus och säg ifrån. T.ex: ’Nej, anledningen till att jag har den här positionen är att jag är kompetent, erfaren och driven. Jag anser att din kommentar är gravt olämplig.’ ’Oavsett mina yttre attribut, hävdar jag att vi i det här projektet bör gå vidare genom att…’"
    />
  );
}

export function ThreatViolenceScreen() {
  return (
    <CounterStrategyLayout
      technique="hot och våld"
      title="Din säkerhet först"
      subTitle="Någon utsätter dig för våld, hot eller trakaserier."
      content="Det absolut viktigaste i en situation som innefattar våld eller hot är att se till den egna säkerheten. Det kan innebära att lämna rummet, att inte svara emot, eller att ta hjälp av andra i närheten. När du är i säkerhet, ta stöd från personer i din närhet och överväg att anmäla händelsen. Till skillnad från övriga härskartekniker är våld och hot om våld ett brott."
    />
  );
}
