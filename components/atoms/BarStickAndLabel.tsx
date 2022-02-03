import { View, Text, StyleSheet } from "react-native";
import React from "react";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const BarStickAndLabel = ({
  label = "",
  active = false,
  height,
}: {
  label: string;
  active?: boolean;
  height: number;
}) => {
  const heightToUse = hp(`${(height / 812) * 100}%`);
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.stick,
          { height: heightToUse },
          active && { backgroundColor: "#2E31B3" },
        ]}
      />
      <Text style={styles.stickLabel}>{label}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  stick: {
    backgroundColor: "rgba(46, 49, 179, 0.08)",
    borderRadius: 5,
    width: wp("6.4%"),
  },
  stickLabel: {
    marginTop: hp("1.6%"),
    fontWeight: "400",
    fontSize: 8,
    textAlign: "center",
    color: "rgba(79, 79, 79, 0.5)",
  },
});

export default BarStickAndLabel;
