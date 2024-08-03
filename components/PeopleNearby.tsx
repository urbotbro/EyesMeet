import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const PeopleNearby = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.peopleNearby}>
      <View style={styles.peopleNearbyInner}>
        <View style={styles.rectangleParent}>
          <Pressable
            style={[styles.groupChild, styles.groupChildLayout5]}
            onPress={() => navigation.navigate("UserProfile")}
          />
          <View style={[styles.groupItem, styles.groupChildLayout5]} />
          <View style={[styles.groupInner, styles.groupChildLayout5]} />
          <View style={[styles.rectangleView, styles.groupChildLayout5]} />
          <View style={[styles.groupChild1, styles.groupChildLayout5]} />
          <View style={[styles.groupChild2, styles.groupChildLayout5]} />
          <View style={[styles.groupChild3, styles.groupChildLayout5]} />
          <View style={[styles.groupChild4, styles.groupChildLayout5]} />
          <View style={[styles.groupChild5, styles.groupChildLayout5]} />
          <View style={[styles.groupChild6, styles.groupChildLayout5]} />
          <View style={[styles.groupChild7, styles.groupChildLayout5]} />
          <View style={[styles.groupChild8, styles.groupChildLayout5]} />
          <View style={[styles.groupChild9, styles.groupChildLayout5]} />
          <View style={[styles.groupChild10, styles.groupChildLayout5]} />
          <View style={[styles.groupChild11, styles.groupChildLayout5]} />
          <View style={[styles.groupChild12, styles.groupChildLayout5]} />
          <View style={[styles.groupChild13, styles.groupChildLayout5]} />
          <View style={[styles.groupChild14, styles.groupChildLayout5]} />
          <View style={[styles.groupChild15, styles.groupChildLayout5]} />
          <View style={[styles.groupChild16, styles.groupChildLayout5]} />
          <View style={[styles.groupChild17, styles.groupChildLayout5]} />
          <View style={[styles.groupChild18, styles.groupChildLayout5]} />
          <View style={[styles.groupChild19, styles.groupChildLayout5]} />
          <View style={[styles.groupChild20, styles.groupChildLayout5]} />
          <View style={[styles.groupChild21, styles.groupChildLayout5]} />
          <View style={[styles.groupChild22, styles.groupChildLayout5]} />
          <View style={[styles.groupChild23, styles.groupChildLayout5]} />
          <View style={[styles.groupChild24, styles.groupChildLayout5]} />
          <View style={[styles.groupChild25, styles.groupChildLayout5]} />
          <View style={[styles.groupChild26, styles.groupChildLayout5]} />
          <View style={[styles.groupChild27, styles.groupChildLayout5]} />
          <View style={[styles.groupChild28, styles.groupChildLayout5]} />
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconPosition2]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconPosition1]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon4, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon5, styles.vectorIconPosition2]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon6, styles.vectorIconPosition1]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon7, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon8, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon9, styles.vectorIconPosition2]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon10, styles.vectorIconPosition1]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon11, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon12, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon13, styles.vectorIconPosition2]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon14, styles.vectorIconPosition1]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon15, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon16, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon17, styles.vectorIconPosition2]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon18, styles.vectorIconPosition1]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon19, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon20, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon21, styles.vectorIconPosition2]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon22, styles.vectorIconPosition1]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon23, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon24, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon25, styles.vectorIconPosition2]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon26, styles.vectorIconPosition1]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon27, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon28, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon29, styles.vectorIconPosition2]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon30, styles.vectorIconPosition1]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.vectorIcon31, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector37.png")}
          />
          <Image
            style={[styles.ellipseIcon, styles.groupChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild29, styles.groupChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild30, styles.groupChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild31, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild32, styles.groupChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild33, styles.groupChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild34, styles.groupChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild35, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild36, styles.groupChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild37, styles.groupChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild38, styles.groupChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild39, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild40, styles.groupChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild41, styles.groupChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild42, styles.groupChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild43, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild44, styles.groupChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild45, styles.groupChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild46, styles.groupChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild47, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild48, styles.groupChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild49, styles.groupChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild50, styles.groupChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild51, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild52, styles.groupChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild53, styles.groupChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild54, styles.groupChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild55, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild56, styles.groupChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild57, styles.groupChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild58, styles.groupChildLayout4]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Image
            style={[styles.groupChild59, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-15.png")}
          />
          <Text style={[styles.within40m, styles.within40mTypo3]}>
            within 40m
          </Text>
          <Text style={[styles.within40m1, styles.within40mTypo2]}>
            within 40m
          </Text>
          <Text style={[styles.within40m2, styles.within40mTypo1]}>
            within 40m
          </Text>
          <Text style={[styles.within40m3, styles.within40mTypo]}>
            within 40m
          </Text>
          <Text style={[styles.within40m4, styles.within40mTypo3]}>
            within 40m
          </Text>
          <Text style={[styles.within40m5, styles.within40mTypo2]}>
            within 40m
          </Text>
          <Text style={[styles.within40m6, styles.within40mTypo1]}>
            within 40m
          </Text>
          <Text style={[styles.within40m7, styles.within40mTypo]}>
            within 40m
          </Text>
          <Text style={[styles.within40m8, styles.within40mTypo3]}>
            within 40m
          </Text>
          <Text style={[styles.within40m9, styles.within40mTypo2]}>
            within 40m
          </Text>
          <Text style={[styles.within40m10, styles.within40mTypo1]}>
            within 40m
          </Text>
          <Text style={[styles.within40m11, styles.within40mTypo]}>
            within 40m
          </Text>
          <Text style={[styles.within40m12, styles.within40mTypo3]}>
            within 40m
          </Text>
          <Text style={[styles.within40m13, styles.within40mTypo2]}>
            within 40m
          </Text>
          <Text style={[styles.within40m14, styles.within40mTypo1]}>
            within 40m
          </Text>
          <Text style={[styles.within40m15, styles.within40mTypo]}>
            within 40m
          </Text>
          <Text style={[styles.within40m16, styles.within40mTypo3]}>
            within 40m
          </Text>
          <Text style={[styles.within40m17, styles.within40mTypo2]}>
            within 40m
          </Text>
          <Text style={[styles.within40m18, styles.within40mTypo1]}>
            within 40m
          </Text>
          <Text style={[styles.within40m19, styles.within40mTypo]}>
            within 40m
          </Text>
          <Text style={[styles.within40m20, styles.within40mTypo3]}>
            within 40m
          </Text>
          <Text style={[styles.within40m21, styles.within40mTypo2]}>
            within 40m
          </Text>
          <Text style={[styles.within40m22, styles.within40mTypo1]}>
            within 40m
          </Text>
          <Text style={[styles.within40m23, styles.within40mTypo]}>
            within 40m
          </Text>
          <Text style={[styles.within40m24, styles.within40mTypo3]}>
            within 40m
          </Text>
          <Text style={[styles.within40m25, styles.within40mTypo2]}>
            within 40m
          </Text>
          <Text style={[styles.within40m26, styles.within40mTypo1]}>
            within 40m
          </Text>
          <Text style={[styles.within40m27, styles.within40mTypo]}>
            within 40m
          </Text>
          <Text style={[styles.within40m28, styles.within40mTypo3]}>
            within 40m
          </Text>
          <Text style={[styles.within40m29, styles.within40mTypo2]}>
            within 40m
          </Text>
          <Text style={[styles.within40m30, styles.within40mTypo1]}>
            within 40m
          </Text>
          <Text style={[styles.within40m31, styles.within40mTypo]}>
            within 40m
          </Text>
          <Text style={[styles.tomiokaGiyuu, styles.tomiokaTypo2]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu1, styles.tomiokaTypo1]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu2, styles.tomiokaTypo]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu3, styles.tomiokaTypo2]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu4, styles.tomiokaTypo2]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu5, styles.tomiokaTypo1]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu6, styles.tomiokaTypo]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu7, styles.tomiokaTypo2]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu8, styles.tomiokaTypo2]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu9, styles.tomiokaTypo1]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu10, styles.tomiokaTypo]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu11, styles.tomiokaTypo2]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu12, styles.tomiokaTypo2]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu13, styles.tomiokaTypo1]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu14, styles.tomiokaTypo]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu15, styles.tomiokaTypo2]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu16, styles.tomiokaTypo2]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu17, styles.tomiokaTypo1]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu18, styles.tomiokaTypo]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu19, styles.tomiokaTypo2]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu20, styles.tomiokaTypo2]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu21, styles.tomiokaTypo1]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu22, styles.tomiokaTypo]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu23, styles.tomiokaTypo2]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu24, styles.tomiokaTypo2]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu25, styles.tomiokaTypo1]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu26, styles.tomiokaTypo]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu27, styles.tomiokaTypo2]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu28, styles.tomiokaTypo2]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu29, styles.tomiokaTypo1]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu30, styles.tomiokaTypo]}>
            Tomioka Giyuu
          </Text>
          <Text style={[styles.tomiokaGiyuu31, styles.tomiokaTypo2]}>
            Tomioka Giyuu
          </Text>
          <View style={[styles.groupChild60, styles.groupChildLayout3]} />
          <View style={[styles.groupChild61, styles.groupChildLayout2]} />
          <View style={[styles.groupChild62, styles.groupChildLayout1]} />
          <View style={[styles.groupChild63, styles.groupChildLayout]} />
          <View style={[styles.groupChild64, styles.groupChildLayout3]} />
          <View style={[styles.groupChild65, styles.groupChildLayout2]} />
          <View style={[styles.groupChild66, styles.groupChildLayout1]} />
          <View style={[styles.groupChild67, styles.groupChildLayout]} />
          <View style={[styles.groupChild68, styles.groupChildLayout3]} />
          <View style={[styles.groupChild69, styles.groupChildLayout2]} />
          <View style={[styles.groupChild70, styles.groupChildLayout1]} />
          <View style={[styles.groupChild71, styles.groupChildLayout]} />
          <View style={[styles.groupChild72, styles.groupChildLayout3]} />
          <View style={[styles.groupChild73, styles.groupChildLayout2]} />
          <View style={[styles.groupChild74, styles.groupChildLayout1]} />
          <View style={[styles.groupChild75, styles.groupChildLayout]} />
          <View style={[styles.groupChild76, styles.groupChildLayout3]} />
          <View style={[styles.groupChild77, styles.groupChildLayout2]} />
          <View style={[styles.groupChild78, styles.groupChildLayout1]} />
          <View style={[styles.groupChild79, styles.groupChildLayout]} />
          <View style={[styles.groupChild80, styles.groupChildLayout3]} />
          <View style={[styles.groupChild81, styles.groupChildLayout2]} />
          <View style={[styles.groupChild82, styles.groupChildLayout1]} />
          <View style={[styles.groupChild83, styles.groupChildLayout]} />
          <View style={[styles.groupChild84, styles.groupChildLayout3]} />
          <View style={[styles.groupChild85, styles.groupChildLayout2]} />
          <View style={[styles.groupChild86, styles.groupChildLayout1]} />
          <View style={[styles.groupChild87, styles.groupChildLayout]} />
          <View style={[styles.groupChild88, styles.groupChildLayout3]} />
          <View style={[styles.groupChild89, styles.groupChildLayout2]} />
          <View style={[styles.groupChild90, styles.groupChildLayout1]} />
          <View style={[styles.groupChild91, styles.groupChildLayout]} />
          <Text style={[styles.upForFriendship, styles.forTypo3]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship1, styles.forTypo2]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship2, styles.forTypo1]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship3, styles.forTypo]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship4, styles.forTypo3]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship5, styles.forTypo2]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship6, styles.forTypo1]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship7, styles.forTypo]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship8, styles.forTypo3]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship9, styles.forTypo2]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship10, styles.forTypo1]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship11, styles.forTypo]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship12, styles.forTypo3]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship13, styles.forTypo2]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship14, styles.forTypo1]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship15, styles.forTypo]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship16, styles.forTypo3]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship17, styles.forTypo2]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship18, styles.forTypo1]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship19, styles.forTypo]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship20, styles.forTypo3]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship21, styles.forTypo2]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship22, styles.forTypo1]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship23, styles.forTypo]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship24, styles.forTypo3]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship25, styles.forTypo2]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship26, styles.forTypo1]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship27, styles.forTypo]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship28, styles.forTypo3]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship29, styles.forTypo2]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship30, styles.forTypo1]}>
            Up for friendship
          </Text>
          <Text style={[styles.upForFriendship31, styles.forTypo]}>
            Up for friendship
          </Text>
        </View>
      </View>
      <Text style={styles.peopleNearby1}>{`people Nearby `}</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Vibe")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector38.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout5: {
    height: 44,
    backgroundColor: Color.colorGray_200,
    position: "absolute",
    width: 360,
  },
  vectorIconLayout: {
    height: 9,
    width: 6,
    left: 352,
    position: "absolute",
  },
  vectorIconPosition2: {
    left: 354,
    height: 9,
    width: 6,
    position: "absolute",
  },
  vectorIconPosition1: {
    left: 353,
    height: 9,
    width: 6,
    position: "absolute",
  },
  vectorIconPosition: {
    left: 355,
    height: 9,
    width: 6,
    position: "absolute",
  },
  groupChildLayout4: {
    height: 32,
    width: 35,
    position: "absolute",
  },
  groupChildPosition: {
    left: 3,
    height: 32,
    width: 35,
    position: "absolute",
  },
  within40mTypo3: {
    opacity: 0.5,
    color: Color.colorWhite,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    left: 39,
    position: "absolute",
  },
  within40mTypo2: {
    left: 41,
    opacity: 0.5,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  within40mTypo1: {
    left: 40,
    opacity: 0.5,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  within40mTypo: {
    left: 42,
    opacity: 0.5,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  tomiokaTypo2: {
    opacity: 0.9,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  tomiokaTypo1: {
    left: 38,
    opacity: 0.9,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  tomiokaTypo: {
    left: 37,
    opacity: 0.9,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  groupChildLayout3: {
    opacity: 0.1,
    height: 19,
    width: 105,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_3xs,
    left: 234,
    position: "absolute",
  },
  groupChildLayout2: {
    left: 236,
    opacity: 0.1,
    height: 19,
    width: 105,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  groupChildLayout1: {
    left: 235,
    opacity: 0.1,
    height: 19,
    width: 105,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  groupChildLayout: {
    left: 237,
    opacity: 0.1,
    height: 19,
    width: 105,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  forTypo3: {
    opacity: 0.7,
    left: 242,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  forTypo2: {
    left: 244,
    opacity: 0.7,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  forTypo1: {
    left: 243,
    opacity: 0.7,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  forTypo: {
    left: 245,
    opacity: 0.7,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    top: 0,
  },
  groupItem: {
    top: 880,
    left: 1,
  },
  groupInner: {
    top: 440,
    left: 0,
  },
  rectangleView: {
    top: 1320,
    left: 2,
  },
  groupChild1: {
    top: 220,
    left: 0,
  },
  groupChild2: {
    top: 1100,
    left: 1,
  },
  groupChild3: {
    top: 660,
    left: 0,
  },
  groupChild4: {
    top: 1540,
    left: 2,
  },
  groupChild5: {
    top: 110,
    left: 0,
  },
  groupChild6: {
    top: 990,
    left: 1,
  },
  groupChild7: {
    top: 550,
    left: 0,
  },
  groupChild8: {
    top: 1430,
    left: 2,
  },
  groupChild9: {
    top: 330,
    left: 0,
  },
  groupChild10: {
    top: 1210,
    left: 1,
  },
  groupChild11: {
    top: 770,
    left: 0,
  },
  groupChild12: {
    top: 1650,
    left: 2,
  },
  groupChild13: {
    top: 55,
    left: 0,
  },
  groupChild14: {
    top: 935,
    left: 1,
  },
  groupChild15: {
    top: 495,
    left: 0,
  },
  groupChild16: {
    top: 1375,
    left: 2,
  },
  groupChild17: {
    top: 275,
    left: 0,
  },
  groupChild18: {
    top: 1155,
    left: 1,
  },
  groupChild19: {
    top: 715,
    left: 0,
  },
  groupChild20: {
    top: 1595,
    left: 2,
  },
  groupChild21: {
    top: 165,
    left: 0,
  },
  groupChild22: {
    top: 1045,
    left: 1,
  },
  groupChild23: {
    top: 605,
    left: 0,
  },
  groupChild24: {
    top: 1485,
    left: 2,
  },
  groupChild25: {
    top: 385,
    left: 0,
  },
  groupChild26: {
    top: 1265,
    left: 1,
  },
  groupChild27: {
    top: 825,
    left: 0,
  },
  groupChild28: {
    top: 1705,
    left: 2,
  },
  vectorIcon: {
    top: 14,
  },
  vectorIcon1: {
    top: 894,
  },
  vectorIcon2: {
    top: 454,
  },
  vectorIcon3: {
    top: 1334,
  },
  vectorIcon4: {
    top: 234,
  },
  vectorIcon5: {
    top: 1114,
  },
  vectorIcon6: {
    top: 674,
  },
  vectorIcon7: {
    top: 1554,
  },
  vectorIcon8: {
    top: 124,
  },
  vectorIcon9: {
    top: 1004,
  },
  vectorIcon10: {
    top: 564,
  },
  vectorIcon11: {
    top: 1444,
  },
  vectorIcon12: {
    top: 344,
  },
  vectorIcon13: {
    top: 1224,
  },
  vectorIcon14: {
    top: 784,
  },
  vectorIcon15: {
    top: 1664,
  },
  vectorIcon16: {
    top: 69,
  },
  vectorIcon17: {
    top: 949,
  },
  vectorIcon18: {
    top: 509,
  },
  vectorIcon19: {
    top: 1389,
  },
  vectorIcon20: {
    top: 289,
  },
  vectorIcon21: {
    top: 1169,
  },
  vectorIcon22: {
    top: 729,
  },
  vectorIcon23: {
    top: 1609,
  },
  vectorIcon24: {
    top: 179,
  },
  vectorIcon25: {
    top: 1059,
  },
  vectorIcon26: {
    top: 619,
  },
  vectorIcon27: {
    top: 1499,
  },
  vectorIcon28: {
    top: 399,
  },
  vectorIcon29: {
    top: 1279,
  },
  vectorIcon30: {
    top: 839,
  },
  vectorIcon31: {
    top: 1719,
  },
  ellipseIcon: {
    top: 2,
    left: 0,
  },
  groupChild29: {
    top: 882,
    left: 2,
  },
  groupChild30: {
    top: 442,
    left: 1,
  },
  groupChild31: {
    top: 1322,
  },
  groupChild32: {
    top: 222,
    left: 0,
  },
  groupChild33: {
    top: 1102,
    left: 2,
  },
  groupChild34: {
    top: 662,
    left: 1,
  },
  groupChild35: {
    top: 1542,
  },
  groupChild36: {
    top: 112,
    left: 0,
  },
  groupChild37: {
    top: 992,
    left: 2,
  },
  groupChild38: {
    top: 552,
    left: 1,
  },
  groupChild39: {
    top: 1432,
  },
  groupChild40: {
    top: 332,
    left: 0,
  },
  groupChild41: {
    top: 1212,
    left: 2,
  },
  groupChild42: {
    top: 772,
    left: 1,
  },
  groupChild43: {
    top: 1652,
  },
  groupChild44: {
    top: 57,
    left: 0,
  },
  groupChild45: {
    top: 937,
    left: 2,
  },
  groupChild46: {
    top: 497,
    left: 1,
  },
  groupChild47: {
    top: 1377,
  },
  groupChild48: {
    top: 277,
    left: 0,
  },
  groupChild49: {
    top: 1157,
    left: 2,
  },
  groupChild50: {
    top: 717,
    left: 1,
  },
  groupChild51: {
    top: 1597,
  },
  groupChild52: {
    top: 167,
    left: 0,
  },
  groupChild53: {
    top: 1047,
    left: 2,
  },
  groupChild54: {
    top: 607,
    left: 1,
  },
  groupChild55: {
    top: 1487,
  },
  groupChild56: {
    top: 387,
    left: 0,
  },
  groupChild57: {
    top: 1267,
    left: 2,
  },
  groupChild58: {
    top: 827,
    left: 1,
  },
  groupChild59: {
    top: 1707,
  },
  within40m: {
    top: 19,
  },
  within40m1: {
    top: 899,
  },
  within40m2: {
    top: 459,
  },
  within40m3: {
    top: 1339,
  },
  within40m4: {
    top: 239,
  },
  within40m5: {
    top: 1119,
  },
  within40m6: {
    top: 679,
  },
  within40m7: {
    top: 1559,
  },
  within40m8: {
    top: 129,
  },
  within40m9: {
    top: 1009,
  },
  within40m10: {
    top: 569,
  },
  within40m11: {
    top: 1449,
  },
  within40m12: {
    top: 349,
  },
  within40m13: {
    top: 1229,
  },
  within40m14: {
    top: 789,
  },
  within40m15: {
    top: 1669,
  },
  within40m16: {
    top: 74,
  },
  within40m17: {
    top: 954,
  },
  within40m18: {
    top: 514,
  },
  within40m19: {
    top: 1394,
  },
  within40m20: {
    top: 294,
  },
  within40m21: {
    top: 1174,
  },
  within40m22: {
    top: 734,
  },
  within40m23: {
    top: 1614,
  },
  within40m24: {
    top: 184,
  },
  within40m25: {
    top: 1064,
  },
  within40m26: {
    top: 624,
  },
  within40m27: {
    top: 1504,
  },
  within40m28: {
    top: 404,
  },
  within40m29: {
    top: 1284,
  },
  within40m30: {
    top: 844,
  },
  within40m31: {
    top: 1724,
  },
  tomiokaGiyuu: {
    top: 4,
    left: 36,
    opacity: 0.9,
    fontSize: FontSize.size_mini,
  },
  tomiokaGiyuu1: {
    top: 884,
  },
  tomiokaGiyuu2: {
    top: 444,
  },
  tomiokaGiyuu3: {
    top: 1324,
    opacity: 0.9,
    fontSize: FontSize.size_mini,
    left: 39,
  },
  tomiokaGiyuu4: {
    top: 224,
    left: 36,
    opacity: 0.9,
    fontSize: FontSize.size_mini,
  },
  tomiokaGiyuu5: {
    top: 1104,
  },
  tomiokaGiyuu6: {
    top: 664,
  },
  tomiokaGiyuu7: {
    top: 1544,
    opacity: 0.9,
    fontSize: FontSize.size_mini,
    left: 39,
  },
  tomiokaGiyuu8: {
    top: 114,
    left: 36,
    opacity: 0.9,
    fontSize: FontSize.size_mini,
  },
  tomiokaGiyuu9: {
    top: 994,
  },
  tomiokaGiyuu10: {
    top: 554,
  },
  tomiokaGiyuu11: {
    top: 1434,
    opacity: 0.9,
    fontSize: FontSize.size_mini,
    left: 39,
  },
  tomiokaGiyuu12: {
    top: 334,
    left: 36,
    opacity: 0.9,
    fontSize: FontSize.size_mini,
  },
  tomiokaGiyuu13: {
    top: 1214,
  },
  tomiokaGiyuu14: {
    top: 774,
  },
  tomiokaGiyuu15: {
    top: 1654,
    opacity: 0.9,
    fontSize: FontSize.size_mini,
    left: 39,
  },
  tomiokaGiyuu16: {
    top: 59,
    left: 36,
    opacity: 0.9,
    fontSize: FontSize.size_mini,
  },
  tomiokaGiyuu17: {
    top: 939,
  },
  tomiokaGiyuu18: {
    top: 499,
  },
  tomiokaGiyuu19: {
    top: 1379,
    opacity: 0.9,
    fontSize: FontSize.size_mini,
    left: 39,
  },
  tomiokaGiyuu20: {
    top: 279,
    left: 36,
    opacity: 0.9,
    fontSize: FontSize.size_mini,
  },
  tomiokaGiyuu21: {
    top: 1159,
  },
  tomiokaGiyuu22: {
    top: 719,
  },
  tomiokaGiyuu23: {
    top: 1599,
    opacity: 0.9,
    fontSize: FontSize.size_mini,
    left: 39,
  },
  tomiokaGiyuu24: {
    top: 169,
    left: 36,
    opacity: 0.9,
    fontSize: FontSize.size_mini,
  },
  tomiokaGiyuu25: {
    top: 1049,
  },
  tomiokaGiyuu26: {
    top: 609,
  },
  tomiokaGiyuu27: {
    top: 1489,
    opacity: 0.9,
    fontSize: FontSize.size_mini,
    left: 39,
  },
  tomiokaGiyuu28: {
    top: 389,
    left: 36,
    opacity: 0.9,
    fontSize: FontSize.size_mini,
  },
  tomiokaGiyuu29: {
    top: 1269,
  },
  tomiokaGiyuu30: {
    top: 829,
  },
  tomiokaGiyuu31: {
    top: 1709,
    opacity: 0.9,
    fontSize: FontSize.size_mini,
    left: 39,
  },
  groupChild60: {
    top: 10,
  },
  groupChild61: {
    top: 890,
  },
  groupChild62: {
    top: 450,
  },
  groupChild63: {
    top: 1330,
  },
  groupChild64: {
    top: 230,
  },
  groupChild65: {
    top: 1110,
  },
  groupChild66: {
    top: 670,
  },
  groupChild67: {
    top: 1550,
  },
  groupChild68: {
    top: 120,
  },
  groupChild69: {
    top: 1000,
  },
  groupChild70: {
    top: 560,
  },
  groupChild71: {
    top: 1440,
  },
  groupChild72: {
    top: 340,
  },
  groupChild73: {
    top: 1220,
  },
  groupChild74: {
    top: 780,
  },
  groupChild75: {
    top: 1660,
  },
  groupChild76: {
    top: 65,
  },
  groupChild77: {
    top: 945,
  },
  groupChild78: {
    top: 505,
  },
  groupChild79: {
    top: 1385,
  },
  groupChild80: {
    top: 285,
  },
  groupChild81: {
    top: 1165,
  },
  groupChild82: {
    top: 725,
  },
  groupChild83: {
    top: 1605,
  },
  groupChild84: {
    top: 175,
  },
  groupChild85: {
    top: 1055,
  },
  groupChild86: {
    top: 615,
  },
  groupChild87: {
    top: 1495,
  },
  groupChild88: {
    top: 395,
  },
  groupChild89: {
    top: 1275,
  },
  groupChild90: {
    top: 835,
  },
  groupChild91: {
    top: 1715,
  },
  upForFriendship: {
    top: 12,
  },
  upForFriendship1: {
    top: 892,
  },
  upForFriendship2: {
    top: 452,
  },
  upForFriendship3: {
    top: 1332,
  },
  upForFriendship4: {
    top: 232,
  },
  upForFriendship5: {
    top: 1112,
  },
  upForFriendship6: {
    top: 672,
  },
  upForFriendship7: {
    top: 1552,
  },
  upForFriendship8: {
    top: 122,
  },
  upForFriendship9: {
    top: 1002,
  },
  upForFriendship10: {
    top: 562,
  },
  upForFriendship11: {
    top: 1442,
  },
  upForFriendship12: {
    top: 342,
  },
  upForFriendship13: {
    top: 1222,
  },
  upForFriendship14: {
    top: 782,
  },
  upForFriendship15: {
    top: 1662,
  },
  upForFriendship16: {
    top: 67,
  },
  upForFriendship17: {
    top: 947,
  },
  upForFriendship18: {
    top: 507,
  },
  upForFriendship19: {
    top: 1387,
  },
  upForFriendship20: {
    top: 287,
  },
  upForFriendship21: {
    top: 1167,
  },
  upForFriendship22: {
    top: 727,
  },
  upForFriendship23: {
    top: 1607,
  },
  upForFriendship24: {
    top: 177,
  },
  upForFriendship25: {
    top: 1057,
  },
  upForFriendship26: {
    top: 617,
  },
  upForFriendship27: {
    top: 1497,
  },
  upForFriendship28: {
    top: 397,
  },
  upForFriendship29: {
    top: 1277,
  },
  upForFriendship30: {
    top: 837,
  },
  upForFriendship31: {
    top: 1717,
  },
  rectangleParent: {
    width: 362,
    height: 1749,
    left: 1,
    top: 0,
    position: "absolute",
  },
  peopleNearbyInner: {
    top: 62,
    left: -1,
    width: 377,
    height: 742,
    position: "absolute",
  },
  peopleNearby1: {
    top: 7,
    left: 131,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "3.33%",
    top: "1.25%",
    right: "94.17%",
    bottom: "97%",
    width: "2.5%",
    height: "1.75%",
    position: "absolute",
  },
  peopleNearby: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGray_400,
    height: 800,
    overflow: "hidden",
    width: 360,
  },
});

export default PeopleNearby;
