import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Frame3 = () => {
  return (
    <View style={styles.property1defaultParent}>
      <View style={[styles.property1default, styles.property1defaultLayout]}>
        <View style={styles.vectorParent}>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector48.png")}
          />
          <LinearGradient
            style={[styles.groupChild, styles.groupLayout]}
            locations={[0, 1]}
            colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
          />
          <LinearGradient
            style={[styles.groupItem, styles.groupLayout]}
            locations={[0, 1]}
            colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
          />
          <LinearGradient
            style={[styles.groupInner, styles.groupLayout]}
            locations={[0, 1]}
            colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector49.png")}
          />
          <Text style={[styles.saveMonents, styles.saveLayout]}>
            Save Monents
          </Text>
          <Text style={[styles.hideMoments, styles.hideLayout]}>
            Hide Moments
          </Text>
          <Text style={[styles.report, styles.reportLayout]}>Report</Text>
          <Image
            style={[styles.vectorIcon2, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector50.png")}
          />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector51.png")}
          />
        </View>
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <View style={styles.vectorParent}>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector48.png")}
          />
          <LinearGradient
            style={[styles.groupChild, styles.groupLayout]}
            locations={[0, 1]}
            colors={["#9872eb", "#e871c5"]}
          />
          <LinearGradient
            style={[styles.groupItem, styles.groupLayout]}
            locations={[0, 1]}
            colors={["#9872eb", "#e871c5"]}
          />
          <LinearGradient
            style={[styles.groupInner, styles.groupLayout]}
            locations={[0, 1]}
            colors={["#9872eb", "#e871c5"]}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.saveMonents1, styles.report1Typo]}>
            Save Monents
          </Text>
          <Text style={[styles.hideMoments1, styles.report1Typo]}>
            Hide Moments
          </Text>
          <Text style={[styles.report1, styles.report1Typo]}>Report</Text>
          <Image
            style={[styles.vectorIcon2, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1defaultLayout: {
    height: 60,
    width: 81,
    left: 20,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    backgroundColor: "transparent",
    height: 16,
    borderRadius: Border.br_3xs,
    left: 0,
    width: 81,
    position: "absolute",
  },
  vectorIconPosition: {
    left: "9.88%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  saveLayout: {
    height: 12,
    width: 68,
    left: 12,
    top: 9,
  },
  hideLayout: {
    width: 54,
    top: 27,
    height: 12,
    left: 20,
  },
  reportLayout: {
    height: 6,
    width: 26,
    left: 21,
    top: 48,
  },
  report1Typo: {
    color: Color.colorWhite,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  vectorIcon: {
    height: "6.67%",
    width: "23.46%",
    right: "6.17%",
    bottom: "93.33%",
    left: "70.37%",
    top: "0%",
  },
  groupChild: {
    top: 8,
  },
  groupItem: {
    top: 25,
  },
  groupInner: {
    top: 44,
  },
  vectorIcon1: {
    height: "15.33%",
    width: "10.49%",
    top: "17%",
    right: "79.63%",
    bottom: "67.67%",
  },
  saveMonents: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorGray_900,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  hideMoments: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorGray_900,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  report: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorGray_900,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  vectorIcon2: {
    height: "13.33%",
    width: "9.88%",
    top: "50%",
    right: "80.25%",
    bottom: "36.67%",
  },
  vectorIcon3: {
    height: "10%",
    width: "7.41%",
    top: "81.67%",
    right: "81.48%",
    bottom: "8.33%",
    left: "11.11%",
  },
  vectorParent: {
    height: "100%",
    width: "100%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  property1default: {
    top: 20,
  },
  saveMonents1: {
    height: 12,
    width: 68,
    left: 12,
    top: 9,
  },
  hideMoments1: {
    width: 54,
    top: 27,
    height: 12,
    left: 20,
  },
  report1: {
    height: 6,
    width: 26,
    left: 21,
    top: 48,
  },
  property1variant2: {
    top: 100,
  },
  property1defaultParent: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 121,
    height: 180,
    overflow: "hidden",
  },
});

export default Frame3;
