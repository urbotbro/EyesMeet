import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const PaymentManagement = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.paymentManagement}>
      <View style={[styles.paymentManagementChild, styles.paymentLayout]} />
      <View style={[styles.paymentManagementItem, styles.paymentLayout]} />
      <Text style={[styles.manageServices, styles.manageServicesPosition]}>
        Manage Services
      </Text>
      <View style={[styles.paymentManagementInner, styles.paymentLayout]} />
      <Text style={[styles.receiveTransfersVia, styles.manageServicesPosition]}>
        Receive Transfers via Mobile Number
      </Text>
      <Text style={[styles.realNameAuthentication, styles.verifyTypo1]}>
        Real-Name Authentication
      </Text>
      <Text style={[styles.verify, styles.verifyTypo]}>Verify</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector76.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector76.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group21.png")}
      />
      <Text style={[styles.otherUsersCanContainer, styles.manageServicesTypo]}>
        <Text
          style={styles.otherUsersCan}
        >{`Other users can transfer money to your eyes pay balance via your mobile number linked to eyes in "Money" > "Transfer to Bank Card/Mobile No."By enabling this feature, you accept the `}</Text>
        Terms Of Service
        <Text style={styles.otherUsersCan}>.</Text>
      </Text>
      <Text style={[styles.paymentManagement1, styles.verifyTypo]}>
        Payment Management
      </Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("PayAndService1")}
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
  paymentLayout: {
    height: 45,
    backgroundColor: Color.colorGray_200,
    left: 0,
    position: "absolute",
    width: 360,
  },
  manageServicesPosition: {
    opacity: 0.8,
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    letterSpacing: 1,
    left: 6,
    position: "absolute",
  },
  verifyTypo1: {
    top: 57,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoRegular,
  },
  verifyTypo: {
    fontSize: FontSize.size_smi,
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 10,
    width: 5,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  manageServicesTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  paymentManagementChild: {
    top: 42,
  },
  paymentManagementItem: {
    top: 242,
  },
  manageServices: {
    top: 257,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhite,
    opacity: 0.8,
    fontSize: FontSize.size_sm,
  },
  paymentManagementInner: {
    top: 109,
  },
  receiveTransfersVia: {
    top: 116,
    width: 184,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhite,
    opacity: 0.8,
    fontSize: FontSize.size_sm,
  },
  realNameAuthentication: {
    opacity: 0.8,
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    letterSpacing: 1,
    left: 6,
    position: "absolute",
    top: 57,
  },
  verify: {
    left: 306,
    opacity: 0.5,
    top: 57,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoRegular,
  },
  vectorIcon: {
    top: 60,
    left: 350,
  },
  vectorIcon1: {
    top: 261,
    left: 348,
  },
  groupIcon: {
    height: "1.26%",
    width: "5.56%",
    top: "15.54%",
    right: "3.86%",
    bottom: "83.2%",
    left: "90.58%",
    position: "absolute",
  },
  otherUsersCan: {
    color: Color.colorDimgray_100,
  },
  otherUsersCanContainer: {
    top: 165,
    fontSize: FontSize.size_4xs,
    width: 344,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 16,
    letterSpacing: 1,
    left: 6,
    position: "absolute",
  },
  paymentManagement1: {
    top: 4,
    left: 110,
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelMedium,
    textAlign: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "2.78%",
    top: "1%",
    right: "95%",
    bottom: "97.13%",
    width: "2.22%",
    height: "1.88%",
    position: "absolute",
  },
  paymentManagement: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorBlack,
    height: 800,
    overflow: "hidden",
    width: 360,
  },
});

export default PaymentManagement;
