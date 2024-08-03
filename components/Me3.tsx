import * as React from "react";

const Me3 = () => {
  return (
    <Image
      style={styles.property1defaultIcon}
      contentFit="cover"
      source={require("../assets/property-1default2.png")}
    />
  );
};

const styles = StyleSheet.create({
  property1defaultIcon: {
    width: 63,
    height: 56,
  },
});

export default Me3;
