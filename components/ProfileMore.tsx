import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ProfileMore = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.profileMore}>
      <View style={styles.profileMoreChild} />
      <Text style={styles.gender}>Gender</Text>
      <Text style={[styles.region, styles.regionTypo]}>Region</Text>
      <Text style={[styles.whatsUp, styles.regionTypo]}>What’s Up</Text>
      <Text style={[styles.male, styles.maleTypo]}>Male</Text>
      <Text style={[styles.bangladesh, styles.maleTypo]}>Bangladesh</Text>
      <Text style={[styles.justLivingThe, styles.maleTypo]}>
        Just living the dream and sipping coffee ☕️.
      </Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector76.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector76.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector76.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  regionTypo: {
    left: 6,
    opacity: 0.8,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.m3LabelMedium_size,
    position: "absolute",
  },
  maleTypo: {
    opacity: 0.7,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 10,
    width: 5,
    left: 349,
    position: "absolute",
  },
  profileMoreChild: {
    top: 65,
    left: 0,
    backgroundColor: Color.colorGray_300,
    height: 91,
    position: "absolute",
    width: 360,
  },
  gender: {
    left: 5,
    opacity: 0.8,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.m3LabelMedium_size,
    top: 81,
    position: "absolute",
  },
  region: {
    top: 108,
  },
  whatsUp: {
    top: 135,
  },
  male: {
    top: 77,
    left: 315,
    fontSize: FontSize.m3LabelSmall_size,
    opacity: 0.7,
  },
  bangladesh: {
    top: 103,
    left: 278,
    fontSize: FontSize.m3LabelSmall_size,
    opacity: 0.7,
  },
  justLivingThe: {
    top: 131,
    left: 120,
    fontSize: FontSize.size_3xs,
    width: 222,
  },
  vectorIcon: {
    top: 81,
    height: 10,
    width: 5,
    left: 349,
  },
  vectorIcon1: {
    top: 106,
  },
  vectorIcon2: {
    top: 133,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "2.5%",
    top: "1.5%",
    right: "95.28%",
    bottom: "96.63%",
    width: "2.22%",
    height: "1.88%",
    position: "absolute",
  },
  profileMore: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorBlack,
    height: 800,
    overflow: "hidden",
    width: 360,
  },
});

export default ProfileMore;
