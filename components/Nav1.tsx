import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Nav1 = () => {
  return (
    <View style={styles.nav}>
      <Image
        style={styles.chatIcon}
        contentFit="cover"
        source={require("../assets/property-1chat-activetrue.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chatIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  nav: {
    width: 37,
    height: 37,
  },
});

export default Nav1;
