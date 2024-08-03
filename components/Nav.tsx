import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Nav = () => {
  return (
    <View style={styles.nav}>
      <Image
        style={[styles.property1chatActivetrue, styles.chatIconLayout]}
        contentFit="cover"
        source={require("../assets/property-1chat-activetrue.png")}
      />
      <View style={styles.property1label24Activefa}>
        <Image
          style={styles.chatIconLayout}
          contentFit="cover"
          source={require("../assets/chat.png")}
        />
        <Text style={styles.chat}>Chat</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatIconLayout: {
    height: 37,
    width: 37,
  },
  property1chatActivetrue: {
    top: 20,
    left: 20,
    position: "absolute",
    height: 37,
  },
  chat: {
    alignSelf: "stretch",
    fontSize: FontSize.size_smi,
    letterSpacing: 1,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelMedium,
    color: Color.colorGray_1000,
    textAlign: "center",
    marginTop: 5,
  },
  property1label24Activefa: {
    top: 124,
    width: 37,
    left: 20,
    position: "absolute",
  },
  nav: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 77,
    height: 202,
    overflow: "hidden",
  },
});

export default Nav;
