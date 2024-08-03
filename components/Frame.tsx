import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.property1defaultParent}>
      <View style={[styles.property1default, styles.property1variantLayout]}>
        <View style={[styles.lineParent, styles.linePosition]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.fullName, styles.fullTypo]}>Full Name</Text>
          <Text style={styles.enterIkhtiarUddin}>
            Enter ikhtiar uddin mohammad bin bakhtiar khilji
          </Text>
        </View>
      </View>
      <View style={[styles.property1variant2, styles.property1variantLayout]}>
        <View style={[styles.lineGroup, styles.linePosition]}>
          <View style={[styles.groupInner, styles.lineViewBorder]} />
          <View style={[styles.lineView, styles.lineViewBorder]} />
          <Text style={styles.fullTypo}>Full Name</Text>
        </View>
        <View style={[styles.property1variant2Child, styles.childPosition]} />
      </View>
      <View style={[styles.property1variant3, styles.property1variantLayout]}>
        <View style={[styles.lineGroup, styles.linePosition]}>
          <View style={[styles.groupInner, styles.lineViewBorder]} />
          <View style={[styles.lineView, styles.lineViewBorder]} />
          <Text style={styles.fullTypo}>Full Name</Text>
        </View>
        <View style={[styles.property1variant3Child, styles.childPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1variantLayout: {
    height: 24,
    left: 20,
    position: "absolute",
    width: 336,
  },
  linePosition: {
    left: 0,
    top: 0,
    height: 24,
    position: "absolute",
  },
  groupLayout: {
    height: 1,
    width: 328,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray_300,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  fullTypo: {
    opacity: 0.9,
    fontSize: FontSize.size_sm,
    left: 6,
    top: 5,
    textAlign: "left",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  lineViewBorder: {
    borderColor: Color.colorOrchid_100,
    height: 1,
    width: 328,
    borderTopWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  childPosition: {
    height: 13,
    width: 1,
    borderRightWidth: 1,
    left: 85,
    top: 7,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChild: {
    top: 0,
  },
  groupItem: {
    top: 24,
  },
  fullName: {
    color: Color.colorGainsboro_100,
  },
  enterIkhtiarUddin: {
    top: 6,
    left: 84,
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_1200,
    width: 252,
    height: 18,
    textAlign: "left",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  lineParent: {
    width: 336,
    left: 0,
  },
  property1default: {
    top: 20,
  },
  groupInner: {
    top: 0,
  },
  lineView: {
    top: 24,
  },
  lineGroup: {
    width: 327,
  },
  property1variant2Child: {
    borderColor: "#da69c3",
  },
  property1variant2: {
    top: 64,
  },
  property1variant3Child: {
    borderColor: "rgba(218, 105, 195, 0)",
  },
  property1variant3: {
    top: 108,
  },
  property1defaultParent: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 376,
    height: 196,
    overflow: "hidden",
  },
});

export default Frame;
