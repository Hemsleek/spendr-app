import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Header from "../components/molecules/Header";
import Card from "../components/molecules/Card";
import AddCard from "../components/molecules/AddCard";

import MasterCardIcon from "../components/atoms/icons/MasterCardIcon";
import VisaIcon from "../components/atoms/icons/VisaIcon";
import HabitCard from "../components/organisms/HabitCard";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainContent}>
        <View style={styles.cards}>
          <Card
            amount="23,560"
            amountColor="#fff"
            balanceColor="rgba(255,255,255,0.5)"
            bg="#2E31B3"
            logo={<MasterCardIcon />}
          />

          <View style={styles.spacer}>
            <Card
              amount="1,055"
              amountColor="#111111"
              balanceColor="#828282"
              bg="rgba(43, 36, 255, 0.1)"
              logo={<VisaIcon />}
            />
          </View>
          <AddCard />
        </View>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 580 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.spendingHabit}>
            <Text style={styles.habitTitle}>Spending Habit</Text>
            <HabitCard />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: wp("6.4%"),
    paddingTop: hp("6.65%"),
    paddingBottom: hp("2.09%"),
  },
  mainContent: {
    marginTop: hp("5.54%"),
  },
  cards: {
    marginBottom: hp("5.9%"),
    flexDirection: "row",
  },
  spacer: {
    marginLeft: wp("4.53%"),
    marginRight: wp("4.27%"),
  },
  spendingHabit: {},
  habitTitle: {
    marginBottom: hp("2%"),
    fontWeight: "700",
    fontSize: 18,
  },
});

export default Home;
