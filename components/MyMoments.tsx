import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const MyMoments = () => {
  return (
    <View style={styles.myMoments}>
      <Image
        style={styles.myMomentsChild}
        contentFit="cover"
        source={require("../assets/rectangle-169.png")}
      />
      <Image
        style={styles.myMomentsItem}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Text style={styles.text}>{`     `}</Text>
      <Text style={[styles.justLivingThe, styles.augTypo]}>
        Just living the dream and sipping coffee ☕️.
      </Text>
      <Image
        style={styles.myMomentsInner}
        contentFit="cover"
        source={require("../assets/ellipse-48.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector78.png")}
      />
      <Text style={[styles.text1, styles.augTypo]}>01</Text>
      <Text style={[styles.aug, styles.augTypo]}>Aug</Text>
      <Text style={styles.takePhotoTo}>Take Photo to recod your life</Text>
      <Text style={[styles.moments, styles.statusTypo]}>Moments</Text>
      <Text style={[styles.status, styles.statusTypo]}>Status</Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.myMomentsChild1, styles.lineViewLayout]} />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector79.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  augTypo: {
    opacity: 0.5,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  statusTypo: {
    opacity: 0.7,
    top: 10,
    textAlign: "left",
    lineHeight: 10,
    fontSize: FontSize.size_4xs,
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    letterSpacing: 1,
    position: "absolute",
  },
  lineViewLayout: {
    opacity: 0.2,
    height: 1,
    width: 14,
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    top: 557,
    position: "absolute",
  },
  myMomentsChild: {
    top: 46,
    left: 0,
    height: 256,
    position: "absolute",
    width: 360,
  },
  myMomentsItem: {
    top: 275,
    left: 282,
    width: 60,
    height: 53,
    position: "absolute",
  },
  text: {
    top: 288,
    left: 222,
    fontSize: FontSize.size_mid,
    opacity: 0.9,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  justLivingThe: {
    top: 329,
    left: 119,
    width: 240,
    height: 14,
    fontSize: FontSize.size_3xs,
    opacity: 0.5,
  },
  myMomentsInner: {
    top: 433,
    left: 38,
    width: 42,
    height: 40,
    position: "absolute",
  },
  vectorIcon: {
    height: "1.75%",
    width: "4.44%",
    top: "55.75%",
    right: "81.39%",
    bottom: "42.5%",
    left: "14.17%",
  },
  text1: {
    top: 439,
    left: 4,
    fontSize: FontSize.size_3xs,
    opacity: 0.5,
  },
  aug: {
    top: 440,
    left: 10,
    fontSize: FontSize.size_6xs,
    width: 26,
    height: 16,
  },
  takePhotoTo: {
    top: 443,
    left: 100,
    display: "flex",
    alignItems: "center",
    width: 109,
    height: 17,
    textAlign: "left",
    lineHeight: 10,
    fontSize: FontSize.size_4xs,
    opacity: 0.5,
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    letterSpacing: 1,
    position: "absolute",
  },
  moments: {
    left: 103,
  },
  status: {
    left: 173,
  },
  lineView: {
    left: 189,
  },
  myMomentsChild1: {
    left: 171,
  },
  vectorIcon1: {
    height: "0.25%",
    width: "0.56%",
    top: "69.38%",
    right: "48.06%",
    bottom: "30.38%",
    left: "51.39%",
  },
  myMoments: {
    backgroundColor: Color.colorBlack,
    height: 800,
    overflow: "hidden",
    width: 360,
  },
});

export default MyMoments;
