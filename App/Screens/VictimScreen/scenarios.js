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
    value: translations.t("v_makingInvisible1"),
    counterStrategy: "MakingInvisible",
    color: makingInvisible,
  },
  {
    id: 2,
    value: translations.t("v_makingInvisible2"),
    counterStrategy: "MakingInvisible",
    color: makingInvisible,
  },
  {
    id: 3,
    value: translations.t("v_ridicule1"),
    counterStrategy: "Ridicule",
    color: ridicule,
  },
  {
    id: 4,
    value: translations.t("v_ridicule2"),
    counterStrategy: "Ridicule",
    color: ridicule,
  },
  {
    id: 5,
    value: translations.t("v_withholdInformation1"),
    counterStrategy: "WithholdInformation",
    color: withholdInformation,
  },
  {
    id: 6,
    value: translations.t("v_withholdInformation2"),
    counterStrategy: "WithholdInformation",
    color: withholdInformation,
  },
  {
    id: 7,
    value: translations.t("v_doubleBind1"),
    counterStrategy: "DoubleBind",
    color: doubleBind,
  },
  {
    id: 8,
    value: translations.t("v_doubleBind2"),
    counterStrategy: "DoubleBind",
    color: doubleBind,
  },
  {
    id: 9,
    value: translations.t("v_doubleBind3"),
    counterStrategy: "DoubleBind",
    color: doubleBind,
  },
  {
    id: 10,
    value: translations.t("v_heapBlame1"),
    counterStrategy: "HeapBlame",
    color: heapBlame,
  },
  {
    id: 11,
    value: translations.t("v_objectifying1"),
    counterStrategy: "Objectifying",
    color: objectifying,
  },
  {
    id: 12,
    value: translations.t("v_objectifying2"),
    counterStrategy: "Objectifying",
    color: objectifying,
  },
  {
    id: 13,
    value: translations.t("v_threatOfForce1"),
    counterStrategy: "ThreatOfForce",
    color: threatOfForce,
  },
  {
    id: 14,
    value: translations.t("ThreatOfForce2"),
    counterStrategy: "ThreatOfForce",
    color: threatOfForce,
  },
];
