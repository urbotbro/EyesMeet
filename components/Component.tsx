import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Component = () => {
  return (
    <View style={styles.component1}>
      <View style={[styles.property1navBar, styles.property1meSpaceBlock]}>
        <View style={[styles.property1navBarInner, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
        <Image
          style={[styles.navIcon, styles.navPosition]}
          contentFit="cover"
          source={require("../assets/nav.png")}
        />
        <View style={styles.fling}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector41.png")}
          />
          <Text style={[styles.fling1, styles.me1Typo]}>Fling</Text>
        </View>
        <View style={[styles.vibe, styles.meFlexBox]}>
          <Image
            style={styles.vibeIcon}
            contentFit="cover"
            source={require("../assets/vibe1.png")}
          />
          <Text style={[styles.vibe1, styles.me1Typo]}>Vibe</Text>
        </View>
        <View style={[styles.me, styles.meFlexBox]}>
          <Image
            style={styles.meIcon}
            contentFit="cover"
            source={require("../assets/me.png")}
          />
          <Text style={[styles.me1, styles.me1Typo]}>Me</Text>
        </View>
      </View>
      <View style={[styles.property1fling, styles.property1meSpaceBlock]}>
        <View style={[styles.property1navBarInner, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
        <View style={[styles.nav, styles.navPosition]}>
          <Image
            style={styles.chatIcon}
            contentFit="cover"
            source={require("../assets/chat.png")}
          />
          <Text style={[styles.chat, styles.me1Typo]}>Chat</Text>
        </View>
        <View style={styles.fling}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector86.png")}
          />
        </View>
        <View style={[styles.vibe, styles.meFlexBox]}>
          <Image
            style={styles.vibeIcon}
            contentFit="cover"
            source={require("../assets/vibe1.png")}
          />
          <Text style={[styles.vibe1, styles.me1Typo]}>Vibe</Text>
        </View>
        <View style={[styles.me, styles.meFlexBox]}>
          <Image
            style={styles.meIcon}
            contentFit="cover"
            source={require("../assets/me.png")}
          />
          <Text style={[styles.me1, styles.me1Typo]}>Me</Text>
        </View>
      </View>
      <View style={[styles.property1vibe, styles.property1meSpaceBlock]}>
        <View style={[styles.property1navBarInner, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
        <View style={[styles.nav, styles.navPosition]}>
          <Image
            style={styles.chatIcon}
            contentFit="cover"
            source={require("../assets/chat.png")}
          />
          <Text style={[styles.chat, styles.me1Typo]}>Chat</Text>
        </View>
        <View style={styles.fling}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector41.png")}
          />
          <Text style={[styles.fling1, styles.me1Typo]}>Fling</Text>
        </View>
        <View style={[styles.vibe, styles.meFlexBox]}>
          <Image
            style={styles.vibeIcon}
            contentFit="cover"
            source={require("../assets/vibe.png")}
          />
        </View>
        <View style={[styles.me, styles.meFlexBox]}>
          <Image
            style={styles.meIcon}
            contentFit="cover"
            source={require("../assets/me.png")}
          />
          <Text style={[styles.me1, styles.me1Typo]}>Me</Text>
        </View>
      </View>
      <View style={[styles.property1me, styles.property1meSpaceBlock]}>
        <View style={[styles.property1navBarInner, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
        <View style={[styles.nav, styles.navPosition]}>
          <Image
            style={styles.chatIcon}
            contentFit="cover"
            source={require("../assets/chat.png")}
          />
          <Text style={[styles.chat, styles.me1Typo]}>Chat</Text>
        </View>
        <View style={styles.fling}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector41.png")}
          />
          <Text style={[styles.fling1, styles.me1Typo]}>Fling</Text>
        </View>
        <View style={[styles.vibe, styles.meFlexBox]}>
          <Image
            style={styles.vibeIcon}
            contentFit="cover"
            source={require("../assets/vibe1.png")}
          />
          <Text style={[styles.vibe1, styles.me1Typo]}>Vibe</Text>
        </View>
        <View style={[styles.me, styles.meFlexBox]}>
          <Image
            style={styles.meIcon}
            contentFit="cover"
            source={require("../assets/me1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1meSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_6xs,
    flexDirection: "row",
    height: 68,
    width: 360,
    left: 20,
    position: "absolute",
    alignItems: "center",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
    height: 68,
    width: 360,
    position: "absolute",
  },
  navPosition: {
    zIndex: 1,
    marginLeft: 63,
    width: 37,
  },
  me1Typo: {
    textAlign: "center",
    color: Color.colorGray_1000,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    alignSelf: "stretch",
  },
  meFlexBox: {
    alignItems: "center",
    marginLeft: 63,
  },
  groupChild: {
    backgroundColor: Color.colorGray_200,
  },
  property1navBarInner: {
    zIndex: 0,
  },
  navIcon: {
    marginLeft: 63,
    height: 37,
  },
  vectorIcon: {
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
    width: 44,
    marginLeft: 63,
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
  },
  property1navBar: {
    top: 20,
  },
  chatIcon: {
    height: 37,
    width: 37,
  },
  chat: {
    marginTop: 5,
  },
  nav: {
    marginLeft: 63,
  },
  property1fling: {
    top: 117,
  },
  property1vibe: {
    top: 236,
  },
  property1me: {
    top: 346,
  },
  component1: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 400,
    height: 434,
    overflow: "hidden",
  },
});

export default Component;
