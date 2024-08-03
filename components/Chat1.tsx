import * as React from "react";

const Chat1 = () => {
  return (
    <Image
      style={styles.property1defaultIcon}
      contentFit="cover"
      source={require("../assets/property-1default.png")}
    />
  );
};

const styles = StyleSheet.create({
  property1defaultIcon: {
    width: 58,
    height: 53,
  },
});

export default Chat1;
