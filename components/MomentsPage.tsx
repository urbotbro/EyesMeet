import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const MomentsPage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.momentsPage}>
      <Text style={styles.moments}>{`Moments `}</Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.frameChildLayout3]} />
        <View style={[styles.frameItem, styles.frameChildLayout3]} />
        <View style={[styles.frameInner, styles.frameChildLayout3]} />
        <View style={[styles.rectangleView, styles.frameChildLayout3]} />
        <View style={[styles.frameChild1, styles.frameChildLayout3]} />
        <View style={[styles.frameChild2, styles.frameChildLayout3]} />
        <View style={[styles.frameChild3, styles.frameChildLayout3]} />
        <View style={[styles.frameChild4, styles.frameChildLayout3]} />
        <Image
          style={[styles.ellipseIcon, styles.frameChildLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Image
          style={[styles.frameChild5, styles.frameChildLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Image
          style={[styles.frameChild6, styles.frameChildLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Image
          style={[styles.frameChild7, styles.frameChildLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Image
          style={[styles.frameChild8, styles.frameChildLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Image
          style={[styles.frameChild9, styles.frameChildLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Image
          style={[styles.frameChild10, styles.frameChildLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Image
          style={[styles.frameChild11, styles.frameChildLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Text style={[styles.tomiokaGiyuu, styles.tomiokaTypo]}>
          Tomioka Giyuu
        </Text>
        <Text style={[styles.tomiokaGiyuu1, styles.tomiokaTypo]}>
          Tomioka Giyuu
        </Text>
        <Text style={[styles.tomiokaGiyuu2, styles.tomiokaTypo]}>
          Tomioka Giyuu
        </Text>
        <Text style={[styles.tomiokaGiyuu3, styles.tomiokaTypo]}>
          Tomioka Giyuu
        </Text>
        <Text style={[styles.tomiokaGiyuu4, styles.tomiokaTypo]}>
          Tomioka Giyuu
        </Text>
        <Text style={[styles.tomiokaGiyuu5, styles.tomiokaTypo]}>
          Tomioka Giyuu
        </Text>
        <Text style={[styles.tomiokaGiyuu6, styles.tomiokaTypo]}>
          Tomioka Giyuu
        </Text>
        <Text style={[styles.tomiokaGiyuu7, styles.tomiokaTypo]}>
          Tomioka Giyuu
        </Text>
        <Text style={[styles.mAgo, styles.agoTypo]}>4m ago</Text>
        <Text style={[styles.mAgo1, styles.agoTypo]}>4m ago</Text>
        <Text style={[styles.mAgo2, styles.agoTypo]}>4m ago</Text>
        <Text style={[styles.mAgo3, styles.agoTypo]}>4m ago</Text>
        <Text style={[styles.mAgo4, styles.agoTypo]}>4m ago</Text>
        <Text style={[styles.mAgo5, styles.agoTypo]}>4m ago</Text>
        <Text style={[styles.mAgo6, styles.agoTypo]}>4m ago</Text>
        <Text style={[styles.mAgo7, styles.agoTypo]}>4m ago</Text>
        <Image
          style={[styles.rectangleIcon, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-39.png")}
        />
        <Image
          style={[styles.frameChild12, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-39.png")}
        />
        <Image
          style={[styles.frameChild13, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-39.png")}
        />
        <Image
          style={[styles.frameChild14, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-39.png")}
        />
        <Image
          style={[styles.frameChild15, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-39.png")}
        />
        <Image
          style={[styles.frameChild16, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-39.png")}
        />
        <Image
          style={[styles.frameChild17, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-39.png")}
        />
        <Image
          style={[styles.frameChild18, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-39.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout4]}
          contentFit="cover"
          source={require("../assets/vector421.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout4]}
          contentFit="cover"
          source={require("../assets/vector421.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout4]}
          contentFit="cover"
          source={require("../assets/vector421.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout4]}
          contentFit="cover"
          source={require("../assets/vector421.png")}
        />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout4]}
          contentFit="cover"
          source={require("../assets/vector421.png")}
        />
        <Image
          style={[styles.vectorIcon5, styles.vectorIconLayout4]}
          contentFit="cover"
          source={require("../assets/vector421.png")}
        />
        <Image
          style={[styles.vectorIcon6, styles.vectorIconLayout4]}
          contentFit="cover"
          source={require("../assets/vector421.png")}
        />
        <Image
          style={[styles.vectorIcon7, styles.vectorIconLayout4]}
          contentFit="cover"
          source={require("../assets/vector421.png")}
        />
        <Text style={[styles.like, styles.likeTypo]}>Like</Text>
        <Text style={[styles.like1, styles.likeTypo]}>Like</Text>
        <Text style={[styles.like2, styles.likeTypo]}>Like</Text>
        <Text style={[styles.like3, styles.likeTypo]}>Like</Text>
        <Text style={[styles.like4, styles.likeTypo]}>Like</Text>
        <Text style={[styles.like5, styles.likeTypo]}>Like</Text>
        <Text style={[styles.like6, styles.likeTypo]}>Like</Text>
        <Text style={[styles.like7, styles.likeTypo]}>Like</Text>
        <Text style={[styles.comment, styles.commentTypo]}>4Comment</Text>
        <Text style={[styles.comment1, styles.commentTypo]}>4Comment</Text>
        <Text style={[styles.comment2, styles.commentTypo]}>4Comment</Text>
        <Text style={[styles.comment3, styles.commentTypo]}>4Comment</Text>
        <Text style={[styles.comment4, styles.commentTypo]}>4Comment</Text>
        <Text style={[styles.comment5, styles.commentTypo]}>4Comment</Text>
        <Text style={[styles.comment6, styles.commentTypo]}>4Comment</Text>
        <Text style={[styles.comment7, styles.commentTypo]}>4Comment</Text>
        <Text style={[styles.share, styles.shareTypo]}>4Share</Text>
        <Text style={[styles.share1, styles.shareTypo]}>4Share</Text>
        <Text style={[styles.share2, styles.shareTypo]}>4Share</Text>
        <Text style={[styles.share3, styles.shareTypo]}>4Share</Text>
        <Text style={[styles.share4, styles.shareTypo]}>4Share</Text>
        <Text style={[styles.share5, styles.shareTypo]}>4Share</Text>
        <Text style={[styles.share6, styles.shareTypo]}>4Share</Text>
        <Text style={[styles.share7, styles.shareTypo]}>4Share</Text>
        <Image
          style={[styles.vectorIcon8, styles.vectorIconLayout3]}
          contentFit="cover"
          source={require("../assets/vector43.png")}
        />
        <Image
          style={[styles.vectorIcon9, styles.vectorIconLayout3]}
          contentFit="cover"
          source={require("../assets/vector44.png")}
        />
        <Image
          style={[styles.vectorIcon10, styles.vectorIconLayout3]}
          contentFit="cover"
          source={require("../assets/vector44.png")}
        />
        <Image
          style={[styles.vectorIcon11, styles.vectorIconLayout3]}
          contentFit="cover"
          source={require("../assets/vector44.png")}
        />
        <Image
          style={[styles.vectorIcon12, styles.vectorIconLayout3]}
          contentFit="cover"
          source={require("../assets/vector43.png")}
        />
        <Image
          style={[styles.vectorIcon13, styles.vectorIconLayout3]}
          contentFit="cover"
          source={require("../assets/vector44.png")}
        />
        <Image
          style={[styles.vectorIcon14, styles.vectorIconLayout3]}
          contentFit="cover"
          source={require("../assets/vector44.png")}
        />
        <Image
          style={[styles.vectorIcon15, styles.vectorIconLayout3]}
          contentFit="cover"
          source={require("../assets/vector44.png")}
        />
        <Image
          style={[styles.vectorIcon16, styles.vectorIconLayout2]}
          contentFit="cover"
          source={require("../assets/vector45.png")}
        />
        <Image
          style={[styles.vectorIcon17, styles.vectorIconLayout2]}
          contentFit="cover"
          source={require("../assets/vector45.png")}
        />
        <Image
          style={[styles.vectorIcon18, styles.vectorIconLayout2]}
          contentFit="cover"
          source={require("../assets/vector45.png")}
        />
        <Image
          style={[styles.vectorIcon19, styles.vectorIconLayout2]}
          contentFit="cover"
          source={require("../assets/vector45.png")}
        />
        <Image
          style={[styles.vectorIcon20, styles.vectorIconLayout2]}
          contentFit="cover"
          source={require("../assets/vector45.png")}
        />
        <Image
          style={[styles.vectorIcon21, styles.vectorIconLayout2]}
          contentFit="cover"
          source={require("../assets/vector45.png")}
        />
        <Image
          style={[styles.vectorIcon22, styles.vectorIconLayout2]}
          contentFit="cover"
          source={require("../assets/vector45.png")}
        />
        <Image
          style={[styles.vectorIcon23, styles.vectorIconLayout2]}
          contentFit="cover"
          source={require("../assets/vector45.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>4</Text>
        <Text style={[styles.text1, styles.textTypo]}>4</Text>
        <Text style={[styles.text2, styles.textTypo]}>4</Text>
        <Text style={[styles.text3, styles.textTypo]}>4</Text>
        <Text style={[styles.text4, styles.textTypo]}>4</Text>
        <Text style={[styles.text5, styles.textTypo]}>4</Text>
        <Text style={[styles.text6, styles.textTypo]}>4</Text>
        <Text style={[styles.text7, styles.textTypo]}>4</Text>
        <Image
          style={[styles.vectorIcon24, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector46.png")}
        />
        <Image
          style={[styles.vectorIcon25, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector46.png")}
        />
        <Image
          style={[styles.vectorIcon26, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector46.png")}
        />
        <Image
          style={[styles.vectorIcon27, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector46.png")}
        />
        <Image
          style={[styles.vectorIcon28, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector46.png")}
        />
        <Image
          style={[styles.vectorIcon29, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector46.png")}
        />
        <Image
          style={[styles.vectorIcon30, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector46.png")}
        />
        <Image
          style={[styles.vectorIcon31, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector46.png")}
        />
        <Image
          style={[styles.vectorIcon32, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector47.png")}
        />
        <Image
          style={[styles.vectorIcon33, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector47.png")}
        />
        <Image
          style={[styles.vectorIcon34, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector47.png")}
        />
        <Image
          style={[styles.vectorIcon35, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector47.png")}
        />
        <Image
          style={[styles.vectorIcon36, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector47.png")}
        />
        <Image
          style={[styles.vectorIcon37, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector47.png")}
        />
        <Image
          style={[styles.vectorIcon38, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector47.png")}
        />
        <Image
          style={[styles.vectorIcon39, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector47.png")}
        />
        <View style={[styles.groupWrapper, styles.frameGroupLayout]}>
          <View style={[styles.vectorParent, styles.vectorPosition]}>
            <Image
              style={[styles.vectorIcon40, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector48.png")}
            />
            <LinearGradient
              style={[styles.groupChild, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
            />
            <LinearGradient
              style={[styles.groupItem, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
            />
            <LinearGradient
              style={[styles.groupInner, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
            />
            <Image
              style={[styles.vectorIcon41, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector49.png")}
            />
            <Text style={[styles.saveMonents, styles.saveMonentsTypo]}>
              Save Monents
            </Text>
            <Text style={[styles.hideMoments, styles.saveMonentsTypo]}>
              Hide Moments
            </Text>
            <Text style={styles.report}>Report</Text>
            <Image
              style={[styles.vectorIcon42, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector50.png")}
            />
            <Image
              style={[styles.vectorIcon43, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector51.png")}
            />
          </View>
        </View>
        <View style={[styles.groupContainer, styles.frameGroupLayout]}>
          <View style={[styles.vectorParent, styles.vectorPosition]}>
            <Image
              style={[styles.vectorIcon40, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector48.png")}
            />
            <LinearGradient
              style={[styles.groupChild, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
            />
            <LinearGradient
              style={[styles.groupItem, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
            />
            <LinearGradient
              style={[styles.groupInner, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
            />
            <Image
              style={[styles.vectorIcon41, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector49.png")}
            />
            <Text style={[styles.saveMonents, styles.saveMonentsTypo]}>
              Save Monents
            </Text>
            <Text style={[styles.hideMoments, styles.saveMonentsTypo]}>
              Hide Moments
            </Text>
            <Text style={styles.report}>Report</Text>
            <Image
              style={[styles.vectorIcon42, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector50.png")}
            />
            <Image
              style={[styles.vectorIcon43, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector51.png")}
            />
          </View>
        </View>
        <View style={[styles.groupFrame, styles.frameGroupLayout]}>
          <View style={[styles.vectorParent, styles.vectorPosition]}>
            <Image
              style={[styles.vectorIcon40, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector48.png")}
            />
            <LinearGradient
              style={[styles.groupChild, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
            />
            <LinearGradient
              style={[styles.groupItem, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
            />
            <LinearGradient
              style={[styles.groupInner, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
            />
            <Image
              style={[styles.vectorIcon41, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector49.png")}
            />
            <Text style={[styles.saveMonents, styles.saveMonentsTypo]}>
              Save Monents
            </Text>
            <Text style={[styles.hideMoments, styles.saveMonentsTypo]}>
              Hide Moments
            </Text>
            <Text style={styles.report}>Report</Text>
            <Image
              style={[styles.vectorIcon42, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector50.png")}
            />
            <Image
              style={[styles.vectorIcon43, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector51.png")}
            />
          </View>
        </View>
        <View style={[styles.frameView, styles.frameGroupLayout]}>
          <View style={[styles.vectorParent, styles.vectorPosition]}>
            <Image
              style={[styles.vectorIcon40, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector48.png")}
            />
            <LinearGradient
              style={[styles.groupChild, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
            />
            <LinearGradient
              style={[styles.groupItem, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
            />
            <LinearGradient
              style={[styles.groupInner, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
            />
            <Image
              style={[styles.vectorIcon41, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector49.png")}
            />
            <Text style={[styles.saveMonents, styles.saveMonentsTypo]}>
              Save Monents
            </Text>
            <Text style={[styles.hideMoments, styles.saveMonentsTypo]}>
              Hide Moments
            </Text>
            <Text style={styles.report}>Report</Text>
            <Image
              style={[styles.vectorIcon42, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector50.png")}
            />
            <Image
              style={[styles.vectorIcon43, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector51.png")}
            />
          </View>
        </View>
        <View style={[styles.groupWrapper1, styles.frameGroupLayout]}>
          <View style={[styles.vectorParent, styles.vectorPosition]}>
            <Image
              style={[styles.vectorIcon40, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector48.png")}
            />
            <LinearGradient
              style={[styles.groupChild, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
            />
            <LinearGradient
              style={[styles.groupItem, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
            />
            <LinearGradient
              style={[styles.groupInner, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
            />
            <Image
              style={[styles.vectorIcon41, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector49.png")}
            />
            <Text style={[styles.saveMonents, styles.saveMonentsTypo]}>
              Save Monents
            </Text>
            <Text style={[styles.hideMoments, styles.saveMonentsTypo]}>
              Hide Moments
            </Text>
            <Text style={styles.report}>Report</Text>
            <Image
              style={[styles.vectorIcon42, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector50.png")}
            />
            <Image
              style={[styles.vectorIcon43, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector51.png")}
            />
          </View>
        </View>
        <View style={[styles.groupWrapper2, styles.frameGroupLayout]}>
          <View style={[styles.vectorParent, styles.vectorPosition]}>
            <Image
              style={[styles.vectorIcon40, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector48.png")}
            />
            <LinearGradient
              style={[styles.groupChild, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
            />
            <LinearGradient
              style={[styles.groupItem, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
            />
            <LinearGradient
              style={[styles.groupInner, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
            />
            <Image
              style={[styles.vectorIcon41, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector49.png")}
            />
            <Text style={[styles.saveMonents, styles.saveMonentsTypo]}>
              Save Monents
            </Text>
            <Text style={[styles.hideMoments, styles.saveMonentsTypo]}>
              Hide Moments
            </Text>
            <Text style={styles.report}>Report</Text>
            <Image
              style={[styles.vectorIcon42, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector50.png")}
            />
            <Image
              style={[styles.vectorIcon43, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector51.png")}
            />
          </View>
        </View>
        <View style={[styles.groupWrapper3, styles.frameGroupLayout]}>
          <View style={[styles.vectorParent, styles.vectorPosition]}>
            <Image
              style={[styles.vectorIcon40, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector48.png")}
            />
            <LinearGradient
              style={[styles.groupChild, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
            />
            <LinearGradient
              style={[styles.groupItem, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
            />
            <LinearGradient
              style={[styles.groupInner, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
            />
            <Image
              style={[styles.vectorIcon41, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector49.png")}
            />
            <Text style={[styles.saveMonents, styles.saveMonentsTypo]}>
              Save Monents
            </Text>
            <Text style={[styles.hideMoments, styles.saveMonentsTypo]}>
              Hide Moments
            </Text>
            <Text style={styles.report}>Report</Text>
            <Image
              style={[styles.vectorIcon42, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector50.png")}
            />
            <Image
              style={[styles.vectorIcon43, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector51.png")}
            />
          </View>
        </View>
        <View style={[styles.groupWrapper4, styles.frameGroupLayout]}>
          <View style={[styles.vectorParent, styles.vectorPosition]}>
            <Image
              style={[styles.vectorIcon40, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector48.png")}
            />
            <LinearGradient
              style={[styles.groupChild, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
            />
            <LinearGradient
              style={[styles.groupItem, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
            />
            <LinearGradient
              style={[styles.groupInner, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(152, 114, 235, 0)", "rgba(232, 113, 197, 0)"]}
            />
            <Image
              style={[styles.vectorIcon41, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector49.png")}
            />
            <Text style={[styles.saveMonents, styles.saveMonentsTypo]}>
              Save Monents
            </Text>
            <Text style={[styles.hideMoments, styles.saveMonentsTypo]}>
              Hide Moments
            </Text>
            <Text style={styles.report}>Report</Text>
            <Image
              style={[styles.vectorIcon42, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector50.png")}
            />
            <Image
              style={[styles.vectorIcon43, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector51.png")}
            />
          </View>
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
  frameChildLayout3: {
    height: 267,
    borderWidth: 1,
    borderColor: Color.colorMediumpurple_100,
    borderStyle: "solid",
    left: 27,
    position: "absolute",
    width: 360,
    borderRadius: Border.br_8xs,
  },
  frameChildLayout1: {
    height: 30,
    width: 31,
    position: "absolute",
  },
  tomiokaTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  agoTypo: {
    fontSize: FontSize.size_3xs,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  frameChildLayout: {
    height: 163,
    left: 27,
    position: "absolute",
    width: 360,
  },
  vectorIconLayout4: {
    height: 4,
    width: 4,
    position: "absolute",
  },
  likeTypo: {
    fontSize: FontSize.m3LabelSmall_size,
    left: 57,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  commentTypo: {
    left: 166,
    fontSize: FontSize.m3LabelSmall_size,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  shareTypo: {
    left: 339,
    fontSize: FontSize.m3LabelSmall_size,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  vectorIconLayout3: {
    height: 9,
    width: 11,
    left: 153,
    position: "absolute",
  },
  vectorIconLayout2: {
    height: 8,
    width: 7,
    left: 330,
    position: "absolute",
  },
  textTypo: {
    left: 50,
    fontSize: FontSize.size_3xs,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  vectorIconLayout1: {
    height: 7,
    width: 8,
    left: 40,
    position: "absolute",
  },
  vectorIconLayout: {
    width: 3,
    left: 37,
    height: 4,
    position: "absolute",
  },
  frameGroupLayout: {
    height: 60,
    width: 81,
    left: 298,
    position: "absolute",
  },
  vectorPosition: {
    top: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupLayout: {
    backgroundColor: "transparent",
    height: 16,
    borderRadius: Border.br_3xs,
    left: 0,
    width: 81,
    position: "absolute",
  },
  vectorIconPosition: {
    left: "9.88%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  saveMonentsTypo: {
    height: 12,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorGray_900,
    fontSize: FontSize.size_5xs,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    position: "absolute",
  },
  moments: {
    left: 147,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    top: 8,
    position: "absolute",
  },
  frameChild: {
    top: 0,
  },
  frameItem: {
    top: 1241,
  },
  frameInner: {
    top: 626,
  },
  rectangleView: {
    top: 1867,
  },
  frameChild1: {
    top: 312,
  },
  frameChild2: {
    top: 1553,
  },
  frameChild3: {
    top: 938,
  },
  frameChild4: {
    top: 2179,
  },
  ellipseIcon: {
    left: 33,
    height: 30,
    width: 31,
    top: 8,
  },
  frameChild5: {
    top: 1249,
    left: 33,
    height: 30,
    width: 31,
  },
  frameChild6: {
    top: 634,
    left: 33,
    height: 30,
    width: 31,
  },
  frameChild7: {
    top: 1875,
    left: 33,
    height: 30,
    width: 31,
  },
  frameChild8: {
    top: 320,
    left: 33,
    height: 30,
    width: 31,
  },
  frameChild9: {
    top: 1561,
    left: 33,
    height: 30,
    width: 31,
  },
  frameChild10: {
    top: 946,
    left: 33,
    height: 30,
    width: 31,
  },
  frameChild11: {
    left: 6,
    top: 2187,
  },
  tomiokaGiyuu: {
    left: 66,
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    top: 8,
  },
  tomiokaGiyuu1: {
    left: 66,
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    top: 1249,
  },
  tomiokaGiyuu2: {
    left: 66,
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    top: 634,
  },
  tomiokaGiyuu3: {
    left: 66,
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    top: 1875,
  },
  tomiokaGiyuu4: {
    left: 66,
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    top: 320,
  },
  tomiokaGiyuu5: {
    left: 66,
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    top: 1561,
  },
  tomiokaGiyuu6: {
    left: 66,
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    top: 946,
  },
  tomiokaGiyuu7: {
    left: 39,
    top: 2187,
  },
  mAgo: {
    top: 23,
    left: 68,
    fontSize: FontSize.size_3xs,
  },
  mAgo1: {
    top: 1264,
    left: 68,
    fontSize: FontSize.size_3xs,
  },
  mAgo2: {
    top: 649,
    left: 68,
    fontSize: FontSize.size_3xs,
  },
  mAgo3: {
    top: 1890,
    left: 68,
    fontSize: FontSize.size_3xs,
  },
  mAgo4: {
    top: 335,
    left: 68,
    fontSize: FontSize.size_3xs,
  },
  mAgo5: {
    top: 1576,
    left: 68,
    fontSize: FontSize.size_3xs,
  },
  mAgo6: {
    top: 961,
    left: 68,
    fontSize: FontSize.size_3xs,
  },
  mAgo7: {
    top: 2202,
    left: 41,
  },
  rectangleIcon: {
    top: 55,
  },
  frameChild12: {
    top: 1296,
  },
  frameChild13: {
    top: 681,
  },
  frameChild14: {
    top: 1922,
  },
  frameChild15: {
    top: 367,
  },
  frameChild16: {
    top: 1608,
  },
  frameChild17: {
    top: 993,
  },
  frameChild18: {
    top: 2234,
  },
  vectorIcon: {
    top: 29,
    left: 109,
    height: 4,
    width: 4,
  },
  vectorIcon1: {
    top: 1270,
    left: 109,
    height: 4,
    width: 4,
  },
  vectorIcon2: {
    top: 655,
    left: 109,
    height: 4,
    width: 4,
  },
  vectorIcon3: {
    top: 1896,
    left: 109,
    height: 4,
    width: 4,
  },
  vectorIcon4: {
    top: 341,
    left: 109,
    height: 4,
    width: 4,
  },
  vectorIcon5: {
    top: 1582,
    left: 109,
    height: 4,
    width: 4,
  },
  vectorIcon6: {
    top: 967,
    left: 109,
    height: 4,
    width: 4,
  },
  vectorIcon7: {
    top: 2208,
    left: 82,
  },
  like: {
    top: 248,
  },
  like1: {
    top: 1489,
  },
  like2: {
    top: 874,
  },
  like3: {
    top: 2115,
  },
  like4: {
    top: 560,
  },
  like5: {
    top: 1801,
  },
  like6: {
    top: 1186,
  },
  like7: {
    top: 2427,
  },
  comment: {
    top: 248,
  },
  comment1: {
    top: 1489,
  },
  comment2: {
    top: 874,
  },
  comment3: {
    top: 2115,
  },
  comment4: {
    top: 560,
  },
  comment5: {
    top: 1801,
  },
  comment6: {
    top: 1186,
  },
  comment7: {
    top: 2427,
  },
  share: {
    top: 248,
  },
  share1: {
    top: 1489,
  },
  share2: {
    top: 874,
  },
  share3: {
    top: 2115,
  },
  share4: {
    top: 560,
  },
  share5: {
    top: 1801,
  },
  share6: {
    top: 1186,
  },
  share7: {
    top: 2427,
  },
  vectorIcon8: {
    top: 251,
  },
  vectorIcon9: {
    top: 1492,
  },
  vectorIcon10: {
    top: 877,
  },
  vectorIcon11: {
    top: 2118,
  },
  vectorIcon12: {
    top: 563,
  },
  vectorIcon13: {
    top: 1804,
  },
  vectorIcon14: {
    top: 1189,
  },
  vectorIcon15: {
    top: 2430,
  },
  vectorIcon16: {
    top: 252,
  },
  vectorIcon17: {
    top: 1493,
  },
  vectorIcon18: {
    top: 878,
  },
  vectorIcon19: {
    top: 2119,
  },
  vectorIcon20: {
    top: 564,
  },
  vectorIcon21: {
    top: 1805,
  },
  vectorIcon22: {
    top: 1190,
  },
  vectorIcon23: {
    top: 2431,
  },
  text: {
    top: 249,
  },
  text1: {
    top: 1490,
  },
  text2: {
    top: 875,
  },
  text3: {
    top: 2116,
  },
  text4: {
    top: 561,
  },
  text5: {
    top: 1802,
  },
  text6: {
    top: 1187,
  },
  text7: {
    top: 2428,
  },
  vectorIcon24: {
    top: 253,
  },
  vectorIcon25: {
    top: 1494,
  },
  vectorIcon26: {
    top: 879,
  },
  vectorIcon27: {
    top: 2120,
  },
  vectorIcon28: {
    top: 565,
  },
  vectorIcon29: {
    top: 1806,
  },
  vectorIcon30: {
    top: 1191,
  },
  vectorIcon31: {
    top: 2432,
  },
  vectorIcon32: {
    top: 256,
  },
  vectorIcon33: {
    top: 1497,
  },
  vectorIcon34: {
    top: 882,
  },
  vectorIcon35: {
    top: 2123,
  },
  vectorIcon36: {
    top: 568,
  },
  vectorIcon37: {
    top: 1809,
  },
  vectorIcon38: {
    top: 1194,
  },
  vectorIcon39: {
    top: 2435,
  },
  vectorIcon40: {
    height: "6.67%",
    width: "23.46%",
    right: "6.17%",
    bottom: "93.33%",
    left: "70.37%",
    top: "0%",
    position: "absolute",
  },
  groupChild: {
    top: 8,
  },
  groupItem: {
    top: 25,
  },
  groupInner: {
    top: 44,
  },
  vectorIcon41: {
    height: "15.33%",
    width: "10.49%",
    top: "17%",
    right: "79.63%",
    bottom: "67.67%",
  },
  saveMonents: {
    top: 9,
    left: 12,
    width: 68,
  },
  hideMoments: {
    top: 27,
    left: 20,
    width: 54,
  },
  report: {
    top: 48,
    left: 21,
    width: 26,
    height: 6,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorGray_900,
    fontSize: FontSize.size_5xs,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelMedium,
    fontWeight: "500",
    lineHeight: 16,
    position: "absolute",
  },
  vectorIcon42: {
    height: "13.33%",
    width: "9.88%",
    top: "50%",
    right: "80.25%",
    bottom: "36.67%",
  },
  vectorIcon43: {
    height: "10%",
    width: "7.41%",
    top: "81.67%",
    right: "81.48%",
    bottom: "8.33%",
    left: "11.11%",
    position: "absolute",
  },
  vectorParent: {
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
    height: "100%",
  },
  groupWrapper: {
    top: 12,
  },
  groupContainer: {
    top: 1253,
  },
  groupFrame: {
    top: 638,
  },
  frameView: {
    top: 1879,
  },
  groupWrapper1: {
    top: 324,
  },
  groupWrapper2: {
    top: 1565,
  },
  groupWrapper3: {
    top: 950,
  },
  groupWrapper4: {
    top: 2191,
  },
  rectangleParent: {
    top: 61,
    left: -27,
    width: 387,
    height: 739,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  vector: {
    left: "2.78%",
    top: "1.13%",
    right: "95%",
    bottom: "97%",
    width: "2.22%",
    height: "1.88%",
    position: "absolute",
  },
  momentsPage: {
    backgroundColor: Color.colorBlack,
    height: 800,
    overflow: "hidden",
    width: 360,
    borderRadius: Border.br_8xs,
  },
});

export default MomentsPage;
