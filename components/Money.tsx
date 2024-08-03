import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Money = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={[styles.money, styles.moneyBg]}
      locations={[0, 1]}
      colors={["#9872eb", "#e871c5"]}
    >
      <View style={styles.moneyChild} />
      <Text style={[styles.eyesmeetPayEnsures, styles.paymentCodeTypo]}>
        EyesMeet Pay ensures the security of your funds.
      </Text>
      <Text style={[styles.youHaveReadContainer, styles.paymentCodeTypo]}>
        <Text
          style={styles.youHaveRead}
        >{`You have read and agree to thr `}</Text>
        “Payment User Service Agreement”
      </Text>
      <Text style={styles.quickPayNot}>
        Quick pay not enabled.Enable it to make paying merchants fast and easy -
        Flast the code and go.
      </Text>
      <Text style={[styles.paymentCode, styles.paymentCodeTypo]}>
        Payment Code
      </Text>
      <Text style={[styles.money1, styles.money1Typo]}>Money</Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector87.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector88.png")}
      />
      <Image
        style={styles.vectorIcon2}
        contentFit="cover"
        source={require("../assets/vector89.png")}
      />
      <Image
        style={styles.moneyItem}
        contentFit="cover"
        source={require("../assets/ellipse-47.png")}
      />
      <LinearGradient
        style={[styles.moneyInner, styles.moneyBg]}
        locations={[0, 1]}
        colors={["#9872eb", "#e871c5"]}
      />
      <Text style={[styles.enable, styles.money1Typo]}>Enable</Text>
      <Image
        style={[styles.vectorIcon3, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector90.png")}
      />
      <Image
        style={styles.vectorIcon4}
        contentFit="cover"
        source={require("../assets/vector91.png")}
      />
      <LinearGradient
        style={[styles.rectangleLineargradient, styles.moneyBg]}
        locations={[0, 1]}
        colors={["rgba(152, 114, 235, 0.4)", "rgba(232, 113, 197, 0.4)"]}
      />
      <Text
        style={[styles.transferToBank, styles.splitBillTypo]}
      >{`Transfer to Bank Card/Mobile No. `}</Text>
      <Text style={[styles.splitBill, styles.splitBillTypo]}>Split Bill</Text>
      <Text style={[styles.rewardCode, styles.splitBillTypo]}>Reward Code</Text>
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector92.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector92.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector92.png")}
      />
      <Image
        style={[styles.vectorIcon8, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector92.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group31.png")}
      />
      <Text style={[styles.receiveMoney, styles.splitBillTypo]}>
        Receive Money
      </Text>
      <Image
        style={[styles.vectorIcon9, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector93.png")}
      />
      <Image
        style={[styles.vectorIcon10, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector94.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group4.png")}
      />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.moneyChild1, styles.moneyChildPosition]} />
      <View style={[styles.moneyChild2, styles.lineViewLayout]} />
      <View style={[styles.moneyChild3, styles.moneyChildPosition]} />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector95.png")}
        />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  moneyBg: {
    backgroundColor: "transparent",
    borderRadius: Border.br_8xs,
  },
  paymentCodeTypo: {
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  money1Typo: {
    color: Color.colorWhite,
    fontSize: FontSize.m3LabelMedium_size,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  splitBillTypo: {
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    left: 75,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  vectorIconLayout1: {
    height: 10,
    width: 5,
    left: 336,
    position: "absolute",
  },
  vectorIconLayout: {
    right: "85.72%",
    height: "3.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lineViewLayout: {
    height: 1,
    width: 347,
    borderTopWidth: 1,
    borderColor: Color.colorGray_500,
    borderStyle: "solid",
    left: 7,
    position: "absolute",
  },
  moneyChildPosition: {
    left: 8,
    height: 1,
    width: 347,
    borderTopWidth: 1,
    borderColor: Color.colorGray_500,
    borderStyle: "solid",
    position: "absolute",
  },
  moneyChild: {
    top: 49,
    left: 6,
    backgroundColor: Color.colorWhite,
    width: 348,
    height: 456,
    position: "absolute",
    borderRadius: Border.br_8xs,
  },
  eyesmeetPayEnsures: {
    top: 486,
    left: 97,
    fontSize: FontSize.size_5xs,
    color: Color.colorSilver,
    textAlign: "center",
  },
  youHaveRead: {
    color: Color.colorBlack,
  },
  youHaveReadContainer: {
    top: 252,
    left: 94,
    fontSize: FontSize.size_4xs,
    width: 189,
    height: 22,
    textAlign: "center",
  },
  quickPayNot: {
    top: 188,
    left: 66,
    width: 238,
    height: 19,
    fontSize: FontSize.m3LabelMedium_size,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  paymentCode: {
    top: 73,
    left: 56,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  money1: {
    top: 3,
    left: 156,
    textAlign: "left",
  },
  vectorIcon: {
    height: "2.25%",
    width: "5.56%",
    top: "9.25%",
    right: "87.5%",
    bottom: "88.5%",
    left: "6.94%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "1.25%",
    width: "3.06%",
    top: "9.75%",
    right: "88.61%",
    bottom: "89%",
    left: "8.33%",
    position: "absolute",
  },
  vectorIcon2: {
    width: "7.78%",
    top: "17.5%",
    right: "47.22%",
    bottom: "79%",
    left: "45%",
    height: "3.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  moneyItem: {
    top: 254,
    left: 91,
    width: 8,
    height: 7,
    position: "absolute",
  },
  moneyInner: {
    top: 288,
    left: 138,
    width: 94,
    height: 24,
    position: "absolute",
  },
  enable: {
    top: 292,
    left: 168,
    textAlign: "center",
  },
  vectorIcon3: {
    height: "1%",
    width: "2.22%",
    top: "61%",
    right: "73.33%",
    bottom: "38%",
    left: "24.44%",
    position: "absolute",
  },
  vectorIcon4: {
    top: 488,
    left: 287,
    width: 4,
    height: 6,
    position: "absolute",
  },
  rectangleLineargradient: {
    left: 354,
    width: 346,
    height: 214,
    transform: [
      {
        rotate: "179.8deg",
      },
    ],
    top: 774,
    position: "absolute",
  },
  transferToBank: {
    top: 740,
  },
  splitBill: {
    top: 691,
  },
  rewardCode: {
    top: 641,
  },
  vectorIcon5: {
    top: 586,
  },
  vectorIcon6: {
    top: 643,
  },
  vectorIcon7: {
    top: 699,
  },
  vectorIcon8: {
    top: 743,
  },
  groupIcon: {
    top: 569,
    left: 15,
    width: 48,
    height: 134,
    position: "absolute",
  },
  receiveMoney: {
    top: 582,
  },
  vectorIcon9: {
    top: "78.83%",
    bottom: "17.67%",
    left: "6.22%",
    width: "8.06%",
  },
  vectorIcon10: {
    width: "6.11%",
    top: "85.58%",
    bottom: "10.92%",
    left: "8.17%",
  },
  groupIcon1: {
    height: "3.63%",
    top: "91.7%",
    right: "84.33%",
    bottom: "4.67%",
    left: "7.61%",
    width: "8.06%",
    position: "absolute",
  },
  lineView: {
    top: 616,
  },
  moneyChild1: {
    top: 669,
  },
  moneyChild2: {
    top: 723,
  },
  moneyChild3: {
    top: 774,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "2.78%",
    top: "1%",
    right: "94.72%",
    bottom: "97.25%",
    width: "2.5%",
    height: "1.75%",
    position: "absolute",
  },
  money: {
    width: 360,
    height: 800,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default Money;
