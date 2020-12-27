import { techniqueColors } from "../../Styles/StyleSheet";
import translations from "../../translations";
import { scenariosEn as attackerScenarios } from "../../translations/attacker/scenarios";
import { scenariosEn as observerScenarios } from "../../translations/observer/scenarios";
import { scenariosEn as victimScenarios } from "../../translations/victim/scenarios";

const {
  doubleBind,
  ridicule,
  threatOfForce,
  objectifying,
  makingInvisible,
  heapBlame,
  withholdInformation,
} = techniqueColors;

const getKeys = (source) => {
  if (source === "victim") return Object.keys(victimScenarios);
  if (source === "observer") return Object.keys(observerScenarios);
  if (source === "attacker") return Object.keys(attackerScenarios);
};

const getColor = (scenario) => {
  if (scenario.toLowerCase().includes("invisible")) return makingInvisible;
  if (scenario.toLowerCase().includes("ridicule")) return ridicule;
  if (scenario.toLowerCase().includes("withhold")) return withholdInformation;
  if (scenario.toLowerCase().includes("doublebind")) return doubleBind;
  if (scenario.toLowerCase().includes("heapblame")) return heapBlame;
  if (scenario.toLowerCase().includes("objectifying")) return objectifying;
  if (scenario.toLowerCase().includes("threatofforce")) return threatOfForce;
};

const getCounterStrategy = (scenario) => {
  if (scenario.toLowerCase().includes("invisible")) return "MakingInvisible";
  if (scenario.toLowerCase().includes("ridicule")) return "Ridicule";
  if (scenario.toLowerCase().includes("withhold")) return "WithholdInformation";
  if (scenario.toLowerCase().includes("doublebind")) return "DoubleBind";
  if (scenario.toLowerCase().includes("heapblame")) return "HeapBlame";
  if (scenario.toLowerCase().includes("objectifying")) "Objectifying";
  if (scenario.toLowerCase().includes("threatofforce")) return "ThreatOfForce";
  return null;
};

export const scenarios = (source) => {
  const keys = getKeys(source);
  let index = 0;
  const list = keys.map((scenario) => {
    const obj = {
      id: `${index}-${scenario}`,
      value: translations.t(String(scenario)),
      counterStrategy: getCounterStrategy(scenario),
      color: getColor(scenario),
    };
    index += 1;
    return obj;
  });
  return list;
};
