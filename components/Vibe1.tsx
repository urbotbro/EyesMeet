import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Vibe1 = () => {
  return (
    <View style={styles.vibe}>
      <View
        style={[
          styles.labellabelActivetrue,
          styles.labellabelActivetruePosition,
        ]}
      >
        <Image
          style={styles.vibeIcon}
          contentFit="cover"
          source={require("../assets/vibe.png")}
        />
      </View>
      <View
        style={[
          styles.labelnoLabelActivefalse,
          styles.labellabelActivetruePosition,
        ]}
      >
        <Image
          style={styles.vibeIcon}
          contentFit="cover"
          source={require("../assets/vibe2.png")}
        />
        <Text style={styles.vibe1}>Vibe</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labellabelActivetruePosition: {
    alignItems: "center",
    left: 20,
    position: "absolute",
    width: 44,
  },
  vibeIcon: {
    height: 28,
    width: 44,
  },
  labellabelActivetrue: {
    top: 20,
  },
  vibe1: {
    alignSelf: "stretch",
    fontSize: FontSize.size_smi,
    letterSpacing: 1,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelMedium,
    color: Color.colorGray_1000,
    textAlign: "center",
    marginTop: 11,
  },
  labelnoLabelActivefalse: {
    top: 88,
  },
  vibe: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 84,
    height: 163,
    overflow: "hidden",
  },
});

export default Vibe1;
