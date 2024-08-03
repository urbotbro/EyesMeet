import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const PayAndService = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.payAndService}>
      <LinearGradient
        style={styles.payAndServiceChild}
        locations={[0, 1]}
        colors={["#9872eb", "#e871c5"]}
      />
      <View style={[styles.payAndServiceItem, styles.payLayout]} />
      <View style={[styles.payAndServiceInner, styles.payLayout]} />
      <View style={[styles.rectangleView, styles.payLayout]} />
      <View style={[styles.payAndServiceChild1, styles.payLayout]} />
      <Text style={[styles.specials, styles.healthTypo]}>Specials</Text>
      <Text style={[styles.eventsTickets, styles.eyesCoinsTypo]}>
        Events Tickets
      </Text>
      <Text
        style={[styles.lifestyleRetail, styles.healthTypo]}
      >{`Lifestyle &Retail`}</Text>
      <Text style={[styles.buyTogether, styles.buyTogetherTypo]}>
        Buy Together
      </Text>
      <Text style={[styles.flashSales, styles.healthTypo]}>Flash Sales</Text>
      <Text style={[styles.usedGoods, styles.healthTypo]}>Used Goods</Text>
      <Text style={[styles.shoppingMall, styles.buyTogetherTypo]}>
        Shopping Mall
      </Text>
      <Text style={[styles.needToVerify, styles.healthTypo]}>
        Need to verify identity
      </Text>
      <Text style={[styles.wallet, styles.moneyTypo]}>Wallet</Text>
      <Text style={[styles.money, styles.moneyTypo]}>Money</Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector52.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector61.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Text style={[styles.financialServices, styles.servicesTypo]}>
        Financial Services
      </Text>
      <Text style={[styles.dailyServices, styles.servicesTypo]}>
        Daily Services
      </Text>
      <Text
        style={[styles.travelTransportation, styles.servicesTypo]}
      >{`Travel & Transportation`}</Text>
      <Text
        style={[styles.shoppingEntertainment, styles.servicesTypo]}
      >{`Shopping & Entertainment`}</Text>
      <Text style={[styles.topUp, styles.topUpTypo]}>{`Top Up `}</Text>
      <Text style={[styles.utilities, styles.healthTypo]}>Utilities</Text>
      <Text style={[styles.eyesCoins, styles.eyesCoinsTypo]}>Eyes Coins</Text>
      <Text style={[styles.charity, styles.healthTypo]}>Charity</Text>
      <Text style={[styles.health, styles.healthTypo]}>Health</Text>
      <Text style={[styles.cardRepay, styles.healthTypo]}>Card Repay</Text>
      <Text style={[styles.travelServices, styles.topUpTypo]}>
        Travel Services
      </Text>
      <Text style={[styles.railway, styles.busTypo]}>Railway</Text>
      <Text style={[styles.flight, styles.busTypo]}>Flight</Text>
      <Text style={[styles.metro, styles.busTypo]}>Metro</Text>
      <Text style={[styles.bus, styles.busTypo]}>Bus</Text>
      <Text style={[styles.hotels, styles.busTypo]}>Hotels</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("PaymentManagement1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector8.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vector1}
        onPress={() => navigation.navigate("Me")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
      </Pressable>
      <Text style={styles.payAndServices}>Pay and Services</Text>
      <Image
        style={styles.vectorIcon3}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <Image
        style={styles.vectorIcon4}
        contentFit="cover"
        source={require("../assets/vector10.png")}
      />
      <Image
        style={styles.vectorIcon5}
        contentFit="cover"
        source={require("../assets/vector111.png")}
      />
      <Image
        style={styles.vectorIcon6}
        contentFit="cover"
        source={require("../assets/vector12.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector13.png")}
      />
      <Image
        style={styles.vectorIcon8}
        contentFit="cover"
        source={require("../assets/vector14.png")}
      />
      <Image
        style={styles.vectorIcon9}
        contentFit="cover"
        source={require("../assets/vector15.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector16.png")}
      />
      <Image
        style={[styles.vectorIcon11, styles.vectorIconPosition6]}
        contentFit="cover"
        source={require("../assets/vector17.png")}
      />
      <Image
        style={[styles.vectorIcon12, styles.vectorIconPosition4]}
        contentFit="cover"
        source={require("../assets/vector18.png")}
      />
      <Image
        style={[styles.vectorIcon13, styles.vectorIconPosition5]}
        contentFit="cover"
        source={require("../assets/vector19.png")}
      />
      <Image
        style={[styles.vectorIcon14, styles.vectorIconPosition3]}
        contentFit="cover"
        source={require("../assets/vector20.png")}
      />
      <Image
        style={[styles.vectorIcon15, styles.vectorIconPosition2]}
        contentFit="cover"
        source={require("../assets/vector211.png")}
      />
      <Image
        style={[styles.vectorIcon16, styles.vectorIconPosition2]}
        contentFit="cover"
        source={require("../assets/vector22.png")}
      />
      <Image
        style={[styles.vectorIcon17, styles.vectorIconPosition2]}
        contentFit="cover"
        source={require("../assets/vector23.png")}
      />
      <Image
        style={[styles.vectorIcon18, styles.vectorIconPosition2]}
        contentFit="cover"
        source={require("../assets/vector24.png")}
      />
      <Image
        style={[styles.vectorIcon19, styles.vectorIconPosition1]}
        contentFit="cover"
        source={require("../assets/vector25.png")}
      />
      <Image
        style={[styles.vectorIcon20, styles.vectorIconPosition1]}
        contentFit="cover"
        source={require("../assets/vector19.png")}
      />
      <Image
        style={[styles.vectorIcon21, styles.vectorIconPosition1]}
        contentFit="cover"
        source={require("../assets/vector26.png")}
      />
      <Image
        style={styles.vectorIcon22}
        contentFit="cover"
        source={require("../assets/vector27.png")}
      />
      <Image
        style={styles.vectorIcon23}
        contentFit="cover"
        source={require("../assets/vector28.png")}
      />
      <Image
        style={[styles.vectorIcon24, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector29.png")}
      />
      <Image
        style={[styles.vectorIcon25, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector30.png")}
      />
      <Image
        style={[styles.vectorIcon26, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector311.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  payLayout: {
    backgroundColor: Color.colorGray_200,
    width: 317,
    left: 23,
    position: "absolute",
    borderRadius: Border.br_8xs,
  },
  healthTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  eyesCoinsTypo: {
    left: 171,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_4xs,
    position: "absolute",
  },
  buyTogetherTypo: {
    left: 27,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_4xs,
    position: "absolute",
  },
  moneyTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  servicesTypo: {
    opacity: 0.6,
    left: 27,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_4xs,
    position: "absolute",
  },
  topUpTypo: {
    left: 30,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_4xs,
    position: "absolute",
  },
  busTypo: {
    top: 550,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_4xs,
    position: "absolute",
  },
  vectorIconPosition6: {
    bottom: "51.63%",
    top: "48.13%",
    height: "0.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition4: {
    right: "87.5%",
    width: "0.28%",
    left: "12.22%",
  },
  vectorIconPosition5: {
    width: "0.28%",
    right: "86.94%",
    left: "12.78%",
  },
  vectorIconPosition3: {
    left: "13.33%",
    width: "0.56%",
    right: "86.11%",
  },
  vectorIconPosition2: {
    bottom: "51.38%",
    top: "48.5%",
    height: "0.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition1: {
    bottom: "51%",
    top: "48.75%",
    height: "0.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    top: "50.13%",
    bottom: "49.75%",
    height: "0.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  payAndServiceChild: {
    top: 71,
    backgroundColor: "transparent",
    height: 120,
    width: 317,
    left: 23,
    position: "absolute",
    borderRadius: Border.br_8xs,
  },
  payAndServiceItem: {
    top: 211,
    height: 120,
  },
  payAndServiceInner: {
    top: 364,
    height: 120,
  },
  rectangleView: {
    top: 511,
    height: 120,
  },
  payAndServiceChild1: {
    top: 642,
    height: 139,
  },
  specials: {
    left: 108,
    color: Color.colorWhite,
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    top: 683,
  },
  eventsTickets: {
    top: 683,
  },
  lifestyleRetail: {
    left: 265,
    color: Color.colorWhite,
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    top: 683,
  },
  buyTogether: {
    top: 748,
  },
  flashSales: {
    left: 101,
    top: 748,
    color: Color.colorWhite,
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  usedGoods: {
    left: 188,
    top: 748,
    color: Color.colorWhite,
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  shoppingMall: {
    top: 683,
  },
  needToVerify: {
    top: 134,
    left: 214,
    fontSize: FontSize.size_6xs,
    color: Color.colorGray_1200,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  wallet: {
    top: 121,
    left: 232,
  },
  money: {
    top: 118,
    left: 38,
  },
  vectorIcon: {
    height: "2.13%",
    width: "4.72%",
    right: "80.56%",
    bottom: "85.75%",
    left: "14.72%",
    top: "12.13%",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "1%",
    width: "2.78%",
    top: "12.75%",
    right: "81.39%",
    bottom: "86.25%",
    left: "15.83%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "2.19%",
    width: "5.97%",
    right: "26.53%",
    bottom: "85.69%",
    left: "67.5%",
    top: "12.13%",
    maxWidth: "100%",
    position: "absolute",
  },
  financialServices: {
    top: 211,
  },
  dailyServices: {
    top: 364,
  },
  travelTransportation: {
    top: 511,
  },
  shoppingEntertainment: {
    top: 644,
  },
  topUp: {
    top: 403,
  },
  utilities: {
    left: 95,
    top: 403,
    color: Color.colorWhite,
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  eyesCoins: {
    top: 403,
  },
  charity: {
    left: 267,
    top: 403,
    color: Color.colorWhite,
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  health: {
    top: 446,
    left: 32,
    color: Color.colorWhite,
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  cardRepay: {
    top: 260,
    opacity: 0.9,
    left: 32,
    color: Color.colorWhite,
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  travelServices: {
    top: 593,
  },
  railway: {
    left: 129,
  },
  flight: {
    left: 207,
  },
  metro: {
    left: 276,
  },
  bus: {
    left: 32,
  },
  hotels: {
    left: 75,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "90.28%",
    top: "1.13%",
    right: "2.5%",
    bottom: "98.13%",
    width: "7.22%",
    height: "0.75%",
    position: "absolute",
  },
  vector1: {
    left: "3.89%",
    top: "1.38%",
    right: "93.89%",
    bottom: "96.75%",
    width: "2.22%",
    height: "1.88%",
    position: "absolute",
  },
  payAndServices: {
    top: 4,
    left: 128,
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelMedium,
    textAlign: "center",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  vectorIcon3: {
    height: "2.25%",
    top: "30%",
    bottom: "67.75%",
    left: "11.67%",
    right: "80.28%",
    width: "8.06%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon4: {
    top: "30.38%",
    bottom: "69.13%",
    height: "0.5%",
    left: "11.67%",
    right: "80.28%",
    width: "8.06%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon5: {
    width: "6.39%",
    right: "81.11%",
    bottom: "68.25%",
    left: "12.5%",
    top: "31.25%",
    height: "0.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon6: {
    height: "0.38%",
    width: "5.56%",
    right: "81.67%",
    bottom: "68.38%",
    left: "12.78%",
    top: "31.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon7: {
    height: "2.75%",
    width: "3.06%",
    top: "47.75%",
    right: "85.83%",
    bottom: "49.5%",
    left: "11.11%",
    position: "absolute",
  },
  vectorIcon8: {
    height: "2.38%",
    top: "48%",
    bottom: "49.63%",
    left: "11.39%",
    right: "86.11%",
    width: "2.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon9: {
    width: "0.83%",
    top: "47.88%",
    height: 0,
    left: "12.22%",
    right: "86.94%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon11: {
    right: "88.06%",
    width: "0.56%",
    left: "11.39%",
  },
  vectorIcon12: {
    bottom: "51.63%",
    top: "48.13%",
    height: "0.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon13: {
    bottom: "51.63%",
    top: "48.13%",
    height: "0.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon14: {
    bottom: "51.63%",
    top: "48.13%",
    height: "0.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon15: {
    right: "88.06%",
    width: "0.56%",
    left: "11.39%",
  },
  vectorIcon16: {
    right: "87.5%",
    width: "0.28%",
    left: "12.22%",
  },
  vectorIcon17: {
    width: "0.28%",
    right: "86.94%",
    left: "12.78%",
  },
  vectorIcon18: {
    left: "13.33%",
    width: "0.56%",
    right: "86.11%",
  },
  vectorIcon19: {
    right: "88.06%",
    width: "0.56%",
    left: "11.39%",
  },
  vectorIcon20: {
    right: "87.5%",
    width: "0.28%",
    left: "12.22%",
  },
  vectorIcon21: {
    width: "0.28%",
    right: "86.94%",
    left: "12.78%",
  },
  vectorIcon22: {
    height: "0.63%",
    bottom: "50.63%",
    top: "48.75%",
    left: "11.39%",
    right: "86.11%",
    width: "2.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon23: {
    height: "1.13%",
    width: "1.11%",
    top: "49.13%",
    bottom: "49.75%",
    right: "87.5%",
    left: "11.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon24: {
    right: "87.5%",
    width: "0.28%",
    left: "12.22%",
  },
  vectorIcon25: {
    width: "0.28%",
    right: "86.94%",
    left: "12.78%",
  },
  vectorIcon26: {
    left: "13.33%",
    width: "0.56%",
    right: "86.11%",
  },
  payAndService: {
    backgroundColor: Color.colorBlack,
    width: 360,
    height: 800,
    overflow: "hidden",
    borderRadius: Border.br_8xs,
  },
});

export default PayAndService;
