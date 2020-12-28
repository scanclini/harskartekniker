import * as Localization from "expo-localization";
import i18n from "i18n-js";

import { victimEn, victimSv } from "./victim";
import { homeEn, homeSv } from "./home";
import { observerEn, observerSv } from "./observer";
import { attackerEn, attackerSv } from "./attacker";
import { techniquesEn, techniquesSv } from "./techniques";

i18n.translations = {
  en: {
    ...homeEn,
    ...victimEn,
    ...observerEn,
    ...attackerEn,
    ...techniquesEn,
  },
  sv: {
    ...homeSv,
    ...victimSv,
    ...observerSv,
    ...attackerSv,
    ...techniquesSv,
  },
};

export default i18n;
