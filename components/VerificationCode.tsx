import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const VerificationCode = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.verificationCode}>
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
        style={styles.verificationCodeHasContainer}
        onPress={() => navigation.navigate("Main1")}
      >
        <Text style={[styles.verificationCodeHasBeenSen, styles.submitTypo]}>
          Verification code has been sent to your phone
        </Text>
      </Pressable>
      <Pressable
        style={styles.lineParent}
        onPress={() => navigation.navigate("Main1")}
      >
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.phone, styles.codeTypo]}>Phone</Text>
        <Text style={[styles.code, styles.codeTypo]}>Code</Text>
        <Text style={[styles.enterCode, styles.enterCodeTypo]}>Enter Code</Text>
      </Pressable>
      <Text style={[styles.yourSmsShould, styles.enterCodeTypo]}>
        Your sms should arrive in 59 second(s).
      </Text>
      <Pressable
        style={[styles.verificationCodeInner, styles.innerLayout]}
        onPress={() => navigation.navigate("Homepage")}
      >
        <View style={[styles.groupInner, styles.innerLayout]} />
      </Pressable>
      <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  submitTypo: {
    textAlign: "center",
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
  codeTypo: {
    left: 11,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorGray_1100,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  enterCodeTypo: {
    color: Color.colorGray_1200,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  innerLayout: {
    height: 20,
    width: 71,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
    borderRadius: Border.br_8xs,
  },
  closeRemovebgPreview1: {
    left: -14,
    top: 3,
    width: 77,
    height: 59,
    position: "absolute",
  },
  verificationCodeHasBeenSen: {
    fontSize: FontSize.size_xl,
    width: 280,
    height: 22,
    color: Color.colorGray_1100,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
  },
  verificationCodeHasContainer: {
    top: 142,
    left: 33,
    position: "absolute",
  },
  groupChild: {
    top: 23,
  },
  groupItem: {
    top: 66,
  },
  phone: {
    fontSize: FontSize.size_base,
    top: 0,
  },
  code: {
    top: 36,
    fontSize: FontSize.size_base,
  },
  enterCode: {
    top: 33,
    left: 137,
    fontSize: FontSize.size_base,
  },
  lineParent: {
    top: 220,
    left: 9,
    width: 327,
    height: 66,
    position: "absolute",
  },
  yourSmsShould: {
    top: 299,
    fontSize: FontSize.size_mini,
    left: 33,
  },
  groupInner: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_100,
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    top: 0,
    borderStyle: "solid",
    left: 0,
    width: 71,
  },
  verificationCodeInner: {
    top: 348,
    left: 146,
  },
  submit: {
    top: 350,
    left: 165,
    fontSize: FontSize.size_4xs,
    color: Color.colorSilver,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  verificationCode: {
    backgroundColor: Color.colorBlack,
    width: 360,
    height: 800,
    overflow: "hidden",
    borderRadius: Border.br_8xs,
  },
});

export default VerificationCode;
