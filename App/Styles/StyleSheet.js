import React from "react";
import { StyleSheet } from "react-native";

const IOS_FONT = "Arial";
const ANDROID_FONT = "Roboto";

export const techniqueColors = {
  dubbelBestraffning: "#eebb6a",
  forlojligande: "#9bbf8a",
  threatViolence: "#e59775",
  objektifiering: "#7b8ac4",
  osynliggorande: "#e0e0e0",
  skuldSkam: "#7ec0ef",
  undanhallande: "#fced8e",
};

export const screenStyles = StyleSheet.create({
  screenContainer: {
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "50%",
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
});

export const assetStyles = StyleSheet.create({
  logo: {
    transform: [{ scale: 0.55 }],
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export const textStyles = StyleSheet.create({
  baseText: {
    ...Platform.select({
      ios: { fontFamily: IOS_FONT },
      android: { fontFamily: ANDROID_FONT },
    }),
    fontSize: 17,
  },
  subtitleText: {
    fontSize: 20,
    ...Platform.select({
      ios: { fontFamily: IOS_FONT },
      android: { fontFamily: ANDROID_FONT },
    }),
    fontWeight: "bold",
  },
  titleText: {
    textAlign: "justify",
    ...Platform.select({
      ios: { fontFamily: IOS_FONT },
      android: { fontFamily: ANDROID_FONT },
    }),
    fontSize: 40,
    marginBottom: 50,
  },
  headerText: {
    textAlign: "center",
    ...Platform.select({
      ios: { fontFamily: IOS_FONT },
      android: { fontFamily: "Roboto" },
    }),
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
  image: {
    marginTop: 0,
    width: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  icon: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
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
