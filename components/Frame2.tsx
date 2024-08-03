import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Frame2 = () => {
  return (
    <View style={styles.property1defaultParent}>
      <View style={[styles.property1default, styles.property1defaultLayout]}>
        <View style={styles.vectorParent}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector62.png")}
          />
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Image
            style={[styles.groupIcon, styles.groupIconPosition]}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Image
            style={[styles.vectorIcon1, styles.groupIconPosition]}
            contentFit="cover"
            source={require("../assets/vector63.png")}
          />
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Image
            style={[styles.groupIcon1, styles.groupIconPosition]}
            contentFit="cover"
            source={require("../assets/group1.png")}
          />
          <Text style={[styles.addContacts, styles.scanTypo]}>
            Add Contacts
          </Text>
          <Text style={[styles.scan, styles.scanTypo]}>Scan</Text>
          <Text style={[styles.money, styles.scanTypo]}>Money</Text>
        </View>
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <View style={styles.vectorParent}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector62.png")}
          />
          <View style={[styles.rectangleView, styles.groupChildBorder]} />
          <Image
            style={[styles.groupIcon, styles.groupIconPosition]}
            contentFit="cover"
            source={require("../assets/group2.png")}
          />
          <View style={[styles.groupChild1, styles.groupChildBorder]} />
          <Image
            style={[styles.vectorIcon1, styles.groupIconPosition]}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
          <View style={[styles.groupChild2, styles.groupChildBorder]} />
          <Image
            style={[styles.groupIcon1, styles.groupIconPosition]}
            contentFit="cover"
            source={require("../assets/group3.png")}
          />
          <Text style={[styles.addContacts1, styles.scan1Typo]}>
            Add Contacts
          </Text>
          <Text style={[styles.scan1, styles.scan1Typo]}>Scan</Text>
          <Text style={[styles.money1, styles.scan1Typo]}>Money</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1defaultLayout: {
    height: 117,
    width: 119,
    left: 20,
    position: "absolute",
  },
  groupLayout: {
    height: 27,
    width: 118,
    borderColor: Color.colorMediumpurple_200,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_800,
    borderRadius: Border.br_3xs,
    left: 0,
    position: "absolute",
    borderWidth: 1,
  },
  groupIconPosition: {
    left: "7.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  scanTypo: {
    textAlign: "center",
    color: Color.colorGray_900,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    left: 23,
    position: "absolute",
  },
  groupChildBorder: {
    borderColor: Color.colorMediumpurple_100,
    backgroundColor: Color.colorGray_200,
    height: 27,
    width: 118,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 0,
    position: "absolute",
    borderWidth: 1,
  },
  scan1Typo: {
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    left: 23,
    position: "absolute",
  },
  vectorIcon: {
    height: "18.8%",
    width: "16.81%",
    bottom: "81.2%",
    left: "83.19%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    top: 27,
  },
  groupIcon: {
    height: "8.55%",
    top: "29.91%",
    bottom: "61.54%",
    right: "84.87%",
    width: "7.56%",
    left: "7.56%",
  },
  groupItem: {
    top: 59,
  },
  vectorIcon1: {
    height: "7.69%",
    top: "58.12%",
    bottom: "34.19%",
    right: "84.87%",
    width: "7.56%",
    left: "7.56%",
  },
  groupInner: {
    top: 90,
  },
  groupIcon1: {
    height: "8.97%",
    width: "8.15%",
    top: "83.76%",
    right: "84.29%",
    bottom: "7.26%",
  },
  addContacts: {
    top: 32,
  },
  scan: {
    top: 64,
  },
  money: {
    top: 95,
  },
  vectorParent: {
    height: "100%",
    width: "100%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  property1default: {
    top: 20,
  },
  rectangleView: {
    top: 27,
  },
  groupChild1: {
    top: 59,
  },
  groupChild2: {
    top: 90,
  },
  addContacts1: {
    top: 32,
  },
  scan1: {
    top: 64,
  },
  money1: {
    top: 95,
  },
  property1variant2: {
    top: 157,
  },
  property1defaultParent: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    width: 159,
    height: 294,
    overflow: "hidden",
    borderWidth: 1,
  },
});

export default Frame2;
