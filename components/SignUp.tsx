import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.signUp}>
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
      <Text style={styles.signUpWith}>Sign Up With Mobile</Text>
      <Text style={styles.text}>{` `}</Text>
      <Text style={styles.text1}>{` `}</Text>
      <View style={styles.ellipseParent}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Text style={[styles.iHaveRead, styles.iHaveReadTypo]}>
          i have read and accept the Terms of service The information collected
          on this page is only used for account registration.
        </Text>
      </View>
      <Pressable
        style={styles.signUpInner}
        onPress={() => navigation.navigate("VerificationCode")}
      >
        <View style={styles.groupItem} />
      </Pressable>
      <View style={[styles.signUpChild, styles.signInnerLayout]}>
        <View style={[styles.lineParent, styles.signInnerLayout]}>
          <View style={[styles.groupInner, styles.lineViewLayout]} />
          <View style={[styles.lineView, styles.lineViewLayout]} />
          <Text style={styles.fullName}>Full Name</Text>
          <Text style={styles.enterIkhtiarUddin}>
            Enter ikhtiar uddin mohammad bin bakhtiar khilji
          </Text>
        </View>
      </View>
      <View style={[styles.frameView, styles.signInnerLayout]}>
        <View style={[styles.lineParent, styles.signInnerLayout]}>
          <View style={[styles.groupInner, styles.lineViewLayout]} />
          <View style={[styles.lineView, styles.lineViewLayout]} />
          <Text style={styles.fullName}>Region</Text>
          <Text style={styles.enterIkhtiarUddin}>Bangladesh</Text>
        </View>
      </View>
      <View style={[styles.signUpInner1, styles.signInnerLayout]}>
        <View style={[styles.lineParent, styles.signInnerLayout]}>
          <View style={[styles.groupInner, styles.lineViewLayout]} />
          <View style={[styles.lineView, styles.lineViewLayout]} />
          <Text style={styles.fullName}>Phone</Text>
          <Text style={styles.enterIkhtiarUddin}>+880 Mobile number</Text>
        </View>
      </View>
      <View style={[styles.signUpInner2, styles.signInnerLayout]}>
        <View style={[styles.lineParent, styles.signInnerLayout]}>
          <View style={[styles.groupInner, styles.lineViewLayout]} />
          <View style={[styles.lineView, styles.lineViewLayout]} />
          <Text style={styles.fullName}>Password</Text>
          <Text style={styles.enterIkhtiarUddin}>Set a password</Text>
        </View>
      </View>
      <Text
        style={[styles.acceptContinue, styles.iHaveReadTypo]}
      >{`Accept & Continue        `}</Text>
      <View style={[styles.rectangleParent, styles.parentLayout]}>
        <View style={styles.childLayout} />
        <View style={[styles.instanceItem, styles.itemPosition]} />
        <View style={styles.innerPosition} />
        <View style={styles.frameChild1Position} />
        <Text style={[styles.takePhoto, styles.takePosition]}>Take photo</Text>
        <Text style={[styles.chooseAlbum, styles.choosePosition]}>
          Choose album
        </Text>
        <Text style={[styles.savePhoto, styles.savePosition]}>Save Photo</Text>
        <Text style={[styles.cancel, styles.cancelPosition]}>Cancel</Text>
      </View>
      <View style={[styles.frameParent, styles.parentLayout]}>
        <View style={styles.profileForSignupWrapper}>
          <Image
            style={styles.profileForSignup}
            contentFit="cover"
            source={require("../assets/profile-for-signup.png")}
          />
        </View>
        <View style={styles.rectangleGroup}>
          <View style={[styles.frameChild, styles.childLayout]} />
          <View style={[styles.frameItem, styles.itemPosition]} />
          <View style={[styles.frameInner, styles.innerPosition]} />
          <View style={[styles.frameChild1, styles.frameChild1Position]} />
          <Text style={[styles.takePhoto1, styles.takePosition]}>
            Take photo
          </Text>
          <Text style={[styles.chooseAlbum1, styles.choosePosition]}>
            Choose album
          </Text>
          <Text style={[styles.savePhoto1, styles.savePosition]}>
            Save Photo
          </Text>
          <Text style={[styles.cancel1, styles.cancelPosition]}>Cancel</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iHaveReadTypo: {
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  signInnerLayout: {
    height: 24,
    width: 336,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 328,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray_300,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  parentLayout: {
    width: 126,
    position: "absolute",
  },
  itemPosition: {
    marginTop: 2,
    zIndex: 1,
    alignSelf: "stretch",
    height: 24,
    borderRadius: Border.br_8xs,
  },
  takePosition: {
    zIndex: 4,
    height: 16,
    width: 69,
    fontSize: FontSize.size_smi,
    left: 24,
    top: 5,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  choosePosition: {
    zIndex: 5,
    width: 90,
    left: 13,
    top: 30,
    height: 16,
    fontSize: FontSize.size_smi,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  savePosition: {
    zIndex: 6,
    width: 71,
    left: 23,
    top: 53,
    height: 16,
    fontSize: FontSize.size_smi,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  cancelPosition: {
    zIndex: 7,
    width: 43,
    top: 83,
    height: 16,
    fontSize: FontSize.size_smi,
    left: 37,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  childLayout: {
    zIndex: 0,
    backgroundColor: Color.colorGray_100,
    alignSelf: "stretch",
    height: 24,
    borderRadius: Border.br_8xs,
  },
  innerPosition: {
    zIndex: 2,
    marginTop: 2,
    backgroundColor: Color.colorGray_100,
    alignSelf: "stretch",
    height: 24,
    borderRadius: Border.br_8xs,
  },
  frameChild1Position: {
    zIndex: 3,
    marginTop: 2,
    backgroundColor: Color.colorGray_100,
    alignSelf: "stretch",
    height: 24,
    borderRadius: Border.br_8xs,
  },
  icon: {
    height: "100%",
    width: "100%",
    borderRadius: Border.br_8xs,
  },
  closeRemovebgPreview1: {
    left: -19,
    width: 77,
    height: 59,
    top: 0,
    position: "absolute",
  },
  signUpWith: {
    top: 165,
    left: 88,
    fontSize: FontSize.size_xl,
    color: "rgba(217, 217, 217, 0.9)",
    width: 192,
    height: 27,
    textAlign: "left",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  text: {
    top: 532,
    left: 34,
    color: Color.colorWhite,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  text1: {
    top: 537,
    left: 37,
    color: Color.colorWhite,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  groupChild: {
    top: 3,
    width: 14,
    height: 13,
    left: 0,
    position: "absolute",
  },
  iHaveRead: {
    width: 307,
    opacity: 0.5,
    color: Color.colorGray_1200,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    left: 11,
    height: 50,
    top: 0,
  },
  ellipseParent: {
    top: 447,
    left: 20,
    width: 318,
    height: 50,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_100,
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    borderStyle: "solid",
    height: 29,
    width: 123,
    left: 0,
    top: 0,
    position: "absolute",
  },
  signUpInner: {
    top: 516,
    left: 105,
    height: 29,
    width: 123,
    position: "absolute",
  },
  groupInner: {
    top: 0,
  },
  lineView: {
    top: 24,
  },
  fullName: {
    left: 6,
    color: Color.colorGainsboro_100,
    opacity: 0.9,
    top: 5,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  enterIkhtiarUddin: {
    top: 6,
    left: 84,
    width: 252,
    height: 18,
    color: Color.colorGray_1200,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  lineParent: {
    left: 0,
    top: 0,
  },
  signUpChild: {
    top: 265,
    left: 12,
    width: 336,
  },
  frameView: {
    top: 308,
    left: 12,
    width: 336,
  },
  signUpInner1: {
    top: 349,
    left: 12,
    width: 336,
  },
  signUpInner2: {
    top: 386,
    left: 11,
    width: 336,
  },
  acceptContinue: {
    top: 523,
    left: 123,
    fontSize: FontSize.size_4xs,
    color: Color.colorSilver,
  },
  instanceItem: {
    backgroundColor: Color.colorGray_100,
    zIndex: 1,
  },
  takePhoto: {
    opacity: 0.8,
  },
  chooseAlbum: {
    opacity: 0.8,
  },
  savePhoto: {
    opacity: 0.8,
  },
  cancel: {
    opacity: 0.8,
  },
  rectangleParent: {
    top: 688,
    left: 117,
    opacity: 0,
  },
  profileForSignup: {
    maxWidth: "100%",
    height: 54,
    alignSelf: "stretch",
    width: "100%",
    overflow: "hidden",
  },
  profileForSignupWrapper: {
    width: 75,
    padding: Padding.p_3xs,
  },
  frameChild: {
    opacity: 0,
  },
  frameItem: {
    backgroundColor: Color.colorGray_1300,
  },
  frameInner: {
    opacity: 0,
  },
  frameChild1: {
    opacity: 0,
  },
  takePhoto1: {
    opacity: 0,
  },
  chooseAlbum1: {
    opacity: 0,
  },
  savePhoto1: {
    opacity: 0,
  },
  cancel1: {
    opacity: 0,
  },
  rectangleGroup: {
    marginTop: 427,
    alignSelf: "stretch",
  },
  frameParent: {
    top: 182,
    left: 116,
    alignItems: "center",
  },
  signUp: {
    backgroundColor: Color.colorBlack,
    width: 360,
    height: 800,
    overflow: "hidden",
    borderRadius: Border.br_8xs,
  },
});

export default SignUp;
