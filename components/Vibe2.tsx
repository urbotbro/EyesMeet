import * as React from "react";

const Vibe2 = () => {
  return (
    <Image
      style={styles.property1defaultIcon}
      contentFit="cover"
      source={require("../assets/property-1default1.png")}
    />
  );
};

const styles = StyleSheet.create({
  property1defaultIcon: {
    width: 65,
    height: 43,
  },
});

export default Vibe2;
