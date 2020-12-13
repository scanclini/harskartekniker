import React from "react";
import { icons } from "../../Styles/StyleSheet";
import { PageLayout } from "../_shared/pageLayout";
import { harrassments } from "./harrassments";

const { attackerIcon } = icons;
const title = "Vad gör jag nu?";
const content =
  "Här får du tips på vad du kan göra om har blivit utsatt för en härskarteknik. Välj den sitation i listan som stämmer bäst in på det du varit med om.";

export function AttackerScreen({ navigation }) {
  return (
    <PageLayout
      icon={attackerIcon}
      items={harrassments}
      title={title}
      content={content}
      navigation={navigation}
    />
  );
}
