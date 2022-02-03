import { View, StyleSheet } from "react-native";
import React from "react";
import NotificationIcon from "../atoms/icons/NotificationIcon";
import SettingsIcon from "../atoms/icons/SettingsIcon";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import BrandLogo from "../atoms/icons/BrandLogoIcon";

const Header = () => {
  return (
    <View style={styles.container}>
      <BrandLogo color="#2E31B3" />
      <View style={styles.actionButtons}>
        <View style={styles.spacer}>
          <NotificationIcon />
        </View>
        <SettingsIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actionButtons: {
    flexDirection: "row",
  },
  spacer: {
    marginRight: wp("5.33%"),
  },
});

export default Header;
