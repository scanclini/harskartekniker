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

export const scenarios = [
  {
    id: 1,
    value:
      "Två eller flera personer pratade om mig som om att jag inte var där",
    counterStrategy: "TakePlace",
    color: osynliggorande,
  },
  {
    id: 2,
    value:
      "Någon diskuterade frågor som rör mig, i min närvaro, utan att involvera mig",
    counterStrategy: "TakePlace",
    color: osynliggorande,
  },
  {
    id: 3,
    value:
      "Någon skämtade om mig på ett sätt som gjorde att jag kände mig obekväm",
    counterStrategy: "Question",
    color: forlojligande,
  },
  {
    id: 4,
    value: "Någon förminskade mina åstdakommanden",
    counterStrategy: "Question",
    color: forlojligande,
  },
  {
    id: 5,
    value: "Någon undanhöll information from mig",
    counterStrategy: "DemandTransparency",
    color: undanhallande,
  },
  {
    id: 6,
    value:
      "Det hölls ett möte (formellt eller inte formellt) där jag borde varit med men som jag inte var bjuden till",
    counterStrategy: "DemandTransparency",
    color: undanhallande,
  },
  {
    id: 7,
    value: "Någon fick mig att känna att vad jag än gör gör jag fel",
    counterStrategy: "Prioritize",
    color: dubbelBestraffning,
  },
  {
    id: 8,
    value:
      "Jag blev direkt eller indirekt kritiserad för en privat eller arbetsrelaterad situation jag inte haft kontroll över",
    counterStrategy: "Prioritize",
    color: dubbelBestraffning,
  },
  {
    id: 9,
    value: "Någon påpekade ett misstag jag gjort i syfte att genera mig",
    counterStrategy: "Prioritize",
    color: dubbelBestraffning,
  },
  {
    id: 10,
    value: "Någon gav mig skulden för något som är bortom min kontroll",
    counterStrategy: "Intellectualize",
    color: skuldSkam,
  },
  {
    id: 11,
    value:
      "Någon flyttade fokus från det jag sa till min klädsel eller mitt utseende",
    counterStrategy: "ShiftFocus",
    color: objektifiering,
  },
  {
    id: 12,
    value:
      "Någon antydde att jag utnyttjat min sexualitet eller mitt utseende för att få fördelar eller befordran",
    counterStrategy: "ShiftFocus",
    color: objektifiering,
  },
  {
    id: 13,
    value:
      "Någon sa eller gjorde något som gjorde att jag blev rädd eller kände mig hotad",
    counterStrategy: "ThreatViolence",
    color: threatViolence,
  },
  {
    id: 14,
    value: "Någon utsatte mig för trakasserier, ofredanden eller våld",
    counterStrategy: "ThreatViolence",
    color: threatViolence,
  },
];
