import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const Main = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.main}>
      <Image
        style={styles.eyesMeetRemovebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/eyes-meetremovebgpreview-1.png")}
      />
      <Text style={[styles.language, styles.logInTypo]}>Language</Text>
      <LinearGradient
        style={[styles.log, styles.logLayout]}
        locations={[0, 1, 1]}
        colors={["#da69c3", "#644a91", "#a077e9"]}
      >
        <Pressable
          style={[styles.pressable, styles.pressableFlexBox]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.logIn, styles.logInTypo]}>Log In</Text>
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={[styles.sign, styles.logLayout]}
        locations={[0, 1]}
        colors={["#9872eb", "#e871c5"]}
      >
        <Pressable
          style={[styles.pressable1, styles.pressableFlexBox]}
          onPress={() => navigation.navigate("SignUp1")}
        >
          <Text style={[styles.logIn, styles.logInTypo]}>Sign Up</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  logInTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
  },
  logLayout: {
    height: 32,
    width: 87,
    top: 725,
    position: "absolute",
  },
  pressableFlexBox: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: "100%",
    width: "100%",
    borderRadius: Border.br_8xs,
  },
  eyesMeetRemovebgPreview1Icon: {
    top: 234,
    left: -65,
    width: 490,
    height: 491,
    position: "absolute",
  },
  language: {
    top: 35,
    left: 296,
    fontSize: FontSize.m3LabelSmall_size,
    width: 54,
    height: 16,
    position: "absolute",
  },
  logIn: {
    fontSize: FontSize.m3LabelMedium_size,
  },
  pressable: {
    paddingHorizontal: 23,
    paddingVertical: Padding.p_6xs,
  },
  log: {
    left: 18,
  },
  pressable1: {
    paddingHorizontal: 19,
    paddingVertical: 8,
  },
  sign: {
    left: 236,
  },
  main: {
    backgroundColor: Color.colorBlack,
    width: 360,
    height: 800,
    overflow: "hidden",
    borderRadius: Border.br_8xs,
  },
});

export default Main;
