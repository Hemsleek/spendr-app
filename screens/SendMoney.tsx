import { View, Text, StyleSheet } from "react-native";
import React from "react";

const SendMoney = () => {
  return (
    <View style={styles.container}>
      <Text>Send Money Screen</Text>
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

export default SendMoney;
