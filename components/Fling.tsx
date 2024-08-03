import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import GroupComponent1 from "./GroupComponent1";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const Fling = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.fling}>
      <View style={styles.vectorParent}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector80.png")}
        />
        <Text style={[styles.turnOnBluetoothContainer, styles.fling1Typo]}>
          <Text style={styles.turnOn}>{`Turn on    `}</Text>
          <Text style={styles.bluetooth}>Bluetooth</Text>
          <Text style={styles.turnOn}> to connect with nearby people</Text>
        </Text>
        <View style={styles.groupParent}>
          <GroupComponent1 tomiokaGiyuu="Tomioka Giyuu" />
          <GroupComponent1
            vectorIconTop={1027}
            tomiokaGiyuu="Tomioka Giyuu"
            vectorIconLeft={72}
            propLeft={72}
          />
          <GroupComponent1
            vectorIconTop={514}
            tomiokaGiyuu="Tomioka Giyuu"
            vectorIconLeft={72}
            propLeft={49}
          />
          <GroupComponent1
            vectorIconTop={1541}
            tomiokaGiyuu="Tomioka Giyuu"
            vectorIconLeft={72}
            propLeft={72}
          />
          <GroupComponent1
            vectorIconTop={257}
            tomiokaGiyuu="  "
            vectorIconLeft={108}
            propLeft={49}
          />
          <GroupComponent1
            vectorIconTop={1284}
            tomiokaGiyuu="Tomioka Giyuu"
            vectorIconLeft={72}
            propLeft={72}
          />
          <GroupComponent1
            vectorIconTop={771}
            tomiokaGiyuu="Tomioka Giyuu"
            vectorIconLeft={72}
            propLeft={72}
          />
          <GroupComponent1
            vectorIconTop={1798}
            tomiokaGiyuu="Tomioka Giyuu"
            vectorIconLeft={72}
            propLeft={72}
          />
        </View>
      </View>
      <Text style={[styles.fling1, styles.fling1Typo]}>Fling</Text>
      <View style={[styles.component1, styles.component1Layout]}>
        <View style={[styles.component1Inner, styles.component1Layout]}>
          <View style={[styles.groupChild, styles.component1Layout]} />
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
          style={styles.fling2}
          onPress={() => navigation.navigate("Fling")}
        >
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector86.png")}
          />
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
  fling1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
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
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
  },
  vectorIcon: {
    height: "1.69%",
    width: "2.85%",
    top: "0.28%",
    right: "81.01%",
    bottom: "98.02%",
    left: "16.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  turnOn: {
    color: Color.colorWhite,
  },
  bluetooth: {
    color: "#699bf7",
  },
  turnOnBluetoothContainer: {
    left: 0,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    top: 0,
  },
  groupParent: {
    top: 48,
    left: 31,
    width: 247,
    height: 660,
    position: "absolute",
  },
  vectorParent: {
    height: "88.5%",
    width: "87.78%",
    top: "2.88%",
    right: "5.28%",
    bottom: "8.63%",
    left: "6.94%",
    position: "absolute",
  },
  fling1: {
    top: 6,
    left: 159,
  },
  groupChild: {
    backgroundColor: Color.colorGray_200,
    top: 0,
    height: 68,
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
  vectorIcon1: {
    height: 33,
    width: 35,
  },
  fling2: {
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
    width: 35,
    marginLeft: 63,
    alignItems: "center",
  },
  component1: {
    top: 733,
    flexDirection: "row",
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: 0,
    alignItems: "center",
  },
  fling: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorBlack,
    height: 800,
    width: 360,
  },
});

export default Fling;
