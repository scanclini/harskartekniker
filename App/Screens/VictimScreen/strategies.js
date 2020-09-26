import React from "react";
import { strategyStyles } from "../../Styles/StyleSheet";
import { Card, Text } from "react-native-elements";

const strategies = [
  {
    id: 1,
    value:
      "Två eller flera personer pratade om mig som om att jag inte var där.",
    path: "strategy-one",
  },
  {
    id: 2,
    value:
      "Någon diskuterade frågor som rör mig, i min närvaro, utan att involvera mig.",
  },
  {
    id: 3,
    value:
      "Någon skämtade om mig på ett sätt som gjorde att jag kände mig obekväm.",
  },
  {
    id: 4,
    value: "Någon förminskade mina åstdakommanden.",
  },
  {
    id: 5,
    value: "Någon undanhöll information from mig.",
  },
  {
    id: 6,
    value:
      "Det hölls ett möte (formellt eller inte formellt) där jag borde varit med men som jag inte var bjuden till.",
  },
  {
    id: 7,
    value: "Någon fick mig att känna att vad jag än gör gör jag fel.",
  },
  {
    id: 8,
    value:
      "Jag blev direkt eller indirekt kritiserad för en privat eller arbetsrelaterad situation jag inte haft kontroll över.",
  },
];

export const strategyList = strategies.map((strategy) => {
  return (
    <Card
      key={`strategy-${strategy.id}`}
      containerStyle={strategyStyles.strategyItem}
    >
      <Text>{strategy.value}</Text>
    </Card>
  );
});
