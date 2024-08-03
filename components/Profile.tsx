import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.profile}>
      <View style={styles.profileChild} />
      <Image
        style={styles.profileItem}
        contentFit="cover"
        source={require("../assets/ellipse-71.png")}
      />
      <Text style={[styles.profilePhoto, styles.nameTypo]}>Profile Photo</Text>
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Text style={[styles.tickle, styles.nameTypo]}>Tickle</Text>
      <Text style={[styles.eyesmeetId, styles.nameTypo]}>EyesMeet ID</Text>
      <Text style={[styles.myQrCode, styles.nameTypo]}>My QR Code</Text>
      <Pressable
        style={[styles.more, styles.namePosition]}
        onPress={() => navigation.navigate("ProfileMore1")}
      >
        <Text style={styles.nameTypo}>More</Text>
      </Pressable>
      <View style={styles.profileInner} />
      <Text style={[styles.myAddress, styles.nameTypo]}>My Address</Text>
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
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector76.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector76.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector76.png")}
      />
      <Pressable
        style={[styles.vector, styles.vectorIconLayout]}
        onPress={() => navigation.navigate("ProfileMore1")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/vector76.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector76.png")}
      />
      <Pressable
        style={styles.vector1}
        onPress={() => navigation.navigate("Me")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  nameTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.m3LabelMedium_size,
    opacity: 0.8,
  },
  namePosition: {
    left: 9,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 10,
    width: 5,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  profileChild: {
    top: 61,
    backgroundColor: Color.colorGray_200,
    height: 238,
    opacity: 0.8,
    left: 0,
    position: "absolute",
    width: 360,
  },
  profileItem: {
    top: 66,
    left: 299,
    width: 44,
    height: 39,
    position: "absolute",
  },
  profilePhoto: {
    top: 79,
    left: 9,
    position: "absolute",
  },
  name: {
    top: 115,
    left: 9,
    position: "absolute",
  },
  tickle: {
    top: 151,
    left: 9,
    position: "absolute",
  },
  eyesmeetId: {
    top: 191,
    left: 9,
    position: "absolute",
  },
  myQrCode: {
    top: 231,
    left: 7,
    position: "absolute",
  },
  more: {
    top: 271,
  },
  profileInner: {
    top: 327,
    backgroundColor: Color.colorGray_300,
    height: 43,
    left: 0,
    position: "absolute",
    width: 360,
  },
  myAddress: {
    top: 341,
    left: 9,
    position: "absolute",
  },
  vectorIcon: {
    top: 82,
    left: 349,
    width: 5,
  },
  vectorIcon1: {
    top: 127,
    left: 349,
    width: 5,
  },
  vectorIcon2: {
    top: 163,
    left: 349,
    width: 5,
  },
  vectorIcon3: {
    top: 202,
    left: 349,
    width: 5,
  },
  vectorIcon4: {
    top: 233,
    left: 349,
    width: 5,
  },
  vector: {
    top: 273,
    left: 349,
    width: 5,
  },
  vectorIcon5: {
    top: 339,
    left: 352,
  },
  icon1: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector1: {
    left: "1.94%",
    top: "1.25%",
    right: "95.83%",
    bottom: "96.88%",
    width: "2.22%",
    height: "1.88%",
    position: "absolute",
  },
  profile: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorBlack,
    height: 800,
    overflow: "hidden",
    width: 360,
  },
});

export default Profile;
