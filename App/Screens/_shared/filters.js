import { techniqueColors } from "../../Styles/StyleSheet";
import { scenariosEn as attackerScenarios } from "../../translations/attacker/scenarios";
import { scenariosEn as observerScenarios } from "../../translations/observer/scenarios";
import { scenariosEn as victimScenarios } from "../../translations/victim/scenarios";
import translations from "../../translations";

import MakingInvisible from "../../assets/milla_osynliggorande.jpg";
import Ridicule from "../../assets/milla_forlojligande.jpg";
import WithholdInformation from "../../assets/milla_undanhallande.jpg";
import DoubleBind from "../../assets/milla_dubbelbestraffning.jpg";
import HeapBlame from "../../assets/milla_skuldoskam.jpg";
import Objectifying from "../../assets/milla_objektifiering.jpg";
import ThreatOfForce from "../../assets/milla_threat_force.jpg";

const {
  doubleBind,
  ridicule,
  threatOfForce,
  objectifying,
  makingInvisible,
  heapBlame,
  withholdInformation,
} = techniqueColors;

export const getData = (item) => {
  console.log("INSIDE", item);
  if (item.includes("invisible"))
    return {
      color: makingInvisible,
      suppressionTechnique: translations.t("makingInvisible"),
      navigation: "MakingInvisible",
      illustration: MakingInvisible,
      source: "some text for now",
    };
  if (item.includes("ridicule"))
    return {
      color: ridicule,
      suppressionTechnique: translations.t("ridicule"),
      navigation: "Ridicule",
      illustration: Ridicule,
      source: "some text for now",
    };
  if (item.includes("withhold"))
    return {
      color: withholdInformation,
      suppressionTechnique: translations.t("withholdInformation"),
      navigation: "WithholdInformation",
      illustration: WithholdInformation,
      source: "some text for now",
    };
  if (item.includes("doublebind"))
    return {
      color: doubleBind,
      suppressionTechnique: translations.t("doubleBind"),
      navigation: "DoubleBind",
      illustration: DoubleBind,
      source: "some text for now",
    };
  if (item.includes("heapblame"))
    return {
      color: heapBlame,
      suppressionTechnique: translations.t("heapBlame"),
      navigation: "HeapBlame",
      illustration: HeapBlame,
      source: "some text for now",
    };
  if (item.includes("objectifying"))
    return {
      color: objectifying,
      suppressionTechnique: translations.t("objectifying"),
      navigation: "Objectifying",
      illustration: Objectifying,
      source: "some text for now",
    };
  if (item.includes("threatofforce"))
    return {
      color: threatOfForce,
      suppressionTechnique: translations.t("threatOfForce"),
      navigation: "ThreatOfForce",
      illustration: ThreatOfForce,
      source: "some text for now",
    };
};

export const getKeys = (source) => {
  if (source === "victim") return Object.keys(victimScenarios);
  if (source === "observer") return Object.keys(observerScenarios);
  if (source === "attacker") return Object.keys(attackerScenarios);
};
