import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import GroupComponent from "./GroupComponent";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Homepage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homepage}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupBg]} />
        <Text style={[styles.search, styles.searchTypo]}>Search</Text>
        <Image
          style={styles.quillsearchIcon}
          contentFit="cover"
          source={require("../assets/quillsearch.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout1]}>
        <View style={[styles.groupItem, styles.groupLayout1]} />
        <Text style={[styles.addContacts, styles.addContactsTypo]}>
          Add Contacts
        </Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector611.png")}
        />
      </View>
      <GroupComponent
        eyesMeetTeam="EyesMeet Team"
        welcomeToEyesMeetThisTheS="welcome to EyesMeet.This the start of y..."
        today1002Am="Today 10.02 Am"
      />
      <Pressable
        style={[styles.icsharpGreaterThanParent, styles.icsharpLayout]}
        onPress={() => navigation.navigate("Invite")}
      >
        <Image
          style={[styles.icsharpGreaterThanIcon, styles.icsharpLayout]}
          contentFit="cover"
          source={require("../assets/icsharpgreaterthan.png")}
        />
        <Text
          style={[styles.inviteFriendsTo, styles.searchTypo]}
        >{`Invite Friends To Register `}</Text>
      </Pressable>
      <Text style={styles.eyesMeet}>EYES MEET</Text>
      <Pressable
        style={styles.groupParent}
        onPress={() => navigation.navigate("Chat")}
      >
        <GroupComponent
          propTop={0}
          eyesMeetTeam="Tomioka Giyuu"
          propLeft={61}
          welcomeToEyesMeetThisTheS="  "
          propLeft1={210}
          propFontSize={15}
          today1002Am="Today 10.03 Am"
        />
        <Text style={[styles.imGoodthankYou, styles.addContactsTypo]}>
          I’m Good...Thank You
        </Text>
      </Pressable>
      <Image
        style={[styles.homepageChild, styles.homepagePosition]}
        contentFit="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Image
        style={[styles.homepageItem, styles.homepagePosition]}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <View style={styles.homepageInner}>
        <View style={[styles.vectorParent, styles.vectorPosition]}>
          <Image
            style={[styles.vectorIcon1, styles.vectorPosition]}
            contentFit="cover"
            source={require("../assets/vector62.png")}
          />
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Image
            style={[styles.groupIcon, styles.groupIconPosition]}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
          <View style={[styles.rectangleView, styles.groupLayout]} />
          <Image
            style={[styles.vectorIcon2, styles.groupIconPosition]}
            contentFit="cover"
            source={require("../assets/vector63.png")}
          />
          <View style={[styles.groupChild1, styles.groupLayout]} />
          <Image
            style={[styles.groupIcon1, styles.groupIconPosition]}
            contentFit="cover"
            source={require("../assets/group1.png")}
          />
          <Text style={[styles.addContacts1, styles.scanTypo]}>
            Add Contacts
          </Text>
          <Text style={[styles.scan, styles.scanTypo]}>Scan</Text>
          <Pressable
            style={[styles.money, styles.scanPosition]}
            onPress={() => navigation.navigate("Money")}
          >
            <Text style={styles.scanTypo}>Money</Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.component1, styles.component1Layout]}>
        <View style={[styles.component1Inner, styles.component1Layout]}>
          <View style={[styles.groupChild2, styles.component1Layout]} />
        </View>
        <Image
          style={styles.navIcon}
          contentFit="cover"
          source={require("../assets/nav.png")}
        />
        <Pressable
          style={styles.fling}
          onPress={() => navigation.navigate("Fling")}
        >
          <Image
            style={styles.vectorIcon3}
            contentFit="cover"
            source={require("../assets/vector41.png")}
          />
          <Text style={[styles.fling1, styles.me1Typo]}>Fling</Text>
        </Pressable>
        <Pressable
          style={styles.vibe}
          onPress={() => navigation.navigate("Vibe")}
        >
          <Image
            style={styles.vibeIcon}
            contentFit="cover"
            source={require("../assets/vibe1.png")}
          />
          <Text style={[styles.vibe1, styles.me1Typo]}>Vibe</Text>
        </Pressable>
        <Pressable style={styles.me} onPress={() => navigation.navigate("Me")}>
          <Image
            style={styles.meIcon}
            contentFit="cover"
            source={require("../assets/me.png")}
          />
          <Text style={[styles.me1, styles.me1Typo]}>Me</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupBg: {
    backgroundColor: Color.colorGray_700,
    top: 0,
  },
  searchTypo: {
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  groupLayout1: {
    height: 34,
    left: 0,
    position: "absolute",
    width: 360,
  },
  addContactsTypo: {
    opacity: 0.5,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  icsharpLayout: {
    height: 24,
    position: "absolute",
  },
  homepagePosition: {
    left: 8,
    width: 35,
    height: 32,
    position: "absolute",
  },
  vectorPosition: {
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  groupLayout: {
    height: 27,
    width: 118,
    borderWidth: 1,
    borderColor: Color.colorMediumpurple_200,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_800,
    borderRadius: Border.br_3xs,
    left: 0,
    position: "absolute",
  },
  groupIconPosition: {
    left: "7.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  scanTypo: {
    color: Color.colorGray_900,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
  },
  scanPosition: {
    left: 23,
    position: "absolute",
  },
  component1Layout: {
    height: 68,
    left: 0,
    position: "absolute",
    width: 360,
  },
  me1Typo: {
    color: Color.colorGray_1000,
    alignSelf: "stretch",
    fontSize: FontSize.size_smi,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_700,
    height: 32,
    left: 0,
    position: "absolute",
    width: 360,
  },
  search: {
    top: 8,
    left: 145,
    color: Color.colorGray_1200,
    width: 66,
    height: 16,
  },
  quillsearchIcon: {
    top: 1,
    left: 12,
    width: 28,
    height: 28,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 45,
    height: 32,
    left: 0,
    position: "absolute",
    width: 360,
  },
  groupItem: {
    backgroundColor: Color.colorGray_700,
    top: 0,
  },
  addContacts: {
    left: 132,
    top: 10,
    opacity: 0.5,
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
  },
  vectorIcon: {
    height: "52.94%",
    width: "5%",
    top: "23.53%",
    right: "90.28%",
    bottom: "23.53%",
    left: "4.72%",
    position: "absolute",
  },
  rectangleGroup: {
    top: 104,
  },
  icsharpGreaterThanIcon: {
    left: 171,
    width: 24,
    top: 0,
    overflow: "hidden",
  },
  inviteFriendsTo: {
    top: 4,
    left: 0,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
  },
  icsharpGreaterThanParent: {
    top: 267,
    left: 80,
    width: 195,
  },
  eyesMeet: {
    left: 137,
    fontSize: FontSize.size_smi,
    top: 10,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  imGoodthankYou: {
    top: 18,
    left: 63,
    fontSize: FontSize.m3LabelMedium_size,
  },
  groupParent: {
    top: 205,
    left: -2,
    height: 44,
    position: "absolute",
    width: 360,
  },
  homepageChild: {
    top: 206,
    width: 35,
  },
  homepageItem: {
    top: 151,
    width: 35,
  },
  vectorIcon1: {
    height: "18.8%",
    width: "16.81%",
    bottom: "81.2%",
    left: "83.19%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupInner: {
    top: 27,
  },
  groupIcon: {
    height: "8.55%",
    top: "29.91%",
    bottom: "61.54%",
    right: "84.87%",
    width: "7.56%",
    left: "7.56%",
  },
  rectangleView: {
    top: 59,
  },
  vectorIcon2: {
    height: "7.69%",
    top: "58.12%",
    bottom: "34.19%",
    right: "84.87%",
    width: "7.56%",
    left: "7.56%",
  },
  groupChild1: {
    top: 90,
  },
  groupIcon1: {
    height: "8.97%",
    width: "8.15%",
    top: "83.76%",
    right: "84.29%",
    bottom: "7.26%",
  },
  addContacts1: {
    top: 32,
    left: 23,
    position: "absolute",
  },
  scan: {
    top: 64,
    left: 23,
    position: "absolute",
  },
  money: {
    top: 95,
  },
  vectorParent: {
    height: "100%",
    width: "100%",
    bottom: "0%",
    left: "0%",
  },
  homepageInner: {
    top: 7,
    left: 234,
    width: 119,
    height: 117,
    position: "absolute",
  },
  groupChild2: {
    backgroundColor: Color.colorGray_200,
    top: 0,
  },
  component1Inner: {
    zIndex: 0,
    top: 0,
  },
  navIcon: {
    width: 37,
    height: 37,
    zIndex: 1,
    marginLeft: 63,
  },
  vectorIcon3: {
    height: 33,
    width: 35,
  },
  fling1: {
    marginTop: 8,
  },
  fling: {
    width: 36,
    zIndex: 2,
    marginLeft: 63,
  },
  vibeIcon: {
    width: 44,
    height: 28,
  },
  vibe1: {
    marginTop: 11,
  },
  vibe: {
    zIndex: 3,
    width: 44,
    marginLeft: 63,
    alignItems: "center",
  },
  meIcon: {
    height: 30,
    width: 35,
  },
  me1: {
    marginTop: 10,
  },
  me: {
    zIndex: 4,
    marginLeft: 63,
    alignItems: "center",
    width: 35,
  },
  component1: {
    top: 732,
    flexDirection: "row",
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: 0,
    alignItems: "center",
  },
  homepage: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorBlack,
    height: 800,
    overflow: "hidden",
    width: 360,
  },
});

export default Homepage;
