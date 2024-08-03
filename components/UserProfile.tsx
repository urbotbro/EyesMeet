import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const UserProfile = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.userProfile}>
      <View style={[styles.userProfileChild, styles.userPosition]} />
      <Pressable
        style={styles.editContact}
        onPress={() => navigation.navigate("EditContact1")}
      >
        <Text
          style={[styles.editContact1, styles.textTypo]}
        >{`Edit Contact `}</Text>
      </Pressable>
      <Image
        style={styles.userProfileItem}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Text style={[styles.tomiokaGiyuu, styles.textTypo]}>Tomioka Giyuu</Text>
      <Text style={[styles.within40m, styles.distanceTypo]}>within 40m</Text>
      <Text style={[styles.distance, styles.distanceTypo]}>Distance :</Text>
      <Text style={[styles.region, styles.regionTypo]}>{`Region : `}</Text>
      <Text style={[styles.bangladesh, styles.regionTypo]}>Bangladesh</Text>
      <Pressable
        style={[styles.vector, styles.vectorLayout]}
        onPress={() => navigation.navigate("EditContact1")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/vector77.png")}
        />
      </Pressable>
      <View style={[styles.userProfileInner, styles.userPosition]} />
      <Pressable
        style={[styles.vector1, styles.vectorLayout]}
        onPress={() => navigation.navigate("UserMoments")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/vector77.png")}
        />
      </Pressable>
      <Text style={[styles.text, styles.textTypo]}>{` `}</Text>
      <Text style={[styles.justLivingThe, styles.peopleNearbyPosition]}>
        Just living the dream and sipping coffee ☕️.
      </Text>
      <Text style={[styles.whatsUp, styles.whatsUpTypo]}>what’s up</Text>
      <View style={[styles.rectangleView, styles.userPosition]} />
      <Pressable
        style={styles.moments}
        onPress={() => navigation.navigate("UserMoments")}
      >
        <Text style={[styles.editContact1, styles.textTypo]}>Moments</Text>
      </Pressable>
      <Text style={[styles.from, styles.fromTypo]}>From</Text>
      <Text style={[styles.peopleNearby, styles.fromTypo]}>People Nearby</Text>
      <Text style={[styles.sendGreeting, styles.textTypo]}>Send Greeting</Text>
      <Text style={[styles.report, styles.textTypo]}>Report</Text>
      <Pressable
        style={styles.vector2}
        onPress={() => navigation.navigate("Vibe")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector38.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  userPosition: {
    backgroundColor: Color.colorGray_200,
    left: 0,
    position: "absolute",
    width: 360,
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
  },
  distanceTypo: {
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_3xs,
    top: 54,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  regionTypo: {
    top: 65,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  vectorLayout: {
    height: 10,
    width: 5,
    left: 345,
    position: "absolute",
  },
  peopleNearbyPosition: {
    left: 74,
    opacity: 0.5,
  },
  whatsUpTypo: {
    top: 162,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.m3LabelMedium_size,
    position: "absolute",
  },
  fromTypo: {
    top: 283,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.m3LabelMedium_size,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  userProfileChild: {
    top: 0,
    height: 142,
  },
  editContact1: {
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.m3LabelMedium_size,
  },
  editContact: {
    top: 114,
    left: 4,
    position: "absolute",
  },
  userProfileItem: {
    top: 28,
    width: 60,
    height: 53,
    left: 4,
    position: "absolute",
  },
  tomiokaGiyuu: {
    top: 38,
    left: 66,
    fontSize: FontSize.size_mid,
    opacity: 0.9,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  within40m: {
    left: 119,
  },
  distance: {
    left: 68,
  },
  region: {
    left: 68,
  },
  bangladesh: {
    left: 112,
  },
  vector: {
    top: 121,
  },
  userProfileInner: {
    top: 145,
    height: 169,
  },
  vector1: {
    top: 238,
  },
  text: {
    top: 166,
    left: 109,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.m3LabelMedium_size,
    position: "absolute",
  },
  justLivingThe: {
    opacity: 0.5,
    top: 162,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.m3LabelMedium_size,
    position: "absolute",
  },
  whatsUp: {
    left: 4,
  },
  rectangleView: {
    top: 323,
    height: 42,
  },
  moments: {
    top: 230,
    left: 4,
    position: "absolute",
  },
  from: {
    left: 4,
  },
  peopleNearby: {
    opacity: 0.5,
    left: 74,
  },
  sendGreeting: {
    top: 336,
    left: 139,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.m3LabelMedium_size,
    position: "absolute",
  },
  report: {
    top: 768,
    left: 159,
    fontSize: FontSize.size_smi,
    opacity: 0.5,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  icon2: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector2: {
    left: "1.94%",
    top: "0.63%",
    right: "95.56%",
    bottom: "97.63%",
    width: "2.5%",
    height: "1.75%",
    position: "absolute",
  },
  userProfile: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorBlack,
    height: 800,
    overflow: "hidden",
    width: 360,
  },
});

export default UserProfile;
