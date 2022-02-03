import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const BrandLogo = ({
  color = "#fff",
  vertical = false,
}: {
  color?: string;
  vertical?: boolean;
}) => {
  return (
    <View style={[styles.container, vertical && styles.verticalStyle]}>
      <Text style={[styles.logoText, { color }, vertical && { fontSize: 14 }]}>
        Spendr
      </Text>
      <View style={[styles.smallCircle, vertical && styles.spaceTop]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  verticalStyle: {
    alignItems: "center",
    flexDirection: "column",
    width: wp("12.8%"),
    height: hp("3%"),
  },
  logoText: {
    fontSize: 24,
    fontWeight: "700",
  },
  smallCircle: {
    width: wp("1.33%"),
    height: hp("0.61%"),
    borderRadius: 100,
    backgroundColor: "#FFC215",
    overflow: "hidden",
    marginBottom: -hp("2%"),
  },
  spaceTop: {
    marginTop: hp("0.3%"),
    alignSelf: "auto",
  },
});

export default BrandLogo;
