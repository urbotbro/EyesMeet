import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Me1 = () => {
  return (
    <View style={styles.me}>
      <View
        style={[styles.labeldefaultActivetrue, styles.labeldefaultPosition]}
      >
        <Image
          style={styles.meIcon}
          contentFit="cover"
          source={require("../assets/me1.png")}
        />
      </View>
      <View
        style={[styles.labeldefaultActivefalse, styles.labeldefaultPosition]}
      >
        <Image
          style={styles.meIcon}
          contentFit="cover"
          source={require("../assets/me.png")}
        />
        <Text style={styles.me1}>Me</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labeldefaultPosition: {
    alignItems: "center",
    left: 20,
    position: "absolute",
    width: 35,
  },
  meIcon: {
    height: 30,
    width: 35,
  },
  labeldefaultActivetrue: {
    top: 20,
  },
  me1: {
    alignSelf: "stretch",
    fontSize: FontSize.size_smi,
    letterSpacing: 1,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelMedium,
    color: Color.colorGray_1000,
    textAlign: "center",
    marginTop: 10,
  },
  labeldefaultActivefalse: {
    top: 129,
  },
  me: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 75,
    height: 205,
    overflow: "hidden",
  },
});

export default Me1;
