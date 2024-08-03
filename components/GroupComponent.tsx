import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

export type GroupComponentType = {
  eyesMeetTeam?: string;
  welcomeToEyesMeetThisTheS?: string;
  today1002Am?: string;

  /** Style props */
  propTop?: number | string;
  propLeft?: number | string;
  propLeft1?: number | string;
  propFontSize?: number;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent = ({
  propTop,
  eyesMeetTeam,
  propLeft,
  welcomeToEyesMeetThisTheS,
  propLeft1,
  propFontSize,
  today1002Am,
}: GroupComponentType) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const eyesMeetTeamStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const welcomeToEyesMeetThisStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
      ...getStyleValue("fontSize", propFontSize),
    };
  }, [propLeft1, propFontSize]);

  return (
    <View
      style={[
        styles.eyesmeetTeamParent,
        styles.groupChildPosition,
        groupViewStyle,
      ]}
    >
      <Text
        style={[styles.eyesmeetTeam, styles.today1002AmTypo, eyesMeetTeamStyle]}
      >
        {eyesMeetTeam}
      </Text>
      <Text
        style={[
          styles.welcomeToEyesmeetthis,
          styles.today1002AmTypo,
          welcomeToEyesMeetThisStyle,
        ]}
      >
        {welcomeToEyesMeetThisTheS}
      </Text>
      <Text style={[styles.today1002Am, styles.today1002AmTypo]}>
        {today1002Am}
      </Text>
      <Image
        style={[styles.groupChild, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/line-41.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  today1002AmTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  eyesmeetTeam: {
    top: 3,
    left: 58,
    fontSize: FontSize.size_mini,
    opacity: 0.9,
  },
  welcomeToEyesmeetthis: {
    top: 21,
    left: 59,
    fontSize: FontSize.m3LabelMedium_size,
    opacity: 0.5,
  },
  today1002Am: {
    top: 0,
    left: 243,
    fontSize: FontSize.size_sm,
    width: 116,
    height: 31,
    opacity: 0.4,
  },
  groupChild: {
    top: 43,
    height: 1,
  },
  eyesmeetTeamParent: {
    top: 150,
    height: 44,
  },
});

export default GroupComponent;
