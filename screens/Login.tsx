import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.login}>
      <Pressable
        style={styles.closeRemovebgPreview1}
        onPress={() => navigation.navigate("Main1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/closeremovebgpreview-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.loginViaMobileContainer}
        numberOfLines={1}
        onPress={() => navigation.navigate("Main1")}
      >
        <Text style={[styles.loginViaMobileNumber, styles.mobileTypo]}>
          Login via Mobile Number
        </Text>
      </Pressable>
      <Text style={[styles.changeLogIn, styles.mobileTypo]} numberOfLines={1}>
        Change Log In Method
      </Text>
      <View style={styles.lineParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.region, styles.phoneTypo]}>Region</Text>
        <Text style={[styles.phone, styles.phoneTypo]}>Phone</Text>
        <Text style={[styles.bangladesh, styles.textTypo]}>Bangladesh</Text>
        <Image
          style={styles.grayArrowIconOnWhite260nw}
          contentFit="cover"
          source={require("../assets/grayarrowicononwhite260nw1472018798ezgifcomwebptojpgconverterremovebgpreview-1.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>+880</Text>
        <Text style={[styles.mobileNumber, styles.unableToLogTypo1]}>
          Mobile Number
        </Text>
      </View>
      <Text style={[styles.theAboveMobile, styles.unableToLogTypo]}>
        The above mobile number is only used for login verification
      </Text>
      <Text style={[styles.unableToLog, styles.unableToLogTypo]}>
        Unable to Log In?
      </Text>
      <Text style={[styles.i, styles.iLayout]}>I</Text>
      <Text style={[styles.moreOptions, styles.iTypo]}>More Options</Text>
      <Text
        style={[styles.acceptContinue, styles.unableToLogTypo]}
      >{`Accept & Continue        `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mobileTypo: {
    textAlign: "left",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
  },
  groupLayout: {
    height: 1,
    width: 328,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray_300,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  phoneTypo: {
    color: Color.colorWhite,
    left: 10,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  textTypo: {
    left: 114,
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  unableToLogTypo1: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_1200,
  },
  unableToLogTypo: {
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  iLayout: {
    height: 29,
    position: "absolute",
  },
  iTypo: {
    top: 759,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
  },
  icon: {
    width: "100%",
    height: "100%",
    borderRadius: Border.br_8xs,
  },
  closeRemovebgPreview1: {
    left: -16,
    top: 2,
    width: 77,
    height: 59,
    position: "absolute",
  },
  loginViaMobileNumber: {
    fontSize: FontSize.size_xl,
    color: Color.colorGray_1100,
  },
  loginViaMobileContainer: {
    left: 62,
    top: 132,
    position: "absolute",
  },
  changeLogIn: {
    top: 285,
    left: 26,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    width: 328,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray_300,
  },
  groupItem: {
    top: 40,
  },
  groupInner: {
    top: 77,
  },
  region: {
    top: 10,
  },
  phone: {
    top: 51,
  },
  bangladesh: {
    top: 10,
  },
  grayArrowIconOnWhite260nw: {
    top: 12,
    left: 312,
    width: 15,
    height: 14,
    position: "absolute",
  },
  text: {
    top: 49,
  },
  mobileNumber: {
    top: 50,
    left: 157,
    color: Color.colorGray_1200,
    textAlign: "left",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  lineParent: {
    top: 195,
    left: 16,
    width: 327,
    height: 77,
    position: "absolute",
  },
  theAboveMobile: {
    top: 486,
    left: -7,
    width: 378,
    height: 18,
    color: Color.colorGray_1200,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  unableToLog: {
    top: 758,
    left: 77,
    color: Color.colorGray_1200,
    fontSize: FontSize.size_smi,
  },
  i: {
    left: 178,
    fontSize: FontSize.size_base,
    color: "rgba(255, 255, 255, 0.2)",
    width: 25,
    top: 759,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
  },
  moreOptions: {
    left: 198,
    color: Color.colorGray_1200,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  acceptContinue: {
    top: 542,
    left: 146,
    fontSize: FontSize.size_4xs,
    color: Color.colorSilver,
  },
  login: {
    backgroundColor: Color.colorBlack,
    width: 360,
    height: 800,
    overflow: "hidden",
    borderRadius: Border.br_8xs,
  },
});

export default Login;
