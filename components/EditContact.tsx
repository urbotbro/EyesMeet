import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const EditContact = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.editContact}>
      <Pressable
        style={[styles.vector, styles.vectorLayout]}
        onPress={() => navigation.navigate("PayAndService1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
      </Pressable>
      <LinearGradient
        style={styles.editContactChild}
        locations={[0, 1]}
        colors={["#9872eb", "#e871c5"]}
      />
      <Text style={[styles.done, styles.doneTypo]}>Done</Text>
      <View style={[styles.editContactItem, styles.editPosition]} />
      <Text style={[styles.remark, styles.remarkClr]}>Remark</Text>
      <Text style={[styles.remark1, styles.remarkClr]}>Remark</Text>
      <Text style={[styles.remark2, styles.remarkClr]}>Remark</Text>
      <View style={[styles.editContactInner, styles.editPosition]} />
      <Pressable
        style={[styles.addTags, styles.addTagsPosition]}
        onPress={() => navigation.navigate("AddTags")}
      >
        <Text style={styles.addTags1Typo}>Add Tags</Text>
      </Pressable>
      <View style={[styles.rectangleView, styles.editPosition]} />
      <Text style={[styles.enterText, styles.addTags1Typo]}>Enter Text</Text>
      <View style={[styles.editContactChild1, styles.editPosition]} />
      <Text style={[styles.addImage, styles.doneTypo]}>Add Image</Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector11.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector21.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector31.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector42.png")}
      />
      <Text style={[styles.tomiokaGiyuu, styles.addTags1Typo]}>
        Tomioka Giyuu
      </Text>
      <Text style={[styles.editContact1, styles.doneTypo]}>Edit Contact</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorLayout: {
    height: "1.88%",
    width: "2.22%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  doneTypo: {
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  editPosition: {
    backgroundColor: Color.colorGray_200,
    left: "3.06%",
    position: "absolute",
    borderRadius: Border.br_8xs,
  },
  remarkClr: {
    opacity: 0.5,
    color: Color.colorWhite,
  },
  addTagsPosition: {
    left: "8.33%",
    position: "absolute",
  },
  addTags1Typo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "2.78%",
    right: "95%",
    bottom: "96.38%",
    top: "1.75%",
    height: "1.88%",
    width: "2.22%",
  },
  editContactChild: {
    height: "3.25%",
    width: "15.28%",
    top: "1.13%",
    right: "2.5%",
    bottom: "95.63%",
    left: "82.22%",
    backgroundColor: "transparent",
    position: "absolute",
    borderRadius: Border.br_8xs,
  },
  done: {
    left: "85.56%",
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    top: "1.75%",
  },
  editContactItem: {
    top: "16.63%",
    bottom: "77.75%",
    right: "3.89%",
    width: "93.06%",
    height: "5.63%",
    backgroundColor: Color.colorGray_200,
  },
  remark: {
    top: "13.88%",
    left: "3.06%",
    opacity: 0.5,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  remark1: {
    top: "23.13%",
    left: "3.06%",
    opacity: 0.5,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  remark2: {
    top: "32.88%",
    left: "3.06%",
    opacity: 0.5,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  editContactInner: {
    top: "26%",
    bottom: "68.38%",
    right: "3.89%",
    width: "93.06%",
    height: "5.63%",
    backgroundColor: Color.colorGray_200,
  },
  addTags: {
    top: "28%",
  },
  rectangleView: {
    top: "35.38%",
    bottom: "59%",
    right: "3.89%",
    width: "93.06%",
    height: "5.63%",
    backgroundColor: Color.colorGray_200,
  },
  enterText: {
    top: "36.63%",
    left: "8.33%",
    position: "absolute",
    opacity: 0.5,
    color: Color.colorWhite,
  },
  editContactChild1: {
    height: "10.88%",
    width: "29.72%",
    top: "45.5%",
    right: "67.22%",
    bottom: "43.63%",
  },
  addImage: {
    top: "52.13%",
    left: "8.06%",
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
  },
  vectorIcon: {
    height: "2.63%",
    width: "6.39%",
    top: "47%",
    right: "79.44%",
    bottom: "50.38%",
    left: "14.17%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "0.13%",
    width: "3.61%",
    top: "48.25%",
    right: "80.83%",
    bottom: "51.63%",
    left: "15.56%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "1.38%",
    width: "0.28%",
    top: "47.63%",
    right: "82.5%",
    bottom: "51%",
    left: "17.22%",
    position: "absolute",
  },
  vectorIcon3: {
    top: "27.88%",
    right: "5.56%",
    bottom: "70.25%",
    left: "92.22%",
    height: "1.88%",
    width: "2.22%",
    position: "absolute",
  },
  tomiokaGiyuu: {
    top: "18.5%",
    left: "8.33%",
    position: "absolute",
    opacity: 0.5,
    color: Color.colorWhite,
  },
  editContact1: {
    top: "0.75%",
    left: "38.06%",
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
  },
  editContact: {
    backgroundColor: Color.colorBlack,
    width: 360,
    height: 800,
    overflow: "hidden",
    borderRadius: Border.br_8xs,
  },
});

export default EditContact;
