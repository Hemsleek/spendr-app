import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Button } from "react-native-paper";

import Layer from "../components/atoms/icons/Layer";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { IAppRootNavParams } from "../utils/types";
import BrandLogo from "../components/atoms/icons/BrandLogoIcon";

type INav = NavigationProp<IAppRootNavParams, "onBoarding Screen">;

const OnBoarding = () => {
  const navigation: INav = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.layer}>
        <Layer />
      </View>
      <View style={styles.mainContent}>
        <BrandLogo />
        <View style={styles.imgWrapper}>
          <Image
            source={require("../assets/images/onboarding.png")}
            style={styles.img}
          />
        </View>
        <View style={styles.heroWrapper}>
          <Text style={styles.heroText}>Form a good </Text>
          <Text style={styles.heroText}>spending habit</Text>
        </View>
        <View style={styles.buttonTextWrapper}>
          <Button
            mode="contained"
            color="#fff"
            onPress={() => {}}
            contentStyle={{
              paddingVertical: hp("3.69%"),
              paddingHorizontal: wp("10.67%"),
            }}
            uppercase={false}
            style={styles.buttonEl}
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </Button>
          <View style={styles.loginTextWrapper}>
            <Text style={[styles.loginText, { color: "#fff" }]}>
              I have one.{" "}
            </Text>
            <Pressable onPress={() => navigation.navigate("Splendr Screen")}>
              <Text style={[styles.loginText, , { color: "#FEE715" }]}>
                Log me In
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#2E31B3",
    paddingTop: hp("8.867%"),
    paddingBottom: hp("5.3%"),
  },
  layer: {
    position: "absolute",
    width: "100%",
    top: 0,
  },
  mainContent: {
    alignItems: "center",
  },
  imgWrapper: {
    width: wp("68%"),
    height: hp("30.78%"),
    marginTop: hp("3.32%"),
    marginBottom: hp("3.94%"),
  },
  img: {
    width: "100%",
    height: "100%",
  },
  heroWrapper: {
    maxWidth: wp("62.13%"),
    alignItems: "center",
  },
  heroText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 30,
    color: "#fff",
  },
  buttonTextWrapper: {
    marginTop: hp("20.19%"),
  },
  buttonEl: {
    borderRadius: 25,
  },
  buttonText: {
    color: "#2E31B3",
    fontWeight: "700",
    fontSize: 18,
  },
  loginTextWrapper: {
    marginTop: hp("2.46%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    fontSize: 12,
    fontWeight: "700",
  },
});

export default OnBoarding;
