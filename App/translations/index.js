import * as Localization from "expo-localization";
import i18n from "i18n-js";

import { victimEn, victimSv } from "./victim";
import { homeEn, homeSv } from "./home";
import { observerEn, observerSv } from "./observer";
import { attackerEn, attackerSv } from "./attacker";

i18n.translations = {
  en: { ...victimEn, ...homeEn, ...observerEn, ...attackerEn },
  sv: { ...victimSv, ...homeSv, ...observerSv, ...attackerSv },
};

export default i18n;
