import React from "react";
import translations from "../../translations";

import { CounterStrategyLayout } from "../_shared/counterStrategyLayout";

export function MakingInvisibleScreen() {
  return (
    <CounterStrategyLayout
      id="makingInvisible"
      technique="osynliggörande"
      title={translations.t("v_makingInvisibleTitle")}
      subTitle={translations.t("v_makingInvisibleSubTitle")}
      content={translations.t("v_makingInvisibleContent")}
    />
  );
}

export function RidiculeScreen() {
  return (
    <CounterStrategyLayout
      id="ridicule"
      technique="förlöjligande"
      title={translations.t("v_ridiculeTitle")}
      subTitle={translations.t("v_ridiculeSubTitle")}
      content={translations.t("v_ridiculeContent")}
    />
  );
}

export function WithholdInformationScreen() {
  return (
    <CounterStrategyLayout
      id="withholdInformation"
      technique="undanhållande"
      title={translations.t("v_withholdInformationTitle")}
      subTitle={translations.t("v_withholdInformationSubTitle")}
      content={translations.t("v_withholdInformationContent")}
    />
  );
}

export function DoubleBindScreen() {
  return (
    <CounterStrategyLayout
      id="doubleBind"
      technique="dubbelbestraffning"
      title={translations.t("v_doubleBindTitle")}
      subTitle={translations.t("v_doubleBindSubTitle")}
      content={translations.t("v_doubleBindContent")}
    />
  );
}

export function HeapBlameScreen() {
  return (
    <CounterStrategyLayout
      id="heapBlame"
      technique="skuld och skam"
      title={translations.t("v_heapBlameTitle")}
      subTitle={translations.t("v_heapBlameSubTitle")}
      content={translations.t("v_heapBlameContent")}
    />
  );
}

export function ObjectifyingScreen() {
  return (
    <CounterStrategyLayout
      id="objectifying"
      technique="objektifiering"
      title={translations.t("v_objectifyingTitle")}
      subTitle={translations.t("v_objectifyingSubTitle")}
      content={translations.t("v_objectifyingContent")}
    />
  );
}

export function ThreatOfForceScreen() {
  return (
    <CounterStrategyLayout
      id="threatOfForce"
      technique="hot och våld"
      title={translations.t("v_threatOfForceTitle")}
      subTitle={translations.t("v_threatOfForceSubTitle")}
      content={translations.t("v_threatOfForceContent")}
    />
  );
}
