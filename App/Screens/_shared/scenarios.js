import translations from "../../translations";
import { getCounterStrategy, getColor, getKeys } from "./filters";

export const scenarios = (source) => {
  const keys = getKeys(source);
  let index = 0;
  const list = keys.map((scenario) => {
    const obj = {
      id: `${index}-${scenario}`,
      value: translations.t(String(scenario)),
      counterStrategy: getCounterStrategy(scenario.toLowerCase()),
      color: getColor(scenario.toLowerCase()),
    };
    index += 1;
    return obj;
  });
  return list;
};
