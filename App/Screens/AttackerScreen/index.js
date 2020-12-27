import React from "react";
import { icons } from "../../Styles/StyleSheet";
import { PageLayout } from "../_shared/pageLayout";
import { scenarios } from "./scenarios";
import translations from "../../translations";

const { attackerIcon } = icons;

export function AttackerScreen({ navigation }) {
  return (
    <PageLayout
      icon={attackerIcon}
      items={scenarios}
      title={translations.t("a_title")}
      content={translations.t("a_text")}
      navigation={navigation}
    />
  );
}
