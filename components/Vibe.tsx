import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Vibe = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.vibe}>
      <Pressable
        style={[styles.vibeChild, styles.vibeChildLayout]}
        onPress={() => navigation.navigate("MomentsPage")}
      />
      <View style={[styles.vibeItem, styles.vibeChildLayout]} />
      <Text
        style={[styles.groupStudy, styles.zoneTypo]}
      >{`Group Study & Assignment`}</Text>
      <View style={[styles.vibeInner, styles.vibeChildLayout]} />
      <Pressable
        style={[styles.rectanglePressable, styles.vibeChildLayout]}
        onPress={() => navigation.navigate("VibesPage")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-24.png")}
      />
      <View style={[styles.rectangleView, styles.vibeChildLayout]} />
      <Text style={[styles.vibe1, styles.zoneTypo]}>Vibe</Text>
      <View style={[styles.vibeChild1, styles.vibeChildLayout]} />
      <Pressable
        style={[styles.vibeChild2, styles.vibeChildLayout]}
        onPress={() => navigation.navigate("PeopleNearby")}
      />
      <View style={[styles.vibeChild3, styles.vibeChildLayout]} />
      <View style={[styles.vibeChild4, styles.vibeChildLayout]} />
      <Image
        style={[styles.vibeChild5, styles.vibeChild5Position]}
        contentFit="cover"
        source={require("../assets/group-25.png")}
      />
      <Text style={[styles.eventDiscovery, styles.zoneTypo]}>
        Event Discovery
      </Text>
      <View style={[styles.vibeChild6, styles.vibeChildLayout]} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector39.png")}
      />
      <Image
        style={styles.vibeChild7}
        contentFit="cover"
        source={require("../assets/group-26.png")}
      />
      <Text style={[styles.travelPlans, styles.zoneTypo]}>Travel Plans</Text>
      <Text style={styles.vibe2}>Vibe</Text>
      <Image
        style={styles.simpleIconsmomenteo}
        contentFit="cover"
        source={require("../assets/simpleiconsmomenteo.png")}
      />
      <Text style={[styles.moments, styles.scanTypo]}>Moments</Text>
      <Image
        style={[styles.mdiqrcodeScanIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/mdiqrcodescan.png")}
      />
      <Text style={[styles.scan, styles.scanTypo]}>Scan</Text>
      <Image
        style={[styles.mingcuteuserSearchFillIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/mingcuteusersearchfill.png")}
      />
      <Text style={[styles.search, styles.zoneTypo]}>Search</Text>
      <Image
        style={[
          styles.solarpeopleNearbyBoldIcon,
          styles.gameIconsfireZonePosition,
        ]}
        contentFit="cover"
        source={require("../assets/solarpeoplenearbybold.png")}
      />
      <Text style={[styles.peopleNearby, styles.zoneTypo]}>People Nearby</Text>
      <Image
        style={[styles.gameIconsfireZone, styles.gameIconsfireZonePosition]}
        contentFit="cover"
        source={require("../assets/gameiconsfirezone.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector40.png")}
      />
      <Text style={[styles.gamersChatHub, styles.zoneTypo]}>
        Gamer's Chat Hub
      </Text>
      <Text style={[styles.zone, styles.zoneTypo]}>Zone</Text>
      <Image
        style={[styles.icroundGreaterThanIcon, styles.icroundIconLayout]}
        contentFit="cover"
        source={require("../assets/icroundgreaterthan.png")}
      />
      <Image
        style={[styles.icroundGreaterThanIcon1, styles.icroundIconLayout]}
        contentFit="cover"
        source={require("../assets/icroundgreaterthan.png")}
      />
      <Image
        style={[styles.icroundGreaterThanIcon2, styles.icroundIconLayout]}
        contentFit="cover"
        source={require("../assets/icroundgreaterthan.png")}
      />
      <Image
        style={[styles.icroundGreaterThanIcon3, styles.icroundIconPosition1]}
        contentFit="cover"
        source={require("../assets/icroundgreaterthan.png")}
      />
      <Image
        style={[styles.icroundGreaterThanIcon4, styles.icroundIconPosition1]}
        contentFit="cover"
        source={require("../assets/icroundgreaterthan.png")}
      />
      <Image
        style={[styles.icroundGreaterThanIcon5, styles.icroundIconPosition]}
        contentFit="cover"
        source={require("../assets/icroundgreaterthan.png")}
      />
      <Image
        style={[styles.icroundGreaterThanIcon6, styles.icroundIconPosition1]}
        contentFit="cover"
        source={require("../assets/icroundgreaterthan.png")}
      />
      <Image
        style={[styles.icroundGreaterThanIcon7, styles.icroundIconPosition1]}
        contentFit="cover"
        source={require("../assets/icroundgreaterthan.png")}
      />
      <Image
        style={[styles.icroundGreaterThanIcon8, styles.icroundIconPosition]}
        contentFit="cover"
        source={require("../assets/icroundgreaterthan.png")}
      />
      <Image
        style={[styles.icroundGreaterThanIcon9, styles.icroundIconPosition]}
        contentFit="cover"
        source={require("../assets/icroundgreaterthan.png")}
      />
      <View style={styles.component1}>
        <View style={[styles.component1Inner, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
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
          <Text style={[styles.chat, styles.me1Typo]}>Chat</Text>
        </Pressable>
        <Pressable
          style={styles.fling}
          onPress={() => navigation.navigate("Fling")}
        >
          <Image
            style={styles.vectorIcon2}
            contentFit="cover"
            source={require("../assets/vector41.png")}
          />
          <Text style={[styles.fling1, styles.me1Typo]}>Fling</Text>
        </Pressable>
        <Pressable
          style={styles.vibe3}
          onPress={() => navigation.navigate("Vibe")}
        >
          <Image
            style={styles.vibeIcon}
            contentFit="cover"
            source={require("../assets/vibe.png")}
          />
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
  vibeChildLayout: {
    height: 44,
    left: 0,
    backgroundColor: Color.colorGray_200,
    position: "absolute",
    width: 360,
  },
  zoneTypo: {
    textAlign: "center",
    color: Color.colorGray_1000,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_lgi,
    left: 44,
    position: "absolute",
  },
  vibeChild5Position: {
    left: 8,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "90.83%",
    position: "absolute",
    overflow: "hidden",
  },
  scanTypo: {
    left: 43,
    textAlign: "center",
    color: Color.colorGray_1000,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_lgi,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  gameIconsfireZonePosition: {
    left: 10,
    position: "absolute",
    overflow: "hidden",
  },
  icroundIconLayout: {
    height: 17,
    width: 13,
    left: 346,
    position: "absolute",
    overflow: "hidden",
  },
  icroundIconPosition1: {
    left: 345,
    height: 17,
    width: 13,
    position: "absolute",
    overflow: "hidden",
  },
  icroundIconPosition: {
    left: 344,
    height: 17,
    width: 13,
    position: "absolute",
    overflow: "hidden",
  },
  groupChildPosition: {
    top: 0,
    height: 68,
    left: 0,
    position: "absolute",
    width: 360,
  },
  me1Typo: {
    alignSelf: "stretch",
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: Color.colorGray_1000,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
  },
  vibeChild: {
    top: 59,
  },
  vibeItem: {
    top: 587,
  },
  groupStudy: {
    top: 601,
  },
  vibeInner: {
    top: 649,
  },
  rectanglePressable: {
    top: 126,
  },
  groupIcon: {
    top: 130,
    left: 5,
    width: 30,
    height: 30,
    position: "absolute",
  },
  rectangleView: {
    top: 188,
  },
  vibe1: {
    top: 140,
  },
  vibeChild1: {
    top: 252,
  },
  vibeChild2: {
    top: 319,
  },
  vibeChild3: {
    top: 387,
  },
  vibeChild4: {
    top: 453,
  },
  vibeChild5: {
    top: 461,
    width: 25,
    height: 27,
  },
  eventDiscovery: {
    top: 467,
  },
  vibeChild6: {
    top: 520,
  },
  vectorIcon: {
    height: "3%",
    width: "6.67%",
    top: "74.75%",
    bottom: "22.25%",
    left: "2.5%",
  },
  vibeChild7: {
    top: 530,
    height: 20,
    width: 24,
    left: 7,
    position: "absolute",
  },
  travelPlans: {
    top: 535,
  },
  vibe2: {
    top: 7,
    left: 162,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  simpleIconsmomenteo: {
    top: 61,
    left: 3,
    width: 32,
    height: 36,
    position: "absolute",
    overflow: "hidden",
  },
  moments: {
    top: 72,
  },
  mdiqrcodeScanIcon: {
    top: 199,
    left: 7,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  scan: {
    top: 202,
  },
  mingcuteuserSearchFillIcon: {
    top: 260,
    left: 8,
    position: "absolute",
    overflow: "hidden",
  },
  search: {
    top: 266,
  },
  solarpeopleNearbyBoldIcon: {
    top: 326,
    height: 24,
    width: 24,
  },
  peopleNearby: {
    top: 332,
  },
  gameIconsfireZone: {
    top: 395,
    width: 23,
    height: 25,
  },
  vectorIcon1: {
    height: "2.63%",
    width: "6.39%",
    top: "82.38%",
    bottom: "15%",
    left: "2.78%",
  },
  gamersChatHub: {
    top: 664,
  },
  zone: {
    top: 400,
  },
  icroundGreaterThanIcon: {
    top: 72,
  },
  icroundGreaterThanIcon1: {
    top: 139,
  },
  icroundGreaterThanIcon2: {
    top: 204,
  },
  icroundGreaterThanIcon3: {
    top: 265,
  },
  icroundGreaterThanIcon4: {
    top: 332,
  },
  icroundGreaterThanIcon5: {
    top: 401,
  },
  icroundGreaterThanIcon6: {
    top: 468,
  },
  icroundGreaterThanIcon7: {
    top: 534,
  },
  icroundGreaterThanIcon8: {
    top: 601,
  },
  icroundGreaterThanIcon9: {
    top: 660,
  },
  groupChild: {
    backgroundColor: Color.colorGray_200,
    top: 0,
  },
  component1Inner: {
    zIndex: 0,
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
  vectorIcon2: {
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
  vibe3: {
    zIndex: 3,
    width: 44,
    marginLeft: 63,
    alignItems: "center",
  },
  meIcon: {
    width: 35,
    height: 30,
  },
  me1: {
    marginTop: 10,
  },
  me: {
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
    height: 68,
    left: 0,
    position: "absolute",
    width: 360,
  },
  vibe: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGray_400,
    height: 800,
    overflow: "hidden",
    width: 360,
  },
});

export default Vibe;
