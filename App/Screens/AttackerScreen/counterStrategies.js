import React from "react";
import { CounterStrategyLayout } from "../_shared/counterStrategyLayout";

export function MakingInvisibleScreen() {
  return (
    <CounterStrategyLayout
      id="makingInvisible"
      technique="osynliggörande"
      title="Ta plats"
      subTitle="Du har försökt osynliggöra en annan person"
      content="I situationen: Be om ursäkt. Fråga den som blivit osynliggjord om hens åsikt och bemöt personen med respekt även om du inte håller med. Efteråt: Reflektera över... Vad hoppades jag vinna genom att osynliggöra personen? Vad förlorade jag? Är detta något jag har gjort förut? Brukar jag göra på liknande sätt i andra sammanhang?"
    />
  );
}

export function RidiculeScreen() {
  return (
    <CounterStrategyLayout
      id="ridicule"
      technique="förlöjligande"
      title="Bemöt personen med respekt"
      subTitle="Du har försökt förlöjliga någon"
      content="Visa att du tar den utsatta personen på allvar. Respektera och bemöt hen seriöst. Ställ frågor om personens uppfattningar och synpunkter."
    />
  );
}

export function WithholdInformationScreen() {
  return (
    <CounterStrategyLayout
      id="withholdInformation"
      technique="undanhallande"
      title="Var transparent"
      subTitle="Du har undanhållit information och utestängt någon"
      content="I situationen: Be om ursäkt. Var transparent och förse alla inblandade med nödvändig information. Efteråt: Reflektera över... Gjorde jag detta med avsikt? Vad hoppades jag vinna genom att undanhålla information eller utestänga någon? Vad förlorade jag Hur kan detta problem undvikas i framtiden?"
    />
  );
}

export function DoubleBindScreen() {
  return (
    <CounterStrategyLayout
      id="doubleBind"
      technique="dubbelBestraffning"
      title="Red ut dina och den andra personens prioriteringar"
      subTitle="Du har försökt utsätta någon för dubbelbestraffning"
      content="I situationen: Be om ursäkt och medge att din kritik var orättvis. Försök ha en öppen diskussion om era prioriteringar. Efteråt: Reflektera över... Gjorde jag detta med avsikt? Vad vann jag genom att utsätta personen för dubbelbestraffning? Vad förlorade jag? Hur kan problemet undvikas i framtiden?"
    />
  );
}

export function HeapBlameScreen() {
  return (
    <CounterStrategyLayout
      id="heapBlame"
      technique="skuld och skam"
      title="Ta ansvar för din del i situationen"
      subTitle="Du har försökt skuldbelägga en annan person"
      content="I situationen: Be om ursäkt. Försök att granska situationen och din egen del i den. Efteråt: Reflektera över... Gjorde jag detta för att skyla över ett eget misstag eller egna svagheter? Vad hoppades jag vinna genom att skuldbelägga personen? Vad förlorade jag? Är detta något jag har gjort förut? Finns det något bättre sätt att hantera liknande situationer på."
    />
  );
}

export function ObjectifyingScreen() {
  return (
    <CounterStrategyLayout
      id="objectifying"
      technique="objektifiering"
      title="Rannsaka dig själv"
      subTitle="Du har objektifierat någon"
      content="I situationen: Be om ursäkt för det olämpliga i uttalandet. Flytta fokus tillbaka till sakfrågan. Efteråt: Reflektera över... Vad hoppades jag vinna genom att objektifiera personen? Hur kom det sig att jag kände mig bekväm med att objektifiera personen i detta sammanhang? Vilka maktstrukturer förstärks genom mitt agerande?"
    />
  );
}

export function ThreatOfForceScreen() {
  return (
    <CounterStrategyLayout
      id="threatOfForce"
      technique="hot och våld"
      title="Ta ansvar för ditt beteende"
      subTitle="Du har utsatt någon för våld, hot eller trakasserier"
      content="Ditt beteende är ytterst allvarligt och du bör reda ut varför du har hamnat i denna extrema situation. Det kan finnas anledning för dig att söka hjälp för att komma till rätta med ditt beteende. Möjliga vägar är företagshälsovården eller en utomstående terapeut."
    />
  );
}
