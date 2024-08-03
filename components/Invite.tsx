import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Invite = () => {
  return (
    <View style={styles.invite}>
      <Text style={[styles.invite1, styles.inviteTypo]}>Invite</Text>
      <Text style={[styles.selectInviteMethod, styles.inviteTypo]}>
        Select Invite Method
      </Text>
      <View style={[styles.inviteChild, styles.inviteLayout]} />
      <View style={[styles.inviteItem, styles.inviteLayout]} />
      <View style={[styles.inviteInner, styles.inviteInnerLayout]} />
      <Text style={[styles.messenger, styles.emailTypo]}>Messenger</Text>
      <View style={[styles.rectangleView, styles.inviteInnerLayout]} />
      <Text style={[styles.message, styles.emailTypo]}>Message</Text>
      <Image
        style={[styles.logoswhatsappIcon, styles.whatsappPosition]}
        contentFit="cover"
        source={require("../assets/logoswhatsappicon.png")}
      />
      <Text style={[styles.whatsapp, styles.whatsappPosition]}>Whatsapp</Text>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout2]}
        contentFit="cover"
        source={require("../assets/vector521.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition1]}
        contentFit="cover"
        source={require("../assets/vector53.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector54.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector55.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector56.png")}
      />
      <Image
        style={styles.vectorIcon5}
        contentFit="cover"
        source={require("../assets/vector57.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector58.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector59.png")}
      />
      <Image
        style={[styles.vectorIcon8, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector38.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inviteTypo: {
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  inviteLayout: {
    height: 44,
    backgroundColor: Color.colorGray_200,
    left: 1,
    position: "absolute",
    width: 360,
    borderRadius: Border.br_8xs,
  },
  inviteInnerLayout: {
    left: 0,
    height: 44,
    backgroundColor: Color.colorGray_200,
    position: "absolute",
    width: 360,
    borderRadius: Border.br_8xs,
  },
  emailTypo: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
  },
  whatsappPosition: {
    top: 161,
    position: "absolute",
  },
  vectorIconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "86.5%",
    top: "12.25%",
    width: "1.11%",
    height: "1.25%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition1: {
    left: "6.11%",
    right: "92.78%",
  },
  vectorIconPosition: {
    right: "93.89%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout1: {
    bottom: "87.38%",
    top: "11.88%",
    height: "0.75%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "1.11%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    height: "1.75%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  invite1: {
    top: 7,
    left: 161,
    fontSize: FontSize.size_smi,
  },
  selectInviteMethod: {
    top: 29,
    left: 112,
    fontSize: FontSize.size_sm,
    color: Color.colorGainsboro_100,
    opacity: 0.7,
  },
  inviteChild: {
    top: 82,
  },
  inviteItem: {
    top: 152,
  },
  inviteInner: {
    top: 222,
  },
  messenger: {
    top: 231,
    left: 35,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectangleView: {
    top: 292,
  },
  message: {
    top: 301,
    left: 34,
    position: "absolute",
  },
  logoswhatsappIcon: {
    left: 7,
    width: 17,
    height: 16,
    overflow: "hidden",
  },
  whatsapp: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    left: 35,
  },
  email: {
    top: 95,
    width: 43,
    height: 13,
    left: 35,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  vectorIcon: {
    left: "2.5%",
    right: "96.39%",
  },
  vectorIcon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "86.5%",
    top: "12.25%",
    width: "1.11%",
    height: "1.25%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon2: {
    height: "1%",
    top: "12.13%",
    bottom: "86.88%",
    left: "3.61%",
    width: "2.5%",
  },
  vectorIcon3: {
    left: "6.11%",
    right: "92.78%",
  },
  vectorIcon4: {
    left: "2.5%",
    right: "96.39%",
  },
  vectorIcon5: {
    height: "2%",
    top: "28.88%",
    bottom: "69.13%",
    left: "1.94%",
    width: "5.28%",
    right: "92.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon6: {
    height: "0.5%",
    width: "3.06%",
    top: "29.63%",
    bottom: "69.88%",
    left: "3.06%",
  },
  vectorIcon7: {
    top: "37.88%",
    right: "93.06%",
    bottom: "60.38%",
    left: "1.67%",
    width: "5.28%",
  },
  vectorIcon8: {
    top: "1.75%",
    right: "95%",
    bottom: "96.5%",
    width: "2.5%",
    left: "2.5%",
  },
  invite: {
    backgroundColor: Color.colorBlack,
    height: 800,
    overflow: "hidden",
    width: 360,
    borderRadius: Border.br_8xs,
  },
});

export default Invite;
