import React from "react";

//icons
import BrandLogoIcon from "./BrandLogo";
import TransactionIcon from "./icons/TransactionIcon";
import SendMoneyIcon from "./icons/SendMoneyIcon";
import CardsIcon from "./icons/CardsIcon";
import ProfileIcon from "./icons/ProfileIcon";

interface IRoute {
  route: any;
  focused: boolean;
}

const RenderIcon = ({ route: { key }, focused }: IRoute) => {
  const color = "#2E31B3";
  let result = (
    <BrandLogoIcon
      color={focused ? color : "rgba(43, 36, 255, 0.1)"}
      vertical
    />
  );

  switch (key) {
    case "home":
      break;
    case "transaction":
      result = <TransactionIcon focused={focused} />;
      break;
    case "sendMoney":
      result = <SendMoneyIcon focused={focused} />;
      break;
    case "cards":
      result = <CardsIcon focused={focused} />;
      break;
    case "profile":
      result = <ProfileIcon focused={focused} />;
      break;
    default:
      break;
  }
  return result;
};

export default RenderIcon;
