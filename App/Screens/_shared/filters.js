import { techniqueColors } from "../../Styles/StyleSheet";

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

export const getIllustration = (technique) => {
  if (technique.includes("invisible"))
    return require("../../assets/milla_osynliggorande.jpg");
  if (technique.includes("ridicule"))
    return require("../../assets/milla_forlojligande.jpg");
  if (technique.includes("withhold"))
    return require("../../assets/milla_undanhallande.jpg");
  if (technique.includes("doublebind"))
    return require("../../assets/milla_dubbelbestraffning.jpg");
  if (technique.includes("heapblame"))
    return require("../../assets/milla_skuldoskam.jpg");
  if (technique.includes("objectifying"))
    return require("../../assets/milla_objektifiering.jpg");
  if (technique.includes("threatofforce"))
    return require("../../assets/milla_threat_force.jpg");
};

export const getCounterStrategy = (technique) => {
  if (technique.includes("invisible")) return "MakingInvisible";
  if (technique.includes("ridicule")) return "Ridicule";
  if (technique.includes("withhold")) return "WithholdInformation";
  if (technique.includes("doublebind")) return "DoubleBind";
  if (technique.includes("heapblame")) return "HeapBlame";
  if (technique.includes("objectifying")) "Objectifying";
  if (technique.includes("threatofforce")) return "ThreatOfForce";
};

export const getColor = (scenario) => {
  if (scenario.includes("invisible")) return makingInvisible;
  if (scenario.includes("ridicule")) return ridicule;
  if (scenario.includes("withhold")) return withholdInformation;
  if (scenario.includes("doublebind")) return doubleBind;
  if (scenario.includes("heapblame")) return heapBlame;
  if (scenario.includes("objectifying")) return objectifying;
  if (scenario.includes("threatofforce")) return threatOfForce;
};

export const getKeys = (source) => {
  if (source === "victim") return Object.keys(victimScenarios);
  if (source === "observer") return Object.keys(observerScenarios);
  if (source === "attacker") return Object.keys(attackerScenarios);
};
