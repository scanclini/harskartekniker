import { counterStrategiesEn, counterStrategiesSv } from "./counterStrategies";
import { scenariosEn, scenariosSv } from "./scenarios";

export const attackerEn = {
  a_title: "What do I do now?",
  a_text: `Here you get advice on what you can do if you have been exposed to a ruler technique. Choose the quote from the list that best matches what you have been through.`,
  ...scenariosEn,
  ...counterStrategiesEn,
};

export const attackerSv = {
  a_title: "Vad gör jag nu?",
  a_text: `Här får du tips på vad du kan göra om har blivit utsatt för en härskarteknik. Välj den sitation i listan som stämmer bäst in på det du varit med om.`,
  ...scenariosSv,
  ...counterStrategiesSv,
};
