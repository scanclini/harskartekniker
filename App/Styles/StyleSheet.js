import React from "react";
import { StyleSheet } from "react-native";

export const screenStyles = StyleSheet.create({
  screenContainer: {
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "50%",
  },
});

export const textStyles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
  },
  subtitleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  titleText: {
    textAlign: "center",
    fontFamily: "Times New Roman",
    fontSize: 40,
    fontWeight: "bold",
  },
});

export const cardStyles = StyleSheet.create({
  cardsContainer: {
    marginTop: 20,
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  cardStyle: {
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 200,
    minHeight: 150,
    borderRadius: 10,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 5,
  },
  iconStyle: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
    marginTop: 10,
  },
  titleStyle: {
    fontSize: 15,
    textAlign: "center",
  },
});

export const scenarioStyles = StyleSheet.create({
  scenarioItem: {
    width: "100%",
    height: 80,
    justifyContent: "center",
  },
  titleStyle: {
    fontSize: 15,
  },
});
