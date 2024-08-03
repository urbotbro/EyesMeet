import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Line = () => {
  return <View style={styles.lineView} />;
};

const styles = StyleSheet.create({
  lineView: {
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderTopWidth: 1,
    width: 361,
    height: 1,
    transform: [
      {
        rotate: "-179.9deg",
      },
    ],
    opacity: 0.03,
  },
});

export default Line;
