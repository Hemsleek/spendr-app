import { View, StyleSheet } from "react-native";
import React from "react";
import BottomNav from "../components/organisms/BottomNav";

const Index = () => {
  return (
    <View style={styles.container}>
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default Index;
