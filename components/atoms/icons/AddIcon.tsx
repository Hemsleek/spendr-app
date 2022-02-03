import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg width={42} height={90} fill="none" {...props}>
    <Rect opacity={0.05} width={42} height={90} rx={14} fill="#2E31B3" />
    <Path
      d="M25.5 45.563h-9a.567.567 0 0 1-.563-.563c0-.307.255-.563.563-.563h9c.308 0 .563.256.563.563a.567.567 0 0 1-.563.563Z"
      fill="#2E31B3"
    />
    <Path
      d="M21 50.063a.567.567 0 0 1-.563-.563v-9c0-.307.255-.563.563-.563.308 0 .563.256.563.563v9a.567.567 0 0 1-.563.563Z"
      fill="#2E31B3"
    />
  </Svg>
);

export default SvgComponent;
