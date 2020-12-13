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

export const observations = [
  {
    id: 1,
    value: "Två eller flera personer pratade om någon som om hen inte var där.",
    counterStrategy: "DemandTransparency",
    color: undanhallande,
  },
  {
    id: 2,
    value:
      "Någon diskuterade frågor som rör någon annan, i dennes närvaro, utan att höra med personen i fråga.",
    counterStrategy: "DemandTransparency",
    color: undanhallande,
  },
  {
    id: 3,
    value:
      "Någon pratade förminskande om någon annan eller skämtade på dennes bekostnad",
    counterStrategy: "Ridicule",
    color: forlojligande,
  },
  {
    id: 4,
    value:
      "Någon av mina kollegor uteslöts från ett möte eller förhindrades från att ta del av information.",
    counterStrategy: "DoubleReward",
    color: dubbelBestraffning,
  },
  {
    id: 5,
    value: "Någon av mina kollegor blev utsatt för osaklig kritik.",
    counterStrategy: "DoubleReward",
    color: dubbelBestraffning,
  },
  {
    id: 6,
    value:
      "Någon gav en kollega skulden för något hen inte hade kontroll över.",
    counterStrategy: "Intellectualize",
    color: skuldSkam,
  },
];
