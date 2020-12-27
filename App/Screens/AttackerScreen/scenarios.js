import { techniqueColors } from "../../Styles/StyleSheet";
import translations from "../../translations";

const {
  doubleBind,
  ridicule,
  threatOfForce,
  objectifying,
  makingInvisible,
  heapBlame,
  withholdInformation,
} = techniqueColors;

export const scenarios = [
  {
    id: 1,
    value: translations.t("MakingInvisible1"),
    counterStrategy: "MakingInvisible",
    color: makingInvisible,
  },
  {
    id: 2,
    value: translations.t("MakingInvisible2"),
    counterStrategy: "MakingInvisible",
    color: makingInvisible,
  },
  {
    id: 3,
    value: translations.t("Ridicule1"),
    counterStrategy: "Ridicule",
    color: ridicule,
  },
  {
    id: 4,
    value: translations.t("Ridicule2"),
    counterStrategy: "Ridicule",
    color: ridicule,
  },
  {
    id: 5,
    value: translations.t("WithholdInformation1"),
    counterStrategy: "WithholdInformation",
    color: withholdInformation,
  },
  {
    id: 6,
    value: translations.t("WithholdInformation2"),
    counterStrategy: "Undanhallande",
    color: withholdInformation,
  },
  {
    id: 7,
    value: translations.t("DoubleBind1"),
    counterStrategy: "DoubleBind",
    color: doubleBind,
  },
  {
    id: 8,
    value: translations.t("DoubleBind2"),
    counterStrategy: "DoubleBind",
    color: doubleBind,
  },
  {
    id: 9,
    value: translations.t("DoubleBind3"),
    counterStrategy: "DoubleBind",
    color: doubleBind,
  },
  {
    id: 10,
    value: translations.t("HeapBlame1"),
    counterStrategy: "HeapBlame",
    color: heapBlame,
  },
  {
    id: 11,
    value: translations.t("Objectifying1"),
    counterStrategy: "Objectifying",
    color: objectifying,
  },
  {
    id: 12,
    value: translations.t("Objectifying2"),
    counterStrategy: "Objectifying",
    color: objectifying,
  },
  {
    id: 13,
    value: translations.t("Objectifying3"),
    counterStrategy: "Objectifying",
    color: objectifying,
  },
  {
    id: 14,
    value: translations.t("ThreatOfForce1"),
    counterStrategy: "ThreatOfForce",
    color: threatOfForce,
  },
  {
    id: 15,
    value: translations.t("ThreatOfForce2"),
    counterStrategy: "ThreatOfForce",
    color: threatOfForce,
  },
];
