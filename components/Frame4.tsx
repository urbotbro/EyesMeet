import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Frame4 = () => {
  return (
    <View style={styles.property1defaultParent}>
      <View style={[styles.property1default, styles.property1defaultPosition]}>
        <View style={styles.profileForSignupWrapper}>
          <Image
            style={styles.profileForSignup}
            contentFit="cover"
            source={require("../assets/profile-for-signup.png")}
          />
        </View>
        <View style={styles.rectangleParent}>
          <View style={[styles.frameChild, styles.frameChildLayout]} />
          <View style={[styles.frameItem, styles.framePosition1]} />
          <View style={[styles.frameInner, styles.framePosition]} />
          <View style={[styles.rectangleView, styles.frameChild4Position]} />
          <Text style={[styles.takePhoto, styles.takePosition]}>
            Take photo
          </Text>
          <Text style={[styles.chooseAlbum, styles.choosePosition]}>
            Choose album
          </Text>
          <Text style={[styles.savePhoto, styles.savePosition]}>
            Save Photo
          </Text>
          <Text style={[styles.cancel, styles.cancelPosition]}>Cancel</Text>
        </View>
      </View>
      <View style={[styles.property1variant2, styles.property1defaultPosition]}>
        <View style={styles.profileForSignupContainer}>
          <Image
            style={styles.profileForSignup}
            contentFit="cover"
            source={require("../assets/profile-for-signup1.png")}
          />
        </View>
        <View style={styles.rectangleParent}>
          <View style={styles.frameChildLayout} />
          <View style={[styles.frameChild2, styles.framePosition1]} />
          <View style={styles.framePosition} />
          <View style={styles.frameChild4Position} />
          <Text style={[styles.takePhoto1, styles.photoTypo]}>Take photo</Text>
          <Text style={[styles.chooseAlbum1, styles.photoTypo]}>
            Choose album
          </Text>
          <Text style={[styles.savePhoto1, styles.photoTypo]}>Save Photo</Text>
          <Text style={[styles.cancel1, styles.photoTypo]}>Cancel</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1defaultPosition: {
    alignItems: "center",
    width: 126,
    left: 20,
    position: "absolute",
  },
  frameChildLayout: {
    zIndex: 0,
    height: 24,
    backgroundColor: Color.colorGray_100,
    alignSelf: "stretch",
    borderRadius: Border.br_8xs,
  },
  framePosition1: {
    marginTop: 2,
    zIndex: 1,
    height: 24,
    alignSelf: "stretch",
    borderRadius: Border.br_8xs,
  },
  framePosition: {
    zIndex: 2,
    marginTop: 2,
    height: 24,
    backgroundColor: Color.colorGray_100,
    alignSelf: "stretch",
    borderRadius: Border.br_8xs,
  },
  frameChild4Position: {
    zIndex: 3,
    marginTop: 2,
    height: 24,
    backgroundColor: Color.colorGray_100,
    alignSelf: "stretch",
    borderRadius: Border.br_8xs,
  },
  takePosition: {
    zIndex: 4,
    width: 69,
    left: 24,
    top: 5,
  },
  choosePosition: {
    zIndex: 5,
    width: 90,
    left: 13,
    top: 30,
  },
  savePosition: {
    zIndex: 6,
    width: 71,
    left: 23,
    top: 53,
  },
  cancelPosition: {
    zIndex: 7,
    width: 43,
    left: 37,
    top: 83,
  },
  photoTypo: {
    opacity: 0.8,
    height: 16,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  profileForSignup: {
    maxWidth: "100%",
    height: 54,
    width: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  profileForSignupWrapper: {
    padding: Padding.p_3xs,
    width: 75,
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
  rectangleView: {
    opacity: 0,
  },
  takePhoto: {
    height: 16,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    opacity: 0,
    position: "absolute",
  },
  chooseAlbum: {
    height: 16,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    opacity: 0,
    position: "absolute",
  },
  savePhoto: {
    height: 16,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    opacity: 0,
    position: "absolute",
  },
  cancel: {
    height: 16,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    opacity: 0,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 427,
    alignSelf: "stretch",
  },
  property1default: {
    top: 20,
  },
  profileForSignupContainer: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    opacity: 0,
    width: 75,
  },
  frameChild2: {
    backgroundColor: Color.colorGray_100,
    marginTop: 2,
    zIndex: 1,
  },
  takePhoto1: {
    zIndex: 4,
    width: 69,
    left: 24,
    top: 5,
  },
  chooseAlbum1: {
    zIndex: 5,
    width: 90,
    left: 13,
    top: 30,
  },
  savePhoto1: {
    zIndex: 6,
    width: 71,
    left: 23,
    top: 53,
  },
  cancel1: {
    zIndex: 7,
    width: 43,
    left: 37,
    top: 83,
  },
  property1variant2: {
    top: 643,
  },
  property1defaultParent: {
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 166,
    height: 1266,
    overflow: "hidden",
    borderRadius: Border.br_8xs,
  },
});

export default Frame4;
