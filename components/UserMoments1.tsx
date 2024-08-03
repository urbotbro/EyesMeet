import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const UserMoments1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.userMoments}>
      <Image
        style={styles.userMomentsChild}
        contentFit="cover"
        source={require("../assets/rectangle-169.png")}
      />
      <Image
        style={styles.userMomentsItem}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Text style={[styles.tomiokaGiyuu, styles.augFlexBox]}>
        Tomioka Giyuu
      </Text>
      <Text style={[styles.justLivingThe, styles.augTypo]}>
        Just living the dream and sipping coffee ☕️.
      </Text>
      <Image
        style={styles.userMomentsInner}
        contentFit="cover"
        source={require("../assets/ellipse-48.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector78.png")}
      />
      <Text style={[styles.text, styles.augTypo]}>01</Text>
      <Text style={[styles.aug, styles.augTypo]}>Aug</Text>
      <Text style={[styles.takePhotoTo, styles.augTypo]}>
        Take Photo to recod your life
      </Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.userMomentsChild1, styles.lineViewLayout]} />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector79.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Vibe")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  augFlexBox: {
    textAlign: "center",
    lineHeight: 16,
  },
  augTypo: {
    opacity: 0.5,
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    letterSpacing: 1,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  lineViewLayout: {
    opacity: 0.2,
    height: 1,
    width: 14,
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    top: 561,
    position: "absolute",
  },
  userMomentsChild: {
    top: 0,
    left: 0,
    height: 256,
    position: "absolute",
    width: 360,
  },
  userMomentsItem: {
    top: 232,
    left: 290,
    width: 60,
    height: 53,
    position: "absolute",
  },
  tomiokaGiyuu: {
    top: 245,
    left: 166,
    fontSize: FontSize.size_mid,
    opacity: 0.9,
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    letterSpacing: 1,
    textAlign: "center",
    lineHeight: 16,
    position: "absolute",
  },
  justLivingThe: {
    top: 286,
    left: 123,
    width: 240,
    height: 14,
    fontSize: FontSize.size_3xs,
    opacity: 0.5,
    textAlign: "center",
    lineHeight: 16,
  },
  userMomentsInner: {
    top: 382,
    left: 42,
    width: 42,
    height: 40,
    position: "absolute",
  },
  vectorIcon: {
    height: "1.75%",
    width: "4.44%",
    top: "49.38%",
    right: "80.28%",
    bottom: "48.88%",
    left: "15.28%",
    position: "absolute",
  },
  text: {
    top: 388,
    left: 8,
    fontSize: FontSize.size_3xs,
    opacity: 0.5,
    textAlign: "center",
    lineHeight: 16,
  },
  aug: {
    top: 389,
    left: 14,
    fontSize: FontSize.size_6xs,
    width: 26,
    height: 16,
    textAlign: "center",
    lineHeight: 16,
    opacity: 0.5,
  },
  takePhotoTo: {
    top: 392,
    left: 104,
    fontSize: FontSize.size_4xs,
    lineHeight: 10,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 109,
    height: 17,
  },
  lineView: {
    left: 193,
  },
  userMomentsChild1: {
    left: 175,
  },
  vectorIcon1: {
    height: "0.25%",
    width: "0.56%",
    top: "69.88%",
    right: "46.94%",
    bottom: "29.88%",
    left: "52.5%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "1.67%",
    top: "1.13%",
    right: "96.11%",
    bottom: "97%",
    width: "2.22%",
    height: "1.88%",
    position: "absolute",
  },
  userMoments: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorBlack,
    height: 800,
    overflow: "hidden",
    width: 360,
  },
});

export default UserMoments1;
