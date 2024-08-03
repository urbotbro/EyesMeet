import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Text2 = () => {
  return <Text style={styles.text}>{`       `}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.size_sm,
    letterSpacing: 1,
    lineHeight: 16,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhite,
    textAlign: "left",
    width: 372,
    height: 254,
  },
});

export default Text2;
