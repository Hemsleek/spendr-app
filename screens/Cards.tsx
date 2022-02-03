import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Cards = () => {
  return (
    <View style={styles.container}>
      <Text>Cards Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Cards;
