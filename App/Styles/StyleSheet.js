import React from "react";
import { StyleSheet } from "react-native";

export const FONTS = {
  ...Platform.select({
    ios: { fontFamily: "Arial" },
    android: { fontFamily: "Roboto" },
  }),
};

export const ICON_COLOR = "#bbbbbb";
export const ACTIVE_COLOR = "#ff6347";
export const BACKGROUND_COLOR = "white";

export const LABEL_STYLE = {
  ...FONTS,
  fontSize: 11,
  width: 200,
  textAlign: "center",
  color: ACTIVE_COLOR,
};

export const techniqueColors = {
  doubleBind: "#eebb6a",
  ridicule: "#9bbf8a",
  threatOfForce: "#e59775",
  objectifying: "#7b8ac4",
  makingInvisible: "#e0e0e0",
  heapBlame: "#7ec0ef",
  withholdInformation: "#fced8e",
};

export const icons = {
  attackerIcon: "bell",
  victimIcon: "hand-left",
  homeIcon: "home",
  observerIcon: "eye",
  techniquesIcon: "information-variant",
};

export const screenStyles = StyleSheet.create({
  screenContainer: {
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: 75,
  },
  firstScreenContainer: {
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "30%",
  },
  background: { backgroundColor: "#fafafa" },
});

export const sectionStyles = StyleSheet.create({
  textContainer: {
    marginLeft: "10%",
    marginRight: "10%",
  },
  listContainer: {
    marginTop: 10,
    marginBottom: 50,
    marginLeft: "6%",
    marginRight: "6%",
  },
});

export const assetStyles = StyleSheet.create({
  logo: {
    transform: [{ scale: 0.55 }],
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export const textStyles = StyleSheet.create({
  p: {
    ...FONTS,
    fontSize: 17,
    marginBottom: 20,
  },
  h3: {
    fontSize: 20,
    ...FONTS,
    fontWeight: "bold",
    marginBottom: 20,
  },
  h1: {
    marginLeft: "auto",
    marginRight: "auto",
    ...FONTS,
    fontSize: 40,
    marginBottom: 50,
  },
  headerText: {
    textAlign: "center",
    ...FONTS,
    fontSize: 10,
    marginLeft: 30,
    marginRight: 30,
  },
});

export const cardStyles = StyleSheet.create({
  header: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#efefef",
  },
  cardsContainer: {
    width: "100%",
    marginTop: 20,
    marginBottom: 50,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  card: {
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 150,
    borderRadius: 10,
    marginBottom: 0,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 6,
  },
  title: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 10,
  },
  icon: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
    marginTop: 10,
  },
});

export const techniqueCards = StyleSheet.create({
  card: {
    width: "48%",
    borderRadius: 10,
    marginBottom: 0,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 6,
  },
  title: {
    fontSize: 14,
    textAlign: "center",
    paddingTop: 10,
    marginBottom: 0,
  },
  image: {
    marginTop: 0,
    marginBottom: 0,
    width: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

export const counterStrategyStyles = StyleSheet.create({
  h2: {
    fontSize: 27,
    marginBottom: 10,
  },
  h3: { ...textStyles.h3 },
  p: { ...textStyles.p },
  source: {
    fontSize: 12,
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: 10,
  },
});

export const scenarioStyles = StyleSheet.create({
  container: {
    width: "100%",
  },
  item: {
    borderRadius: 10,
    borderLeftWidth: 10,
    height: 100,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 4,
    marginTop: 4,
    justifyContent: "center",
  },
  titleStyle: {
    fontSize: 15,
  },
});
