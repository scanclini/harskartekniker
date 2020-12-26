import React from "react";
import { icons } from "../../Styles/StyleSheet";
import { PageLayout } from "../_shared/pageLayout";
import { scenarios } from "./scenarios";
import translations from "../../translations/victim/main";

const { victimIcon } = icons;

export function VictimScreen({ navigation }) {
  return (
    <PageLayout
      icon={victimIcon}
      items={scenarios}
      title={translations.t("title")}
      content={translations.t("text")}
      navigation={navigation}
    />
  );
}
