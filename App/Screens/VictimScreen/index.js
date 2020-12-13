import React from "react";
import { icons } from "../../Styles/StyleSheet";
import { PageLayout } from "../_shared/pageLayout";
import { scenarios } from "./scenarios";

const title = "Motstrategier";
const content =
  "Här får du tips på vad du kan göra om har blivit utsatt för en härskarteknik. Välj den sitation i listan som stämmer bäst in på det du varit med om.";
const { victimIcon } = icons;

export function VictimScreen({ navigation }) {
  return (
    <PageLayout
      icon={victimIcon}
      items={scenarios}
      title={title}
      content={content}
    />
  );
}
