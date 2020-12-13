import React from "react";
import { icons } from "../../Styles/StyleSheet";
import { PageLayout } from "../_shared/pageLayout";
import { observations } from "./observations";

const title = "Bekräftartekniker";
const content =
  "Har du sett någon bli utsatt för en härskarteknik? Välj passande situation från listan för att få tips på hur du kan ge personen stöd.";

export function ObserverScreen({ navigation }) {
  const { observerIcon } = icons;

  return (
    <PageLayout
      icon={observerIcon}
      items={observations}
      title={title}
      content={content}
    />
  );
}
