import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Chat = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.chat}>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
      </Pressable>
      <Text style={[styles.tomiokaGiyuu, styles.activeNowTypo]}>
        Tomioka Giyuu
      </Text>
      <Image
        style={styles.chatChild}
        contentFit="cover"
        source={require("../assets/ellipse-41.png")}
      />
      <Image
        style={styles.chatItem}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Text style={[styles.activeNow, styles.activeNowTypo]}>Active now</Text>
      <Image
        style={[styles.materialSymbolscallSharpIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/materialsymbolscallsharp.png")}
      />
      <Image
        style={[styles.weuivideoCallOutlinedIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/weuivideocalloutlined.png")}
      />
      <LinearGradient
        style={styles.chatInner}
        locations={[0, 1]}
        colors={["#9872eb", "#e871c5"]}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.imGoodthankYou, styles.heywhatsUpTypo]}>
        I’m Good...Thank You
      </Text>
      <Text style={[styles.heywhatsUp, styles.heywhatsUpTypo]}>
        Hey...!!!What’s Up?
      </Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector64.png")}
      />
      <View style={[styles.chatChild1, styles.chatChildBorder]} />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector65.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector66.png")}
      />
      <View style={[styles.chatChild2, styles.chatChildBorder]} />
      <Image
        style={[styles.vectorIcon3, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector67.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector68.png")}
      />
      <View style={styles.frameView}>
        <View style={[styles.vectorParent, styles.vectorPosition]}>
          <Image
            style={[styles.vectorIcon5, styles.vectorPosition]}
            contentFit="cover"
            source={require("../assets/vector62.png")}
          />
          <LinearGradient
            style={[styles.groupChild, styles.groupLayout]}
            locations={[0, 1]}
            colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
          />
          <LinearGradient
            style={[styles.groupItem, styles.groupLayout]}
            locations={[0, 1]}
            colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
          />
          <LinearGradient
            style={[styles.groupInner, styles.groupLayout]}
            locations={[0, 1]}
            colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
          />
          <LinearGradient
            style={[styles.rectangleLineargradient, styles.groupLayout]}
            locations={[0, 1]}
            colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
          />
          <Text style={[styles.sendMoney, styles.locationTypo]}>
            Send Money
          </Text>
          <Text style={[styles.icebreaker, styles.locationTypo]}>
            Icebreaker
          </Text>
          <Text style={[styles.location, styles.locationTypo]}>Location</Text>
          <Text style={[styles.virtualDate, styles.locationTypo]}>
            Virtual Date
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  activeNowTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    top: 21,
    position: "absolute",
    overflow: "hidden",
  },
  heywhatsUpTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  vectorIconPosition: {
    bottom: "2%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  chatChildBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  vectorPosition: {
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  groupLayout: {
    height: 27,
    borderColor: Color.colorMediumpurple_200,
    borderRadius: Border.br_3xs,
    width: 118,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  locationTypo: {
    color: Color.colorGray_900,
    left: 27,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  vector: {
    left: "3.33%",
    top: "2.88%",
    right: "94.44%",
    bottom: "95.25%",
    width: "2.22%",
    height: "1.88%",
    position: "absolute",
  },
  tomiokaGiyuu: {
    top: 20,
    left: 73,
    fontSize: FontSize.size_3xs,
  },
  chatChild: {
    top: 17,
    left: 42,
    width: 28,
    height: 25,
    position: "absolute",
  },
  chatItem: {
    width: 38,
    height: 32,
    left: 0,
    top: 643,
    position: "absolute",
  },
  activeNow: {
    top: 29,
    left: 75,
    fontSize: 5,
  },
  materialSymbolscallSharpIcon: {
    left: 288,
  },
  weuivideoCallOutlinedIcon: {
    left: 327,
  },
  chatInner: {
    top: 696,
    left: 205,
    width: 151,
    backgroundColor: "transparent",
    height: 34,
    borderWidth: 1,
    borderColor: Color.colorMediumpurple_100,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  rectangleView: {
    left: 43,
    width: 157,
    height: 34,
    borderRadius: Border.br_xl,
    borderWidth: 1,
    borderColor: Color.colorMediumpurple_100,
    borderStyle: "solid",
    top: 643,
    position: "absolute",
  },
  imGoodthankYou: {
    top: 652,
    left: 50,
  },
  heywhatsUp: {
    top: 704,
    left: 219,
  },
  vectorIcon: {
    height: "2.88%",
    width: "7.5%",
    right: "73.89%",
    left: "18.61%",
    top: "95.13%",
  },
  chatChild1: {
    top: 754,
    left: -2,
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    backgroundColor: Color.colorGray_200,
    borderColor: Color.colorBlack,
    width: 364,
    height: 48,
    borderWidth: 1,
    borderStyle: "solid",
  },
  vectorIcon1: {
    height: "2.5%",
    width: "7.22%",
    top: "95.38%",
    right: "72.78%",
    bottom: "2.13%",
    left: "20%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "2.38%",
    width: "6.94%",
    top: "95.63%",
    right: "82.5%",
    left: "10.56%",
  },
  chatChild2: {
    top: 761,
    left: 108,
    width: 204,
    height: 23,
    borderColor: Color.colorMediumpurple_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
  },
  vectorIcon3: {
    height: "1.25%",
    width: "3.61%",
    top: "96.13%",
    right: "14.72%",
    bottom: "2.63%",
    left: "81.67%",
    position: "absolute",
  },
  vectorIcon4: {
    height: "2.63%",
    width: "5%",
    right: "5%",
    bottom: "2.25%",
    left: "90%",
    top: "95.13%",
    position: "absolute",
  },
  vectorIcon5: {
    height: "14.86%",
    width: "16.95%",
    top: "85.14%",
    right: "83.05%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChild: {
    top: 0,
  },
  groupItem: {
    top: 32,
  },
  groupInner: {
    top: 63,
  },
  rectangleLineargradient: {
    top: 95,
  },
  sendMoney: {
    top: 4,
  },
  icebreaker: {
    top: 38,
  },
  location: {
    top: 69,
  },
  virtualDate: {
    top: 100,
  },
  vectorParent: {
    top: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
  },
  frameView: {
    top: 638,
    left: 10,
    height: 148,
    width: 118,
    position: "absolute",
  },
  chat: {
    backgroundColor: Color.colorBlack,
    width: 360,
    height: 800,
    overflow: "hidden",
    borderRadius: Border.br_8xs,
  },
});

export default Chat;
