import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Me = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.me}>
      <View style={[styles.meChild, styles.meChildBg]} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector69.png")}
      />
      <Text style={styles.tomiokaGiyuu}>Tomioka Giyuu</Text>
      <View style={[styles.meItem, styles.rectangleLayout]} />
      <View style={[styles.meInner, styles.rectangleLayout]} />
      <View style={[styles.rectangleView, styles.rectangleLayout]} />
      <Pressable
        style={[styles.rectanglePressable, styles.rectangleLayout]}
        onPress={() => navigation.navigate("PayAndService1")}
      />
      <Text style={[styles.eyesmeetId, styles.tomiokaGiTypo]}>EyesMeet ID</Text>
      <Text style={[styles.tomiokaGi, styles.tomiokaGiTypo]}>
        :Tomioka_Gi...
      </Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector70.png")}
      />
      <Image
        style={styles.clarityqrCodeLineIcon}
        contentFit="cover"
        source={require("../assets/clarityqrcodeline.png")}
      />
      <Pressable
        style={[styles.icroundGreaterThan, styles.icroundLayout]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icroundgreaterthan.png")}
        />
      </Pressable>
      <Image
        style={[styles.icroundGreaterThanIcon, styles.icroundIconPosition]}
        contentFit="cover"
        source={require("../assets/icroundgreaterthan.png")}
      />
      <Pressable
        style={[styles.icroundGreaterThan1, styles.icroundLayout]}
        onPress={() => navigation.navigate("MyMoments")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icroundgreaterthan.png")}
        />
      </Pressable>
      <Image
        style={[styles.icroundGreaterThanIcon1, styles.icroundIconPosition]}
        contentFit="cover"
        source={require("../assets/icroundgreaterthan.png")}
      />
      <Image
        style={[styles.icroundGreaterThanIcon2, styles.icroundIconPosition]}
        contentFit="cover"
        source={require("../assets/icroundgreaterthan.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={styles.status}>Status</Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector71.png")}
        />
      </View>
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector72.png")}
      />
      <Text style={styles.myMoments}>My Moments</Text>
      <Text style={[styles.myVibes, styles.myVibesTypo]}>My Vibes</Text>
      <Image
        style={styles.fluentEmojiHighContrastcalIcon}
        contentFit="cover"
        source={require("../assets/fluentemojihighcontrastcallmehand.png")}
      />
      <Text style={[styles.settings, styles.myVibesTypo]}>Settings</Text>
      <Image
        style={styles.arcticonsgooglePhotos}
        contentFit="cover"
        source={require("../assets/arcticonsgooglephotos.png")}
      />
      <Image
        style={styles.systemUiconssettings}
        contentFit="cover"
        source={require("../assets/systemuiconssettings.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector73.png")}
      />
      <Text
        style={[styles.payAndServices, styles.myVibesTypo]}
      >{`Pay and Services         `}</Text>
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector74.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector75.png")}
      />
      <View style={[styles.component1, styles.groupItemLayout]}>
        <View style={[styles.component1Inner, styles.groupItemLayout]}>
          <View style={[styles.groupItem, styles.groupItemLayout]} />
        </View>
        <Pressable
          style={styles.nav}
          onPress={() => navigation.navigate("Homepage")}
        >
          <Image
            style={styles.chatIcon}
            contentFit="cover"
            source={require("../assets/chat.png")}
          />
          <Text style={[styles.chat, styles.chatTypo]}>Chat</Text>
        </Pressable>
        <Pressable
          style={styles.fling}
          onPress={() => navigation.navigate("Fling")}
        >
          <Image
            style={styles.vectorIcon7}
            contentFit="cover"
            source={require("../assets/vector41.png")}
          />
          <Text style={[styles.fling1, styles.chatTypo]}>Fling</Text>
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
          <Text style={[styles.vibe1, styles.chatTypo]}>Vibe</Text>
        </Pressable>
        <Pressable style={styles.me1} onPress={() => navigation.navigate("Me")}>
          <Image
            style={styles.meIcon}
            contentFit="cover"
            source={require("../assets/me1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  meChildBg: {
    backgroundColor: Color.colorGray_200,
    top: 0,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleLayout: {
    height: 38,
    backgroundColor: Color.colorGray_200,
    position: "absolute",
    width: 360,
  },
  tomiokaGiTypo: {
    color: Color.colorGray_1200,
    top: 83,
    textAlign: "left",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  icroundLayout: {
    height: 17,
    width: 13,
    position: "absolute",
  },
  icroundIconPosition: {
    left: 346,
    height: 17,
    width: 13,
    position: "absolute",
    overflow: "hidden",
  },
  myVibesTypo: {
    fontSize: FontSize.size_mini,
    left: 38,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.colorWhite,
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  groupItemLayout: {
    height: 68,
    left: 0,
    position: "absolute",
    width: 360,
  },
  chatTypo: {
    textAlign: "center",
    fontSize: FontSize.size_smi,
    alignSelf: "stretch",
    color: Color.colorGray_1000,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
  },
  meChild: {
    height: 188,
    left: 0,
    position: "absolute",
    width: 360,
  },
  vectorIcon: {
    height: "6.63%",
    width: "16.67%",
    top: "6.38%",
    right: "75.83%",
    bottom: "87%",
    left: "7.5%",
  },
  tomiokaGiyuu: {
    top: 64,
    left: 96,
    fontSize: FontSize.size_lgi,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  meItem: {
    top: 259,
    left: 0,
  },
  meInner: {
    top: 314,
    left: 0,
  },
  rectangleView: {
    top: 369,
    left: 0,
  },
  rectanglePressable: {
    top: 209,
    left: -1,
  },
  eyesmeetId: {
    fontSize: FontSize.size_3xs,
    left: 100,
    color: Color.colorGray_1200,
    top: 83,
  },
  tomiokaGi: {
    left: 162,
    fontSize: FontSize.size_5xs,
    color: Color.colorGray_1200,
    top: 83,
  },
  vectorIcon1: {
    height: "0.16%",
    width: "0.14%",
    top: "15.11%",
    right: "-1.53%",
    bottom: "84.73%",
    left: "101.39%",
  },
  clarityqrCodeLineIcon: {
    top: 87,
    left: 278,
    width: 10,
    height: 9,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  icroundGreaterThan: {
    left: 342,
    top: 85,
  },
  icroundGreaterThanIcon: {
    top: 215,
  },
  icroundGreaterThan1: {
    left: 347,
    top: 270,
  },
  icroundGreaterThanIcon1: {
    top: 325,
  },
  icroundGreaterThanIcon2: {
    top: 383,
  },
  groupChild: {
    top: 2,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorMediumpurple_100,
    borderWidth: 1,
    width: 41,
    height: 11,
    left: 0,
    position: "absolute",
  },
  status: {
    left: 12,
    fontSize: FontSize.size_6xs,
    color: Color.colorGray_600,
    width: 32,
    fontFamily: FontFamily.robotoRegular,
    height: 14,
    textAlign: "left",
    lineHeight: 16,
    letterSpacing: 1,
    top: 0,
    position: "absolute",
  },
  vectorIcon2: {
    height: "28.57%",
    width: "9.09%",
    top: "42.86%",
    right: "75%",
    bottom: "28.57%",
    left: "15.91%",
  },
  rectangleParent: {
    top: 99,
    height: 14,
    width: 44,
    left: 100,
    position: "absolute",
  },
  vectorIcon3: {
    height: "0.63%",
    width: "1.39%",
    top: "13.13%",
    right: "58.06%",
    bottom: "86.25%",
    left: "40.56%",
  },
  myMoments: {
    top: 269,
    color: Color.colorGray_1000,
    fontSize: FontSize.size_mini,
    left: 38,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  myVibes: {
    top: 327,
  },
  fluentEmojiHighContrastcalIcon: {
    top: 264,
    left: 2,
    width: 27,
    height: 27,
    position: "absolute",
    overflow: "hidden",
  },
  settings: {
    top: 379,
  },
  arcticonsgooglePhotos: {
    top: 265,
    left: 6,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  systemUiconssettings: {
    top: 377,
    left: 7,
    width: 21,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon4: {
    height: "3.39%",
    width: "7.5%",
    top: "39.88%",
    right: "91.39%",
    bottom: "56.74%",
    left: "1.11%",
  },
  payAndServices: {
    top: 220,
  },
  vectorIcon5: {
    height: "2.25%",
    width: "5.56%",
    top: "27.5%",
    right: "92.5%",
    bottom: "70.25%",
    left: "1.94%",
  },
  vectorIcon6: {
    height: "0.88%",
    width: "3.33%",
    top: "27.88%",
    right: "93.61%",
    bottom: "71.25%",
    left: "3.06%",
  },
  groupItem: {
    backgroundColor: Color.colorGray_200,
    top: 0,
  },
  component1Inner: {
    zIndex: 0,
    top: 0,
    height: 68,
  },
  chatIcon: {
    height: 37,
    width: 37,
  },
  chat: {
    marginTop: 5,
  },
  nav: {
    zIndex: 1,
    marginLeft: 63,
    width: 37,
  },
  vectorIcon7: {
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
    height: 28,
    width: 44,
  },
  vibe1: {
    marginTop: 11,
  },
  vibe: {
    zIndex: 3,
    marginLeft: 63,
    alignItems: "center",
    width: 44,
  },
  meIcon: {
    height: 30,
    width: 35,
  },
  me1: {
    zIndex: 4,
    width: 35,
    marginLeft: 63,
    alignItems: "center",
  },
  component1: {
    top: 732,
    flexDirection: "row",
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: 0,
    alignItems: "center",
  },
  me: {
    backgroundColor: Color.colorBlack,
    height: 800,
    overflow: "hidden",
    width: 360,
  },
});

export default Me;
