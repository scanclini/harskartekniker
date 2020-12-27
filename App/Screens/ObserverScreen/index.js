import React from "react";
import { icons } from "../../Styles/StyleSheet";
import { PageLayout } from "../_shared/pageLayout";
import { observations } from "./observations";
import translations from "../../translations";

const { observerIcon } = icons;

export function ObserverScreen({ navigation }) {
  return (
    <PageLayout
      icon={observerIcon}
      items={observations}
      title={translations.t("o_title")}
      content={translations.t("o_text")}
      navigation={navigation}
    />
  );
}
