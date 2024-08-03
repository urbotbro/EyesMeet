import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Component2 = () => {
  return (
    <View style={styles.component1}>
      <View style={[styles.component1Inner, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
      </View>
      <Image
        style={styles.navIcon}
        contentFit="cover"
        source={require("../assets/nav.png")}
      />
      <View style={styles.fling}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector41.png")}
        />
        <Text style={[styles.fling1, styles.me1Typo]}>Fling</Text>
      </View>
      <View style={styles.vibe}>
        <Image
          style={styles.vibeIcon}
          contentFit="cover"
          source={require("../assets/vibe1.png")}
        />
        <Text style={[styles.vibe1, styles.me1Typo]}>Vibe</Text>
      </View>
      <View style={styles.me}>
        <Image
          style={styles.meIcon}
          contentFit="cover"
          source={require("../assets/me.png")}
        />
        <Text style={[styles.me1, styles.me1Typo]}>Me</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 68,
    width: 360,
  },
  me1Typo: {
    textAlign: "center",
    color: Color.colorGray_1000,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    alignSelf: "stretch",
  },
  groupChild: {
    backgroundColor: Color.colorGray_200,
  },
  component1Inner: {
    zIndex: 0,
  },
  navIcon: {
    width: 37,
    height: 37,
    zIndex: 1,
    marginLeft: 63,
  },
  vectorIcon: {
    height: 33,
    width: 35,
  },
  fling1: {
    marginTop: 8,
  },
  fling: {
    width: 36,
    zIndex: 2,
    marginLeft: 63,
  },
  vibeIcon: {
    height: 28,
    width: 44,
  },
  vibe1: {
    marginTop: 11,
  },
  vibe: {
    zIndex: 3,
    width: 44,
    marginLeft: 63,
    alignItems: "center",
  },
  meIcon: {
    height: 30,
    width: 35,
  },
  me1: {
    marginTop: 10,
  },
  me: {
    zIndex: 4,
    width: 35,
    marginLeft: 63,
    alignItems: "center",
  },
  component1: {
    flexDirection: "row",
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: 0,
    alignItems: "center",
    height: 68,
    width: 360,
  },
});

export default Component2;
