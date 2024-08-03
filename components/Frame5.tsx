import * as React from "react";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Frame5 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.componentChild} />
      <View style={[styles.componentItem, styles.componentLayout]} />
      <View style={[styles.componentInner, styles.componentLayout]} />
      <View style={[styles.rectangleView, styles.componentLayout]} />
      <Text style={[styles.takePhoto, styles.photoTypo]}>Take photo</Text>
      <Text style={[styles.chooseAlbum, styles.photoTypo]}>Choose album</Text>
      <Text style={[styles.savePhoto, styles.photoTypo]}>Save Photo</Text>
      <Text style={[styles.cancel, styles.photoTypo]}>Cancel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  componentLayout: {
    marginTop: 2,
    height: 24,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_8xs,
    alignSelf: "stretch",
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
  componentChild: {
    zIndex: 0,
    height: 24,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_8xs,
    alignSelf: "stretch",
  },
  componentItem: {
    zIndex: 1,
  },
  componentInner: {
    zIndex: 2,
  },
  rectangleView: {
    zIndex: 3,
  },
  takePhoto: {
    top: 5,
    left: 24,
    width: 69,
    zIndex: 4,
  },
  chooseAlbum: {
    top: 30,
    left: 13,
    width: 90,
    zIndex: 5,
  },
  savePhoto: {
    top: 53,
    left: 23,
    width: 71,
    zIndex: 6,
  },
  cancel: {
    top: 83,
    left: 37,
    width: 43,
    zIndex: 7,
  },
  rectangleParent: {
    width: 126,
  },
});

export default Frame5;
