import { techniqueColors } from "../../Styles/StyleSheet";

const {
  dubbelBestraffning,
  forlojligande,
  threatViolence,
  objektifiering,
  osynliggorande,
  skuldSkam,
  undanhallande,
} = techniqueColors;

export const harrassments = [
  {
    id: 1,
    value:
      "Jag och en eller flera personer pratade om någon annan i den personens närvaro - som om personen inte var där.",
    counterStrategy: "Osynliggorande",
    color: osynliggorande,
  },
  {
    id: 2,
    value:
      "Jag diskuterade frågor som rör någon annan i dennas närvaro utan att involvera personen.",
    counterStrategy: "Osynliggorande",
    color: osynliggorande,
  },
  {
    id: 3,
    value:
      "Jag pratade förminskande om någon eller skämtade på personens bekostnad.",
    counterStrategy: "Forlojligande",
    color: forlojligande,
  },
  {
    id: 4,
    value: "Jag hindrade någon från att ta del av information.",
    counterStrategy: "Undanhallande",
    color: undanhallande,
  },
  {
    id: 5,
    value:
      "Jag uteslöt någon från ett formellt eller informellt möte där personen borde ha varit med.",
    counterStrategy: "Undanhallande",
    color: undanhallande,
  },
  {
    id: 6,
    value:
      "Jag gav någon skulden för något hen inte hade kontroll över eller fick personen att känna att vad hen än gör så blir det fel.",
    counterStrategy: "DubbelBestraffning",
    color: dubbelBestraffning,
  },
  {
    id: 7,
    value: "Jag skuldbelade en annan person för något hen inte kan rå för.",
    counterStrategy: "SkuldSkam",
    color: skuldSkam,
  },
  {
    id: 8,
    value:
      "Jag kommenterade en persons utseende eller sexualitet för att flytta fokus från hens prestationer eller åsikter.",
    counterStrategy: "ThreatViolence",
    color: threatViolence,
  },
  {
    id: 9,
    value: "Jag utsatte någon för våld, hot eller trakasserier.",
    counterStrategy: "ThreatViolence",
    color: threatViolence,
  },
];
