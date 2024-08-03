import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Fling1 = () => {
  return (
    <View style={styles.fling}>
      <View
        style={[
          styles.property1noLabelActivefa,
          styles.property1noLabelActivefaPosition,
        ]}
      >
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <Text style={styles.fling1}>Fling</Text>
      </View>
      <View
        style={[
          styles.property1labelActivetrue,
          styles.property1noLabelActivefaPosition,
        ]}
      >
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1noLabelActivefaPosition: {
    width: 36,
    left: 20,
    position: "absolute",
  },
  vectorIcon: {
    width: 35,
    height: 33,
  },
  fling1: {
    alignSelf: "stretch",
    fontSize: FontSize.size_smi,
    letterSpacing: 1,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelMedium,
    color: Color.colorGray_1000,
    textAlign: "center",
    marginTop: 8,
  },
  property1noLabelActivefa: {
    top: 107,
  },
  property1labelActivetrue: {
    top: 20,
  },
  fling: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 76,
    height: 184,
    overflow: "hidden",
  },
});

export default Fling1;
