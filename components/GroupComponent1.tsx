import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

export type GroupComponent1Type = {
  tomiokaGiyuu?: string;

  /** Style props */
  vectorIconTop?: number | string;
  vectorIconLeft?: number | string;
  propLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent1 = ({
  vectorIconTop,
  tomiokaGiyuu,
  vectorIconLeft,
  propLeft,
}: GroupComponent1Type) => {
  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("top", vectorIconTop),
    };
  }, [vectorIconTop]);

  const tomiokaGiyuuStyle = useMemo(() => {
    return {
      ...getStyleValue("left", vectorIconLeft),
    };
  }, [vectorIconLeft]);

  const vectorIconStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View
      style={[styles.rectangleParent, styles.rectangleLayout, groupView1Style]}
    >
      <Image
        style={[styles.groupChild, styles.rectangleLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-15.png")}
      />
      <Image
        style={styles.groupItem}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.tomiokaGiyuu, tomiokaGiyuuStyle]}>
        {tomiokaGiyuu}
      </Text>
      <View style={[styles.groupInner, styles.groupInnerBorder]} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector81.png")}
      />
      <Text style={[styles.status, styles.textTypo]}>Status</Text>
      <View style={[styles.rectangleView, styles.groupInnerBorder]} />
      <Image
        style={styles.vectorIcon1}
        contentFit="cover"
        source={require("../assets/vector82.png")}
      />
      <Image
        style={styles.vectorIcon2}
        contentFit="cover"
        source={require("../assets/vector83.png")}
      />
      <Image
        style={styles.vectorIcon3}
        contentFit="cover"
        source={require("../assets/vector84.png")}
      />
      <Image
        style={[styles.vectorIcon4, vectorIconStyle]}
        contentFit="cover"
        source={require("../assets/vector85.png")}
      />
      <Text style={[styles.bio, styles.bioTypo]}>BIO</Text>
      <Text style={[styles.text, styles.textTypo]}>:</Text>
      <Text style={[styles.study, styles.bioTypo]}>Study :</Text>
      <Text style={[styles.letsMakeSome, styles.textTypo]}>
        Let’s make some questionable decisions together.
      </Text>
      <Text style={[styles.nigatolaUniversityOf, styles.textTypo]}>
        Nigatola university of technology,NUET
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    width: 247,
    left: 0,
  },
  groupInnerBorder: {
    borderWidth: 1,
    borderColor: Color.colorMediumpurple_100,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  bioTypo: {
    left: 6,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhite,
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  groupChild: {
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    height: 124,
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupItem: {
    top: 58,
    left: 2,
    width: 69,
    height: 66,
    position: "absolute",
  },
  tomiokaGiyuu: {
    top: 87,
    left: 72,
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelMedium,
    textAlign: "center",
    color: Color.colorWhite,
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  groupInner: {
    top: 102,
    left: 74,
    borderRadius: Border.br_3xs,
    width: 41,
    height: 11,
  },
  vectorIcon: {
    top: 106,
    left: 82,
    width: 3,
    height: 3,
    position: "absolute",
  },
  status: {
    top: 100,
    left: 86,
    color: Color.colorGray_600,
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.robotoRegular,
  },
  rectangleView: {
    top: 123,
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 108,
    width: 247,
    left: 0,
  },
  vectorIcon1: {
    top: 209,
    left: 167,
    width: 5,
    height: 7,
    position: "absolute",
  },
  vectorIcon2: {
    top: 207,
    left: 152,
    width: 16,
    height: 13,
    position: "absolute",
  },
  vectorIcon3: {
    top: 201,
    left: 157,
    width: 7,
    height: 15,
    position: "absolute",
  },
  vectorIcon4: {
    top: 202,
    left: 49,
    width: 23,
    height: 20,
    position: "absolute",
  },
  bio: {
    top: 131,
  },
  text: {
    top: 130,
    left: 36,
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_3xs,
  },
  study: {
    top: 147,
  },
  letsMakeSome: {
    left: 41,
    top: 131,
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhite,
  },
  nigatolaUniversityOf: {
    top: 148,
    left: 42,
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhite,
  },
  rectangleParent: {
    height: 231,
    top: 0,
    left: 0,
    position: "absolute",
  },
});

export default GroupComponent1;
