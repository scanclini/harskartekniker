import { techniqueColors } from "../../Styles/StyleSheet";

const {
  doubleBind,
  ridicule,
  threatOfForce,
  objectifying,
  makingInvisible,
  heapBlame,
  withholdInformation,
} = techniqueColors;

export const observations = [
  {
    id: 1,
    value: "Två eller flera personer pratade om någon som om hen inte var där.",
    counterStrategy: "WithholdInformation",
    color: withholdInformation,
  },
  {
    id: 2,
    value:
      "Någon diskuterade frågor som rör någon annan, i dennes närvaro, utan att höra med personen i fråga.",
    counterStrategy: "WithholdInformation",
    color: withholdInformation,
  },
  {
    id: 3,
    value:
      "Någon pratade förminskande om någon annan eller skämtade på dennes bekostnad",
    counterStrategy: "Ridicule",
    color: ridicule,
  },
  {
    id: 4,
    value:
      "Någon av mina kollegor uteslöts från ett möte eller förhindrades från att ta del av information.",
    counterStrategy: "DoubleBind",
    color: doubleBind,
  },
  {
    id: 5,
    value: "Någon av mina kollegor blev utsatt för osaklig kritik.",
    counterStrategy: "DoubleBind",
    color: doubleBind,
  },
  {
    id: 6,
    value:
      "Någon gav en kollega skulden för något hen inte hade kontroll över.",
    counterStrategy: "HeapBlame",
    color: heapBlame,
  },
];
