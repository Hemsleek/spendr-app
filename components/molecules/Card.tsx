import React, { ReactElement } from "react";
import { View, Text, StyleSheet } from "react-native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Card = ({
  logo,
  amount = "0",
  amountColor = "#fff",
  balanceColor = "#fff",
  bg = "rgba(43, 36, 255, 0.1)",
}: {
  logo: ReactElement;
  amount: string;
  amountColor: string;
  balanceColor: string;
  bg: string;
}) => {
  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      {logo}
      <View>
        <Text style={[styles.balanceText, { color: balanceColor }]}>
          Balance
        </Text>
        <Text
          style={[styles.amount, { color: amountColor }]}
        >{`$${amount}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2E31B3",
    paddingVertical: hp("3.08%"),
    paddingLeft: wp("5.07%"),
    width: wp("33.6%"),
    height: hp("22.66%"),
    justifyContent: "space-between",
    borderRadius: 20,
  },
  balanceText: {
    fontSize: 10,
    fontWeight: "400",
  },
  amount: {
    marginTop: hp("0.25%"),
    fontSize: 18,
    fontWeight: "700",
  },
});

export default Card;
