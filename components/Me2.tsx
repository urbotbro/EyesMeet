import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Me2 = () => {
  return (
    <View style={styles.me}>
      <Image
        style={styles.meIcon}
        contentFit="cover"
        source={require("../assets/me1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  meIcon: {
    height: 30,
    width: 35,
  },
  me: {
    alignItems: "center",
    width: 35,
  },
});

export default Me2;
