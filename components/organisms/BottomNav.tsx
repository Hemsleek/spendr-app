import React, { useState } from "react";

//Screens
import HomeScreen from "../../screens/Home";
import TransactionScreen from "../../screens/Transaction";
import SendMoneyScreen from "../../screens/SendMoney";
import CardsScreen from "../../screens/Cards";
import ProfileScreen from "../../screens/Profile";

import { BottomNavigation } from "react-native-paper";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import RenderIcon from "../atoms/RenderIcon";

const BottomNav = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "home" },
    { key: "transaction" },
    { key: "sendMoney" },
    { key: "cards" },
    { key: "profile" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    transaction: TransactionScreen,
    sendMoney: SendMoneyScreen,
    cards: CardsScreen,
    profile: ProfileScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={false}
      barStyle={{
        backgroundColor: "white",
        paddingTop: hp("1.23%"),
        borderTopColor: "rgba(43, 36, 255, 0.1)",
        borderTopWidth: 1,
      }}
      renderIcon={({ route, focused }) => (
        <RenderIcon route={route} focused={focused} />
      )}
    />
  );
};

export default BottomNav;
