import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Text3 = () => {
  return <Text style={styles.text}>{`        `}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.size_4xs,
    letterSpacing: 1,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelMedium,
    color: Color.colorWhite,
    textAlign: "center",
  },
});

export default Text3;
