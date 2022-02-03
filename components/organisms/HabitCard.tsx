import { View, Text, StyleSheet } from "react-native";
import React from "react";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { habitBarData } from "../../data";
import BarStickAndLabel from "../atoms/BarStickAndLabel";

const HabitCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.lightText}>Friday, 20th</Text>
        <Text style={styles.boldText}>$350.36</Text>
      </View>
      <View style={styles.barChart}>
        {habitBarData.map((stick, stickIndex) => (
          <BarStickAndLabel key={stickIndex} {...stick} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("87.2%"),
    height: hp("40.02%"),
    backgroundColor: "rgba(46, 49, 179, 0.05)",
    borderRadius: 30,
    paddingVertical: hp("3.69%"),
    paddingHorizontal: wp("8%"),
  },
  textWrapper: {
    alignItems: "center",
    marginBottom: hp("5.17%"),
  },
  lightText: {
    fontWeight: "400",
    fontSize: 10,
    color: "rgba(46, 49, 179, 0.5)",
  },
  boldText: {
    marginTop: hp("0.37%"),
    fontWeight: "700",
    fontSize: 24,
    color: "#2E31B3",
  },
  barChart: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});

export default HabitCard;
