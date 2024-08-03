import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Frame1 = () => {
  return (
    <View style={styles.property1defaultParent}>
      <View style={[styles.property1default, styles.property1defaultLayout]}>
        <View style={[styles.vectorParent, styles.vectorPosition]}>
          <Image
            style={[styles.vectorIcon, styles.vectorPosition]}
            contentFit="cover"
            source={require("../assets/vector62.png")}
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
          <LinearGradient
            style={[styles.rectangleLineargradient, styles.groupLayout]}
            locations={[0, 1]}
            colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
          />
          <Text style={[styles.sendMoney, styles.locationTypo]}>
            Send Money
          </Text>
          <Text style={[styles.icebreaker, styles.locationTypo]}>
            Icebreaker
          </Text>
          <Text style={[styles.location, styles.locationTypo]}>Location</Text>
          <Text style={[styles.virtualDate, styles.locationTypo]}>
            Virtual Date
          </Text>
        </View>
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <View style={[styles.vectorParent, styles.vectorPosition]}>
          <Image
            style={[styles.vectorIcon, styles.vectorPosition]}
            contentFit="cover"
            source={require("../assets/vector62.png")}
          />
          <LinearGradient
            style={[styles.groupChild1, styles.groupChildBorder]}
            locations={[0, 1]}
            colors={["#9872eb", "#e871c5"]}
          />
          <LinearGradient
            style={[styles.groupChild2, styles.groupChildBorder]}
            locations={[0, 1]}
            colors={["#9872eb", "#e871c5"]}
          />
          <LinearGradient
            style={[styles.groupChild3, styles.groupChildBorder]}
            locations={[0, 1]}
            colors={["#9872eb", "#e871c5"]}
          />
          <LinearGradient
            style={[styles.groupChild4, styles.groupChildBorder]}
            locations={[0, 1]}
            colors={["#9872eb", "#e871c5"]}
          />
          <Text style={[styles.sendMoney1, styles.location1Typo]}>
            Send Money
          </Text>
          <Text style={[styles.icebreaker1, styles.location1Typo]}>
            Icebreaker
          </Text>
          <Text style={[styles.location1, styles.location1Typo]}>Location</Text>
          <Text style={[styles.virtualDate1, styles.location1Typo]}>
            Virtual Date
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1defaultLayout: {
    height: 148,
    width: 118,
    left: 20,
    position: "absolute",
  },
  vectorPosition: {
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  groupLayout: {
    backgroundColor: "transparent",
    height: 27,
    borderColor: Color.colorMediumpurple_200,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 0,
    width: 118,
    position: "absolute",
    borderWidth: 1,
  },
  locationTypo: {
    textAlign: "center",
    color: Color.colorGray_900,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    left: 27,
    position: "absolute",
  },
  groupChildBorder: {
    borderColor: Color.colorMediumpurple_100,
    backgroundColor: "transparent",
    height: 27,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 0,
    width: 118,
    position: "absolute",
    borderWidth: 1,
  },
  location1Typo: {
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    left: 27,
    position: "absolute",
  },
  vectorIcon: {
    height: "14.86%",
    width: "16.95%",
    top: "85.14%",
    right: "83.05%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  groupChild: {
    top: 0,
  },
  groupItem: {
    top: 32,
  },
  groupInner: {
    top: 63,
  },
  rectangleLineargradient: {
    top: 95,
  },
  sendMoney: {
    top: 4,
  },
  icebreaker: {
    top: 38,
  },
  location: {
    top: 69,
  },
  virtualDate: {
    top: 100,
  },
  vectorParent: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
  },
  property1default: {
    top: 20,
  },
  groupChild1: {
    top: 0,
  },
  groupChild2: {
    top: 32,
  },
  groupChild3: {
    top: 63,
  },
  groupChild4: {
    top: 95,
  },
  sendMoney1: {
    top: 4,
  },
  icebreaker1: {
    top: 38,
  },
  location1: {
    top: 69,
  },
  virtualDate1: {
    top: 100,
  },
  property1variant2: {
    top: 188,
  },
  property1defaultParent: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    width: 158,
    height: 356,
    overflow: "hidden",
    borderWidth: 1,
  },
});

export default Frame1;
