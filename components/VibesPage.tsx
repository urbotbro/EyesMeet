import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const VibesPage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.vibesPage}>
      <Text style={styles.vibe}>Vibe</Text>
      <View style={styles.groupParent}>
        <View style={[styles.rectangleParent, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.tomiokaGiyuu, styles.sendTypo]}>
            Tomioka Giyuu
          </Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector32.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.sendLayout]}
            contentFit="cover"
            source={require("../assets/vector33.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector34.png")}
          />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector35.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>4</Text>
          <Text style={[styles.text1, styles.textTypo]}>4</Text>
          <Text style={[styles.text2, styles.textTypo]}>4</Text>
          <Image
            style={styles.vectorIcon4}
            contentFit="cover"
            source={require("../assets/vector36.png")}
          />
          <Text style={[styles.send, styles.sendLayout]}>send</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.tomiokaGiyuu, styles.sendTypo]}>
            Tomioka Giyuu
          </Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector32.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.sendLayout]}
            contentFit="cover"
            source={require("../assets/vector33.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector34.png")}
          />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector35.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>4</Text>
          <Text style={[styles.text1, styles.textTypo]}>4</Text>
          <Text style={[styles.text2, styles.textTypo]}>4</Text>
          <Image
            style={styles.vectorIcon4}
            contentFit="cover"
            source={require("../assets/vector36.png")}
          />
          <Text style={[styles.send, styles.sendLayout]}>send</Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.tomiokaGiyuu, styles.sendTypo]}>
            Tomioka Giyuu
          </Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector32.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.sendLayout]}
            contentFit="cover"
            source={require("../assets/vector33.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector34.png")}
          />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector35.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>4</Text>
          <Text style={[styles.text1, styles.textTypo]}>4</Text>
          <Text style={[styles.text2, styles.textTypo]}>4</Text>
          <Image
            style={styles.vectorIcon4}
            contentFit="cover"
            source={require("../assets/vector36.png")}
          />
          <Text style={[styles.send, styles.sendLayout]}>send</Text>
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.tomiokaGiyuu, styles.sendTypo]}>
            Tomioka Giyuu
          </Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector32.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.sendLayout]}
            contentFit="cover"
            source={require("../assets/vector33.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector34.png")}
          />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector35.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>4</Text>
          <Text style={[styles.text1, styles.textTypo]}>4</Text>
          <Text style={[styles.text2, styles.textTypo]}>4</Text>
          <Image
            style={styles.vectorIcon4}
            contentFit="cover"
            source={require("../assets/vector36.png")}
          />
          <Text style={[styles.send, styles.sendLayout]}>send</Text>
        </View>
      </View>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Vibe")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 708,
    left: 0,
    position: "absolute",
    width: 360,
  },
  sendTypo: {
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  sendLayout: {
    height: 14,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 11,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_3xs,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  vibe: {
    top: 5,
    left: 162,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  groupChild: {
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    top: 0,
    height: 708,
  },
  tomiokaGiyuu: {
    top: 644,
    left: 19,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  vectorIcon: {
    height: "1.13%",
    width: "3.06%",
    top: "85.03%",
    right: "3.33%",
    bottom: "13.84%",
    left: "93.61%",
    position: "absolute",
  },
  vectorIcon1: {
    top: 576,
    left: 337,
    width: 10,
  },
  vectorIcon2: {
    top: 512,
    left: 339,
    width: 10,
  },
  vectorIcon3: {
    top: 544,
    left: 336,
    width: 13,
  },
  text: {
    top: 499,
    left: 339,
  },
  text1: {
    top: 527,
    left: 338,
  },
  text2: {
    top: 560,
    left: 340,
  },
  vectorIcon4: {
    top: 517,
    left: 335,
    width: 4,
    height: 6,
    position: "absolute",
  },
  send: {
    top: 609,
    left: 332,
    fontSize: FontSize.size_6xs,
    width: 23,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
  },
  rectangleParent: {
    top: 0,
    height: 708,
  },
  rectangleGroup: {
    top: 1570,
  },
  rectangleContainer: {
    top: 785,
  },
  groupView: {
    top: 2355,
  },
  groupParent: {
    top: 99,
    height: 3063,
    left: 0,
    position: "absolute",
    width: 360,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "3.06%",
    top: "1.63%",
    right: "94.72%",
    bottom: "96.5%",
    width: "2.22%",
    height: "1.88%",
    position: "absolute",
  },
  vibesPage: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorBlack,
    height: 800,
    width: 360,
  },
});

export default VibesPage;
