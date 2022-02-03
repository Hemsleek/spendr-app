import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import OnBoardingScreen from "./screens/OnBoarding";
import SpendrScreens from "./screens";

const Stack = createStackNavigator();
const AppRoutes = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator
      initialRouteName="OnBoarding Screen"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="onBoarding Screen" component={OnBoardingScreen} />
      <Screen name="Splendr Screen" component={SpendrScreens} />
    </Navigator>
  );
};

export default AppRoutes;
