import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AddTags1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.addTags}>
      <View style={styles.addTagsChild} />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("PayAndService1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
      </Pressable>
      <LinearGradient
        style={styles.addTagsItem}
        locations={[0, 1]}
        colors={["#9872eb", "#e871c5"]}
      />
      <Text style={[styles.inputATag, styles.allTagsTypo]}>
        Input a tag such as Family or Colleagues
      </Text>
      <Text style={[styles.allTags, styles.allTagsTypo]}>All Tags</Text>
      <View style={[styles.addTagsInner, styles.newTagPosition]} />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector60.png")}
      />
      <Text style={[styles.newTag, styles.newTagPosition]}>New Tag</Text>
      <Text style={[styles.addTags1, styles.okTypo]}>Add Tags</Text>
      <Text style={[styles.ok, styles.okTypo]}>Ok</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  allTagsTypo: {
    opacity: 0.5,
    left: 14,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  newTagPosition: {
    left: 28,
    position: "absolute",
  },
  okTypo: {
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
  },
  addTagsChild: {
    top: 62,
    left: 0,
    height: 43,
    backgroundColor: Color.colorGray_200,
    position: "absolute",
    width: 360,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "2.22%",
    top: "1.13%",
    right: "95.56%",
    bottom: "97%",
    width: "2.22%",
    height: "1.88%",
    position: "absolute",
  },
  addTagsItem: {
    height: "2.25%",
    width: "9.17%",
    top: "0.5%",
    right: "1.67%",
    bottom: "97.25%",
    left: "89.17%",
    backgroundColor: "transparent",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  inputATag: {
    top: 74,
  },
  allTags: {
    top: 118,
  },
  addTagsInner: {
    top: 142,
    width: 51,
    height: 15,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGray_200,
  },
  vectorIcon: {
    height: "0.75%",
    width: "1.67%",
    top: "18.25%",
    right: "89.17%",
    bottom: "81%",
    left: "9.17%",
    position: "absolute",
  },
  newTag: {
    top: 141,
    fontSize: FontSize.size_5xs,
    color: "#7f7f7f",
    width: 58,
    height: 16,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    left: 28,
  },
  addTags1: {
    top: "0.75%",
    left: "41.67%",
    color: Color.colorWhite,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  ok: {
    top: 6,
    left: 329,
    color: Color.colorWhite,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  addTags: {
    backgroundColor: Color.colorBlack,
    height: 800,
    overflow: "hidden",
    width: 360,
  },
});

export default AddTags1;
