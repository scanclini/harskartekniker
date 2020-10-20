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
  container: {
    marginLeft: "auto",
    marginRight: "auto",
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
    maxHeight: 200,
    minHeight: 150,
    borderRadius: 10,
    marginBottom: 0,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 6,
  },
  icon: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 15,
    textAlign: "center",
  },
  image: {
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
});

export const scenarioStyles = StyleSheet.create({
  container: {
    width: "100%",
  },
  item: {
    borderRadius: 10,
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
