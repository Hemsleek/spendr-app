import { View, Text, StyleSheet } from "react-native";
import React from "react";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import AddIcon from "../atoms/icons/AddIcon";

const AddCard = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: hp("2%") }}>
        <AddIcon />
      </View>
      <Text style={styles.addText}>Add new</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  addText: {
    color: "#111111",
    fontSize: 14,
    fontWeight: "400",
    marginTop: hp("2.5%"),
    transform: [{ rotate: "-90deg" }],
  },
});
export default AddCard;
